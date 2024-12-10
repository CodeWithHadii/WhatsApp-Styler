// script.js

// Objeto de traduções
const translations = {
    "pt-BR": {
        "title": "WhatsApp Styler",
        "subtitle": "Formatação Elegante para Suas Mensagens",
        "bold": "Negrito",
        "italic": "Itálico",
        "strike": "Tachado",
        "mono": "Monoespaçado",
        "list": "Lista",
        "numberedList": "Lista Numerada",
        "undo": "Desfazer",
        "redo": "Refazer",
        "copyText": "Copiar Texto Formatado",
        "createBackup": "Criar Backup",
        "newText": "Novo Texto",
        "clearAll": "Limpar Tudo",
        "toggleDarkMode": "Modo Escuro",
        "preview": "Pré-visualização:",
        "recentTexts": "Textos Recentes:",
        "welcomeTutorial": "Bem-vindo ao WhatsApp Styler!",
        "tutorialTips": "Aqui estão algumas dicas rápidas:",
        "tip1": "Use os botões na barra de ferramentas para formatar seu texto.",
        "tip2": "O texto formatado aparecerá na pré-visualização abaixo.",
        "tip3": "Você pode usar atalhos de teclado como Ctrl+B para negrito.",
        "tip4": "Seus textos recentes aparecerão na lista abaixo.",
        "understood": "Entendi!",
        "textareaPlaceholder": "Digite ou cole seu texto aqui...",
        "boldTitle": "Negrito (Ctrl+B)",
        "italicTitle": "Itálico (Ctrl+I)",
        "strikeTitle": "Tachado (Ctrl+S)",
        "monoTitle": "Monoespaçado (Ctrl+M)",
        "listTitle": "Lista",
        "numberedListTitle": "Lista Numerada",
        "undoTitle": "Desfazer (Ctrl+Z)",
        "redoTitle": "Refazer (Ctrl+Y)",
        "openTutorial": "Abrir Tutorial",
        "exportText": "Exportar Texto",
        "importText": "Importar Texto",
        // Mensagens dinâmicas
        "copySuccess": "Texto copiado para a área de transferência!",
        "backupSuccess": "Backup criado com sucesso!",
        "backupError": "Erro ao criar backup. Tente novamente.",
        "newTextCreated": "Novo texto criado. Digite seu conteúdo.",
        "backupLoaded": "Backup carregado com sucesso!",
        "noBackup": "Nenhum backup encontrado. Crie um novo backup para iniciar o salvamento automático.",
        "backupCleared": "Backup, cache e textos recentes limpos com sucesso!",
        "autoSaveStarted": "Salvamento automático iniciado",
        "autoSaveStopped": "Salvamento automático parado",
        "autoSaveSaved": "Salvo automaticamente: ",
        "autoSaveError": "Erro ao salvar automaticamente",
        "recentTextLoaded": "Texto recente carregado.",
        "recentTextDeleted": "Texto recente deletado.",
        "exportSuccess": "Texto exportado com sucesso!",
        "exportError": "Erro ao exportar texto.",
        "importSuccess": "Texto importado com sucesso!",
        "importError": "Erro ao importar texto."
    },
    "en": {
        "title": "WhatsApp Styler",
        "subtitle": "Elegant Formatting for Your Messages",
        "bold": "Bold",
        "italic": "Italic",
        "strike": "Strikethrough",
        "mono": "Monospaced",
        "list": "List",
        "numberedList": "Numbered List",
        "undo": "Undo",
        "redo": "Redo",
        "copyText": "Copy Formatted Text",
        "createBackup": "Create Backup",
        "newText": "New Text",
        "clearAll": "Clear All",
        "toggleDarkMode": "Dark Mode",
        "preview": "Preview:",
        "recentTexts": "Recent Texts:",
        "welcomeTutorial": "Welcome to WhatsApp Styler!",
        "tutorialTips": "Here are some quick tips:",
        "tip1": "Use the buttons in the toolbar to format your text.",
        "tip2": "The formatted text will appear in the preview below.",
        "tip3": "You can use keyboard shortcuts like Ctrl+B for bold.",
        "tip4": "Your recent texts will appear in the list below.",
        "understood": "Understood!",
        "textareaPlaceholder": "Type or paste your text here...",
        "boldTitle": "Bold (Ctrl+B)",
        "italicTitle": "Italic (Ctrl+I)",
        "strikeTitle": "Strikethrough (Ctrl+S)",
        "monoTitle": "Monospaced (Ctrl+M)",
        "listTitle": "List",
        "numberedListTitle": "Numbered List",
        "undoTitle": "Undo (Ctrl+Z)",
        "redoTitle": "Redo (Ctrl+Y)",
        "openTutorial": "Open Tutorial",
        "exportText": "Export Text",
        "importText": "Import Text",
        // Mensagens dinâmicas
        "copySuccess": "Text copied to clipboard!",
        "backupSuccess": "Backup created successfully!",
        "backupError": "Error creating backup. Please try again.",
        "newTextCreated": "New text created. Enter your content.",
        "backupLoaded": "Backup loaded successfully!",
        "noBackup": "No backup found. Create a new backup to start auto-saving.",
        "backupCleared": "Backup, cache, and recent texts successfully cleared!",
        "autoSaveStarted": "Auto-save started",
        "autoSaveStopped": "Auto-save stopped",
        "autoSaveSaved": "Auto-saved: ",
        "autoSaveError": "Error auto-saving",
        "recentTextLoaded": "Recent text loaded.",
        "recentTextDeleted": "Recent text deleted.",
        "exportSuccess": "Text exported successfully!",
        "exportError": "Error exporting text.",
        "importSuccess": "Text imported successfully!",
        "importError": "Error importing text."
    },
    "es": {
        "title": "WhatsApp Styler",
        "subtitle": "Formato Elegante para Tus Mensajes",
        "bold": "Negrita",
        "italic": "Cursiva",
        "strike": "Tachado",
        "mono": "Monoespaciado",
        "list": "Lista",
        "numberedList": "Lista Numerada",
        "undo": "Deshacer",
        "redo": "Rehacer",
        "copyText": "Copiar Texto Formateado",
        "createBackup": "Crear Respaldo",
        "newText": "Nuevo Texto",
        "clearAll": "Limpiar Todo",
        "toggleDarkMode": "Modo Oscuro",
        "preview": "Previsualización:",
        "recentTexts": "Textos Recientes:",
        "welcomeTutorial": "¡Bienvenido a WhatsApp Styler!",
        "tutorialTips": "Aquí tienes algunos consejos rápidos:",
        "tip1": "Usa los botones en la barra de herramientas para formatear tu texto.",
        "tip2": "El texto formateado aparecerá en la previsualización de abajo.",
        "tip3": "Puedes usar atajos de teclado como Ctrl+B para negrita.",
        "tip4": "Tus textos recientes aparecerán en la lista de abajo.",
        "understood": "¡Entendido!",
        "textareaPlaceholder": "Escribe o pega tu texto aquí...",
        "boldTitle": "Negrita (Ctrl+B)",
        "italicTitle": "Cursiva (Ctrl+I)",
        "strikeTitle": "Tachado (Ctrl+S)",
        "monoTitle": "Monoespaciado (Ctrl+M)",
        "listTitle": "Lista",
        "numberedListTitle": "Lista Numerada",
        "undoTitle": "Deshacer (Ctrl+Z)",
        "redoTitle": "Rehacer (Ctrl+Y)",
        "openTutorial": "Abrir Tutorial",
        "exportText": "Exportar Texto",
        "importText": "Importar Texto",
        // Mensagens dinâmicas
        "copySuccess": "¡Texto copiado al portapapeles!",
        "backupSuccess": "¡Respaldo creado con éxito!",
        "backupError": "Error al crear el respaldo. Por favor, intenta de nuevo.",
        "newTextCreated": "Nuevo texto creado. Ingresa tu contenido.",
        "backupLoaded": "¡Respaldo cargado con éxito!",
        "noBackup": "No se encontró ningún respaldo. Crea un nuevo respaldo para comenzar a guardar automáticamente.",
        "backupCleared": "¡Respaldo, caché y textos recientes limpiados exitosamente!",
        "autoSaveStarted": "Guardado automático iniciado",
        "autoSaveStopped": "Guardado automático detenido",
        "autoSaveSaved": "Guardado automáticamente: ",
        "autoSaveError": "Error al guardar automáticamente",
        "recentTextLoaded": "Texto reciente cargado.",
        "recentTextDeleted": "Texto reciente eliminado.",
        "exportSuccess": "¡Texto exportado con éxito!",
        "exportError": "Error al exportar texto.",
        "importSuccess": "¡Texto importado con éxito!",
        "importError": "Error al importar texto."
    },
    "fr": {
        "title": "WhatsApp Styler",
        "subtitle": "Mise en Forme Élégante pour Vos Messages",
        "bold": "Gras",
        "italic": "Italique",
        "strike": "Barré",
        "mono": "Monospace",
        "list": "Liste",
        "numberedList": "Liste Numérotée",
        "undo": "Annuler",
        "redo": "Rétablir",
        "copyText": "Copier le Texte Formaté",
        "createBackup": "Créer une Sauvegarde",
        "newText": "Nouveau Texte",
        "clearAll": "Tout Effacer",
        "toggleDarkMode": "Mode Sombre",
        "preview": "Aperçu :",
        "recentTexts": "Textes Récents :",
        "welcomeTutorial": "Bienvenue sur WhatsApp Styler !",
        "tutorialTips": "Voici quelques conseils rapides :",
        "tip1": "Utilisez les boutons dans la barre d'outils pour formater votre texte.",
        "tip2": "Le texte formaté apparaîtra dans l'aperçu ci-dessous.",
        "tip3": "Vous pouvez utiliser des raccourcis clavier comme Ctrl+B pour le gras.",
        "tip4": "Vos textes récents apparaîtront dans la liste ci-dessous.",
        "understood": "Compris !",
        "textareaPlaceholder": "Tapez ou collez votre texte ici...",
        "boldTitle": "Gras (Ctrl+B)",
        "italicTitle": "Italique (Ctrl+I)",
        "strikeTitle": "Barré (Ctrl+S)",
        "monoTitle": "Monospace (Ctrl+M)",
        "listTitle": "Liste",
        "numberedListTitle": "Liste Numérotée",
        "undoTitle": "Annuler (Ctrl+Z)",
        "redoTitle": "Rétablir (Ctrl+Y)",
        "openTutorial": "Ouvrir le Tutoriel",
        "exportText": "Exporter le Texte",
        "importText": "Importer le Texte",
        // Mensagens dinâmicas
        "copySuccess": "Texte copié dans le presse-papiers !",
        "backupSuccess": "Sauvegarde créée avec succès !",
        "backupError": "Erreur lors de la création de la sauvegarde. Veuillez réessayer.",
        "newTextCreated": "Nouveau texte créé. Entrez votre contenu.",
        "backupLoaded": "Sauvegarde chargée avec succès !",
        "noBackup": "Aucune sauvegarde trouvée. Créez une nouvelle sauvegarde pour commencer l'auto-enregistrement.",
        "backupCleared": "Sauvegarde, cache et textes récents effacés avec succès !",
        "autoSaveStarted": "Auto-enregistrement démarré",
        "autoSaveStopped": "Auto-enregistrement arrêté",
        "autoSaveSaved": "Auto-enregistré : ",
        "autoSaveError": "Erreur lors de l'auto-enregistrement",
        "recentTextLoaded": "Texte récent chargé.",
        "recentTextDeleted": "Texte récent supprimé.",
        "exportSuccess": "Texte exporté avec succès !",
        "exportError": "Erreur lors de l'exportation du texte.",
        "importSuccess": "Texte importé avec succès !",
        "importError": "Erreur lors de l'importation du texte."
    }
};

