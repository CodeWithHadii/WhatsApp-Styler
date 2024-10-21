let backupFileHandle = null;
let autoSaveInterval = null;
let recentTexts = [];
let undoStack = [];
let redoStack = [];

document.getElementById('boldBtn').addEventListener('click', () => applyFormatting('*'));
document.getElementById('italicBtn').addEventListener('click', () => applyFormatting('_'));
document.getElementById('strikeBtn').addEventListener('click', () => applyFormatting('~'));
document.getElementById('monoBtn').addEventListener('click', () => applyFormatting('```'));
document.getElementById('listBtn').addEventListener('click', addListMarker);
document.getElementById('numberedListBtn').addEventListener('click', addNumberedList);
document.getElementById('copyBtn').addEventListener('click', copyFormattedText);
document.getElementById('backupBtn').addEventListener('click', createBackup);
document.getElementById('clearBtn').addEventListener('click', clearBackupAndCache);
document.getElementById('newTextBtn').addEventListener('click', createNewText);
document.getElementById('darkModeBtn').addEventListener('click', toggleDarkMode);
document.getElementById('undoBtn').addEventListener('click', undo);
document.getElementById('redoBtn').addEventListener('click', redo);
document.getElementById('textInput').addEventListener('input', handleTextInputChange);
document.getElementById('closeTutorial').addEventListener('click', closeTutorial);

