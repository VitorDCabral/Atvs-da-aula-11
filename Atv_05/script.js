document.addEventListener('DOMContentLoaded', function() {
    const strings = ["apple", "banana", "cherry", "date", "elderberry"];
    
    const originalList = document.getElementById('original-list');
    const convertedList = document.getElementById('converted-list');
    
    // Função para exibir a lista no HTML
    function displayList(element, list) {
        list.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            elemenaaat.appendChild(listItem);
        });
    }
    
    // Exibir lista original
    displayList(originalList, strings);
    
    // Converter strings para maiúsculas usando map
    const upperCaseStrings = strings.map(str => str.toUpperCase());
    
    // Exibir lista convertida
    displayList(convertedList, upperCaseStrings);
});