// Variáveis globais
let backupFileHandle = null;
let autoSaveInterval = null;
let recentTexts = [];
let undoStack = [];
let redoStack = [];

// Função para aplicar as traduções
function applyTranslations(lang) {
    // Traduzir elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Traduzir placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Traduzir atributos title usando title-key
    document.querySelectorAll('[title-key]').forEach(element => {
        const key = element.getAttribute('title-key');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('title', translations[lang][key]);
        }
    });

    // Atualizar textos dinâmicos
    updateDynamicTexts(lang);
}

// Função para atualizar textos dinâmicos (se necessário)
function updateDynamicTexts(lang) {
    // Neste caso, as mensagens dinâmicas são atualizadas diretamente nas funções correspondentes
    // Portanto, não há necessidade de atualizar aqui
}

// Função para salvar a língua selecionada
function saveLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
}

// Função para carregar a língua selecionada
function loadLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    return savedLang || 'pt-BR'; // Padrão para pt-BR se não houver preferência salva
}

// Evento de mudança no seletor de idioma
document.getElementById('language-selector').addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    applyTranslations(selectedLang);
    saveLanguage(selectedLang);
});

// Função para mostrar alertas traduzidos
function showAlert(messageKey, lang) {
    alert(translations[lang][messageKey] || messageKey);
}

