let canselButton = document.getElementById('canselButton'),
    hiddenBlock = document.getElementById('hiddenBlock')
    menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function() {
    hiddenBlock.style.display = 'flex';
})

canselButton.addEventListener('click', function() {
    hiddenBlock.style.display = 'none';
})