const div = document.getElementById('square');

div.addEventListener('mouseenter', function() {
    div.style.backgroundColor = 'red'
});
div.addEventListener('mouseleave', function() {
    div.style.backgroundColor = 'white'
});