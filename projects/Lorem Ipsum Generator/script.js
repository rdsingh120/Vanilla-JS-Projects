var paragraph = document.querySelectorAll('.paragraph');
var number = document.querySelector('#number');

document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    paragraph.forEach(para => {
        para.style.display = 'none';
    });

    for (var i = 0; i < number.value; i++) {
        paragraph[i].style.display = 'block'    
    }

});