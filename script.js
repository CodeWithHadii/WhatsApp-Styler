document.getElementById('boldBtn').addEventListener('click', () => {
    applyFormatting('*');
});

document.getElementById('italicBtn').addEventListener('click', () => {
    applyFormatting('_');
});

document.getElementById('strikeBtn').addEventListener('click', () => {
    applyFormatting('~');
});

document.getElementById('monoBtn').addEventListener('click', () => {
    applyFormatting('```');
});

document.getElementById('listBtn').addEventListener('click', () => {
    addListMarker();
});

document.getElementById('numberedListBtn').addEventListener('click', () => {
    addNumberedList();
});

document.getElementById('copyBtn').addEventListener('click', () => {
    copyFormattedText();
});

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

    const newText = "* " + selectedText;

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

document.getElementById('textInput').addEventListener('input', updateOutput);

function updateOutput() {
    const text = document.getElementById('textInput').value;
    const formattedText = text
        .replace(/\*(.*?)\*/g, '<b>$1</b>')   // Negrito
        .replace(/_(.*?)_/g, '<i>$1</i>')     // Itálico
        .replace(/~(.*?)~/g, '<s>$1</s>')     // Tachado
        .replace(/```(.*?)```/g, '<pre>$1</pre>') // Monoespaçado
        .replace(/\* (.*?)$/gm, '<li>$1</li>') // Lista com marcador
        .replace(/(\d+)\. (.*?)$/gm, '<li>$1. $2</li>'); // Lista enumerada
    
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