// Função para atualizar backupInfo com tradução
function updateBackupInfo(messageKey, lang) {
    const backupInfo = document.getElementById('backupInfo');
    backupInfo.textContent = translations[lang][messageKey] || messageKey;
}

// Função para atualizar autoSaveStatus com tradução
function updateAutoSaveStatusMessage(messageKey, lang) {
    const autoSaveStatus = document.getElementById('autoSaveStatus');
    if (messageKey === 'autoSaveSaved') {
        autoSaveStatus.textContent = `${translations[lang][messageKey] || messageKey}${new Date().toLocaleTimeString()}`;
    } else {
        autoSaveStatus.textContent = translations[lang][messageKey] || messageKey;
    }
}

// Função para aplicar formatação
function applyFormatting(symbol) {
    saveState();
    const textarea = document.getElementById('textInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let newText;

    switch(symbol) {
        case '*':
            newText = `*${selectedText}*`;
            break;
        case '_':
            newText = `_${selectedText}_`;
            break;
        case '~':
            newText = `~${selectedText}~`;
            break;
        case '```':
            newText = `\`\`\`${selectedText}\`\`\``;
            break;
        default:
            newText = selectedText;
    }

    textarea.setRangeText(newText, start, end, 'end');
    updateOutput();
    updateCharCount();
    provideFormattingFeedback(symbol);
}

// Função para fornecer feedback visual ao aplicar formatação
function provideFormattingFeedback(symbol) {
    const textarea = document.getElementById('textInput');
    textarea.classList.add('flash');
    setTimeout(() => {
        textarea.classList.remove('flash');
    }, 300);
}

// Função para adicionar marcador de lista
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
    provideFormattingFeedback('list');
}

