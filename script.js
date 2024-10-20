let backupFileHandle = null;
let autoSaveInterval = null;

document.getElementById('boldBtn').addEventListener('click', () => applyFormatting('*'));
document.getElementById('italicBtn').addEventListener('click', () => applyFormatting('_'));
document.getElementById('strikeBtn').addEventListener('click', () => applyFormatting('~'));
document.getElementById('monoBtn').addEventListener('click', () => applyFormatting('```'));
document.getElementById('listBtn').addEventListener('click', addListMarker);
document.getElementById('numberedListBtn').addEventListener('click', addNumberedList);
document.getElementById('copyBtn').addEventListener('click', copyFormattedText);
document.getElementById('backupBtn').addEventListener('click', createBackup);
document.getElementById('clearBtn').addEventListener('click', clearBackupAndCache);
document.getElementById('textInput').addEventListener('input', handleTextInputChange);

function applyFormatting(symbol) {
    const textarea = document.getElementById('textInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = symbol + selectedText + symbol;
    textarea.setRangeText(newText, start, end, 'end');
    updateOutput();
}

function addListMarker() {
    const textarea = document.getElementById('textInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = "• " + selectedText;
    textarea.setRangeText(newText, start, end, 'end');
    updateOutput();
}

function addNumberedList() {
    const textarea = document.getElementById('textInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const lines = selectedText.split('\n');
    const numberedText = lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    textarea.setRangeText(numberedText, start, end, 'end');
    updateOutput();
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

        updateBackupInfo('Backup criado com sucesso!');
        startAutoSave();
    } catch (error) {
        console.error('Erro ao criar backup:', error);
        updateBackupInfo('Erro ao criar backup. Tente novamente.');
    }
}

function clearBackupAndCache() {
    localStorage.removeItem('backupFileName');
    localStorage.removeItem('backupContent');
    backupFileHandle = null;
    document.getElementById('textInput').value = '';
    updateOutput();
    updateBackupInfo('Backup e cache limpos com sucesso!');
    stopAutoSave();
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
        updateBackupInfo('Backup carregado com sucesso!');
        startAutoSave();
    } else {
        updateBackupInfo('Nenhum backup encontrado. Crie um novo backup para iniciar o salvamento automático.');
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

function handleTextInputChange() {
    updateOutput();
    if (backupFileHandle && !autoSaveInterval) {
        startAutoSave();
    }
}

// Inicializar a aplicação
function initApp() {
    loadBackup();
}

// Chamar a função de inicialização quando a página carregar
window.addEventListener('load', initApp);