function applyFormatting(symbol) {
    saveState();
    const textarea = document.getElementById('textInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = symbol + selectedText + symbol;
    textarea.setRangeText(newText, start, end, 'end');
    updateOutput();
    updateCharCount();
}

function addListMarker() {
    saveState();
    const textarea = document.getElementById('textInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = "• " + selectedText;
    textarea.setRangeText(newText, start, end, 'end');
    updateOutput();
    updateCharCount();
}

function addNumberedList() {
    saveState();
    const textarea = document.getElementById('textInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const lines = selectedText.split('\n');
    const numberedText = lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    textarea.setRangeText(numberedText, start, end, 'end');
    updateOutput();
    updateCharCount();
}

function updateOutput() {
    const text = document.getElementById('textInput').value;
    const formattedText = text
        .replace(/\*(.*?)\*/g, '<b>$1</b>')
        .replace(/_(.*?)_/g, '<i>$1</i>')
        .replace(/~(.*?)~/g, '<s>$1</s>')
        .replace(/```(.*?)```/g, '<pre>$1</pre>')
        .replace(/• (.*?)$/gm, '<li>$1</li>')
        .replace(/(\d+)\. (.*?)$/gm, '<li>$1. $2</li>');
    
    document.getElementById('output').innerHTML = "<ul>" + formattedText + "</ul>";
}

function copyFormattedText() {
    const text = document.getElementById('textInput').value;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

function createNewText() {
    saveState();
    const currentText = document.getElementById('textInput').value.trim();
    if (currentText) {
        addToRecentTexts(currentText);
    }
    document.getElementById('textInput').value = '';
    updateOutput();
    updateCharCount();
    updateBackupInfo('Novo texto criado. Digite seu conteúdo.');
}

function addToRecentTexts(text) {
    const preview = text.substring(0, 30) + (text.length > 30 ? '...' : '');
    recentTexts.unshift({ preview, fullText: text });
    if (recentTexts.length > 10) {
        recentTexts.pop();
    }
    updateRecentTextsList();
    localStorage.setItem('recentTexts', JSON.stringify(recentTexts));
}

function updateRecentTextsList() {
    const list = document.getElementById('recentTextsList');
    list.innerHTML = '';
    recentTexts.forEach((textObj, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="text-preview">${textObj.preview}</span>
            <button class="delete-btn" aria-label="Deletar texto"><i class="fas fa-times"></i></button>
        `;
        li.querySelector('.text-preview').addEventListener('click', () => loadRecentText(index));
        li.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteRecentText(index);
        });
        list.appendChild(li);
    });
}

function loadRecentText(index) {
    saveState();
    const textObj = recentTexts[index];
    if (textObj) {
        document.getElementById('textInput').value = textObj.fullText;
        updateOutput();
        updateCharCount();
        updateBackupInfo('Texto recente carregado.');
    }
}

function deleteRecentText(index) {
    recentTexts.splice(index, 1);
    updateRecentTextsList();
    localStorage.setItem('recentTexts', JSON.stringify(recentTexts));
    updateBackupInfo('Texto recente deletado.');
}

function handleTextInputChange() {
    saveState();
    updateOutput();
    updateCharCount();
    if (backupFileHandle && !autoSaveInterval) {
        startAutoSave();
    }
}

function clearBackupAndCache() {
    localStorage.removeItem('backupFileName');
    localStorage.removeItem('backupContent');
    localStorage.removeItem('recentTexts');
    backupFileHandle = null;
    document.getElementById('textInput').value = '';
    recentTexts = [];
    updateRecentTextsList();
    updateOutput();
    updateCharCount();
    updateBackupInfo('Backup, cache e textos recentes limpos com sucesso!');
    stopAutoSave();
}

async function createBackup() {
    const text = document.getElementById('textInput').value;
    
    try {
        if (!backupFileHandle) {
            backupFileHandle = await window.showSaveFilePicker({
                suggestedName: 'whatsapp_styler_backup.txt',
                types: [{
                    description: 'Text Files',
                    accept: {'text/plain': ['.txt']},
                }],
            });
            localStorage.setItem('backupFileName', backupFileHandle.name);
        }

        const writable = await backupFileHandle.createWritable();
        await writable.write(text);
        await writable.close();

        localStorage.setItem('backupContent', text);
        addToRecentTexts(text);

        updateBackupInfo('Backup criado com sucesso!');
        startAutoSave();
    } catch (error) {
        console.error('Erro ao criar backup:', error);
        updateBackupInfo('Erro ao criar backup. Tente novamente.');
    }
}

function updateBackupInfo(message) {
    document.getElementById('backupInfo').textContent = message;
}

function updateAutoSaveStatus(message) {
    document.getElementById('autoSaveStatus').textContent = message;
}

function loadBackup() {
    const backupContent = localStorage.getItem('backupContent');
    if (backupContent) {
        document.getElementById('textInput').value = backupContent;
        updateOutput();
        updateCharCount();
        updateBackupInfo('Backup carregado com sucesso!');
        startAutoSave();
    } else {
        updateBackupInfo('Nenhum backup encontrado. Crie um novo backup para iniciar o salvamento automático.');
    }
    
    const storedRecentTexts = localStorage.getItem('recentTexts');
    if (storedRecentTexts) {
        recentTexts = JSON.parse(storedRecentTexts);
        updateRecentTextsList();
    }
}

async function autoSave() {
    if (backupFileHandle) {
        const text = document.getElementById('textInput').value;
        try {
            const writable = await backupFileHandle.createWritable();
            await writable.write(text);
            await writable.close();

            localStorage.setItem('backupContent', text);

            updateAutoSaveStatus('Salvo automaticamente: ' + new Date().toLocaleTimeString());
        } catch (error) {
            console.error('Erro ao salvar automaticamente:', error);
            updateAutoSaveStatus('Erro ao salvar automaticamente');
        }
    }
}

function startAutoSave() {
    if (!autoSaveInterval) {
        autoSaveInterval = setInterval(autoSave, 60000); // 60000 ms = 1 minuto
        updateAutoSaveStatus('Salvamento automático iniciado');
    }
}

function stopAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
        autoSaveInterval = null;
        updateAutoSaveStatus('Salvamento automático parado');
    }
}

function updateCharCount() {
    const text = document.getElementById('textInput').value;
    const charCount = text.length;
    document.getElementById('charCount').textContent = `Caracteres: ${charCount} / 1000`;
    if (charCount > 1000) {
        document.getElementById('charCount').classList.add('over-limit');
    } else {
        document.getElementById('charCount').classList.remove('over-limit');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function saveState() {
    const currentText = document.getElementById('textInput').value;
    undoStack.push(currentText);
    redoStack = [];
}

function undo() {
    if (undoStack.length > 1) {
        const currentText = undoStack.pop();
        redoStack.push(currentText);
        document.getElementById('textInput').value = undoStack[undoStack.length - 1];
        updateOutput();
        updateCharCount();
    }
}

function redo() {
    if (redoStack.length > 0) {
        const nextText = redoStack.pop();
        undoStack.push(nextText);
        document.getElementById('textInput').value = nextText;
        updateOutput();
        updateCharCount();
    }
}

function closeTutorial() {
    document.getElementById('tutorial').style.display = 'none';
    localStorage.setItem('tutorialSeen', 'true');
}

// Atalhos de teclado
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && !event.shiftKey && !event.altKey) {
        switch (event.key.toLowerCase()) {
            case 'b':
                event.preventDefault();
                applyFormatting('*');
                break;
            case 'i':
                event.preventDefault();
                applyFormatting('_');
                break;
            case 's':
                event.preventDefault();
                applyFormatting('~');
                break;
            case 'm':
                event.preventDefault();
                applyFormatting('```');
                break;
            case 'z':
                event.preventDefault();
                undo();
                break;
            case 'y':
                event.preventDefault();
                redo();
                break;
        }
    }
});

// Inicializar a aplicação
function initApp() {
    loadBackup();
    updateCharCount();

    // Verificar e aplicar o modo escuro
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Mostrar tutorial se for a primeira visita
    if (!localStorage.getItem('tutorialSeen')) {
        document.getElementById('tutorial').style.display = 'flex';
    }
}

// Chamar a função de inicialização quando a página carregar
window.addEventListener('load', initApp);