// Função para adicionar lista numerada
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
    provideFormattingFeedback('numberedList');
}

// Função para atualizar a pré-visualização
function updateOutput() {
    const text = document.getElementById('textInput').value;
    let formattedText = text
        .replace(/\*(.*?)\*/g, '<b>$1</b>')
        .replace(/_(.*?)_/g, '<i>$1</i>')
        .replace(/~(.*?)~/g, '<s>$1</s>')
        .replace(/```(.*?)```/g, '<pre>$1</pre>')
        .replace(/• (.*?)$/gm, '<li>$1</li>')
        .replace(/(\d+)\. (.*?)$/gm, '<li>$1. $2</li>');

    // Adicionar estilos para listas
    formattedText = formattedText.replace(/<\/li>/g, '</li>');
    if (/<\/li>/.test(formattedText)) {
        formattedText = `<ul>${formattedText}</ul>`;
    }

    document.getElementById('output').innerHTML = formattedText;
}

// Função para copiar o texto formatado
function copyFormattedText() {
    const text = document.getElementById('textInput').value;
    const lang = loadLanguage();
    navigator.clipboard.writeText(text)
        .then(() => {
            showAlert('copySuccess', lang);
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

// Função para criar um novo texto
function createNewText() {
    saveState();
    const currentText = document.getElementById('textInput').value.trim();
    const lang = loadLanguage();
    if (currentText) {
        addToRecentTexts(currentText);
    }
    document.getElementById('textInput').value = '';
    updateOutput();
    updateCharCount();
    updateBackupInfo('newTextCreated', lang);
}

// Função para adicionar ao histórico de textos recentes
function addToRecentTexts(text) {
    const preview = text.substring(0, 30) + (text.length > 30 ? '...' : '');
    recentTexts.unshift({ preview, fullText: text });
    if (recentTexts.length > 10) {
        recentTexts.pop();
    }
    updateRecentTextsList();
    localStorage.setItem('recentTexts', JSON.stringify(recentTexts));
}

// Função para atualizar a lista de textos recentes
function updateRecentTextsList() {
    const list = document.getElementById('recentTextsList');
    list.innerHTML = '';
    const lang = loadLanguage();
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

// Função para carregar um texto recente
function loadRecentText(index) {
    saveState();
    const textObj = recentTexts[index];
    const lang = loadLanguage();
    if (textObj) {
        document.getElementById('textInput').value = textObj.fullText;
        updateOutput();
        updateCharCount();
        updateBackupInfo('recentTextLoaded', lang);
    }
}

// Função para deletar um texto recente
function deleteRecentText(index) {
    recentTexts.splice(index, 1);
    updateRecentTextsList();
    localStorage.setItem('recentTexts', JSON.stringify(recentTexts));
    const lang = loadLanguage();
    updateBackupInfo('recentTextDeleted', lang);
}

// Função para lidar com a entrada de texto
function handleTextInputChange() {
    saveState();
    updateOutput();
    updateCharCount();
    if (backupFileHandle && !autoSaveInterval) {
        startAutoSave();
    }
}

// Função para limpar backup e cache
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
    const lang = loadLanguage();
    updateBackupInfo('backupCleared', lang);
    stopAutoSave();
}

// Função para criar backup
async function createBackup() {
    const text = document.getElementById('textInput').value;
    const lang = loadLanguage();
    
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

        updateBackupInfo('backupSuccess', lang);
        startAutoSave();
    } catch (error) {
        console.error('Erro ao criar backup:', error);
        updateBackupInfo('backupError', lang);
    }
}

// Função para carregar backup
function loadBackup() {
    const backupContent = localStorage.getItem('backupContent');
    const lang = loadLanguage();
    if (backupContent) {
        document.getElementById('textInput').value = backupContent;
        updateOutput();
        updateCharCount();
        updateBackupInfo('backupLoaded', lang);
        startAutoSave();
    } else {
        updateBackupInfo('noBackup', lang);
    }
    
    const storedRecentTexts = localStorage.getItem('recentTexts');
    if (storedRecentTexts) {
        recentTexts = JSON.parse(storedRecentTexts);
        updateRecentTextsList();
    }
}

// Função para auto salvar
async function autoSave() {
    if (backupFileHandle) {
        const text = document.getElementById('textInput').value;
        const lang = loadLanguage();
        try {
            const writable = await backupFileHandle.createWritable();
            await writable.write(text);
            await writable.close();

            localStorage.setItem('backupContent', text);

            updateAutoSaveStatusMessage('autoSaveSaved', lang);
        } catch (error) {
            console.error('Erro ao salvar automaticamente:', error);
            updateAutoSaveStatusMessage('autoSaveError', lang);
        }
    }
}

// Função para iniciar o auto salvar
function startAutoSave() {
    if (!autoSaveInterval) {
        autoSaveInterval = setInterval(autoSave, 60000); // 60000 ms = 1 minuto
        const lang = loadLanguage();
        updateAutoSaveStatusMessage('autoSaveStarted', lang);
    }
}

// Função para parar o auto salvar
function stopAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
        autoSaveInterval = null;
        const lang = loadLanguage();
        updateAutoSaveStatusMessage('autoSaveStopped', lang);
    }
}

// Função para atualizar contagem de caracteres
function updateCharCount() {
    const text = document.getElementById('textInput').value;
    const charCount = text.length;
    const charCountElement = document.getElementById('charCount');
    const lang = loadLanguage();
    charCountElement.textContent = `Caracteres: ${charCount} / 1000`;
    if (charCount > 1000) {
        charCountElement.classList.add('over-limit');
    } else {
        charCountElement.classList.remove('over-limit');
    }
}

// Função para alternar modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    const lang = loadLanguage();
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (isDarkMode) {
        darkModeBtn.textContent = translations[lang]['toggleDarkModeDark'] || 'Modo Claro';
    } else {
        darkModeBtn.textContent = translations[lang]['toggleDarkMode'] || 'Modo Escuro';
    }
}

// Função para salvar o estado atual para undo
function saveState() {
    const currentText = document.getElementById('textInput').value;
    undoStack.push(currentText);
    redoStack = [];
}

// Função para desfazer
function undo() {
    const lang = loadLanguage();
    if (undoStack.length > 1) {
        const currentText = undoStack.pop();
        redoStack.push(currentText);
        document.getElementById('textInput').value = undoStack[undoStack.length - 1];
        updateOutput();
        updateCharCount();
    }
}

// Função para refazer
function redo() {
    const lang = loadLanguage();
    if (redoStack.length > 0) {
        const nextText = redoStack.pop();
        undoStack.push(nextText);
        document.getElementById('textInput').value = nextText;
        updateOutput();
        updateCharCount();
    }
}

// Função para fechar o tutorial
function closeTutorial() {
    document.getElementById('tutorial').style.display = 'none';
    localStorage.setItem('tutorialSeen', 'true');
}

// Função para abrir o tutorial
function openTutorial() {
    document.getElementById('tutorial').style.display = 'flex';
}

// Função para inicializar o aplicativo
function initApp() {
    loadBackup();
    updateCharCount();

    // Verificar e aplicar o modo escuro
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Atualizar o texto do botão de modo escuro com base no estado atual
    const lang = loadLanguage();
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = translations[lang]['toggleDarkModeDark'] || 'Modo Claro';
    } else {
        darkModeBtn.textContent = translations[lang]['toggleDarkMode'] || 'Modo Escuro';
    }

    // Mostrar tutorial se for a primeira visita
    if (!localStorage.getItem('tutorialSeen')) {
        document.getElementById('tutorial').style.display = 'flex';
    }
}

// Função para inicializar as traduções
function initTranslations() {
    const lang = loadLanguage();
    document.getElementById('language-selector').value = lang;
    applyTranslations(lang);
}

// Função para exportar o texto formatado
function exportText() {
    const text = document.getElementById('textInput').value;
    const lang = loadLanguage();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'whatsapp_styler_export.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showAlert('exportSuccess', lang);
}

// Função para importar o texto formatado
function importText(event) {
    const file = event.target.files[0];
    const lang = loadLanguage();
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const importedText = e.target.result;
            document.getElementById('textInput').value = importedText;
            updateOutput();
            updateCharCount();
            addToRecentTexts(importedText);
            showAlert('importSuccess', lang);
        };
        reader.onerror = function() {
            showAlert('importError', lang);
        };
        reader.readAsText(file);
    }
}

// Função para inicializar eventos adicionais
function initAdditionalEvents() {
    // Botão de Tutorial
    document.getElementById('tutorialBtn').addEventListener('click', openTutorial);
    
    // Botão de Exportar Texto
    document.getElementById('exportBtn').addEventListener('click', exportText);
    
    // Botão de Importar Texto
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFileInput').click();
    });
    
    // Input de Importação de Arquivo
    document.getElementById('importFileInput').addEventListener('change', importText);
}

// Função para inicializar todos os eventos
function initAllEvents() {
    // Eventos dos botões existentes
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
    
    // Eventos adicionais
    initAdditionalEvents();
}

// Atalhos de teclado
document.addEventListener('keydown', function(event) {
    const lang = loadLanguage();
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

// Chamar as funções de inicialização quando a página carregar
window.addEventListener('load', () => {
    initTranslations();
    initApp();
    initAllEvents();
});
