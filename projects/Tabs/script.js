const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tab3 = document.getElementById('tab-3');
const content = document.getElementsByClassName('content');

tab1.addEventListener('click', function(e) {
    e.preventDefault();
    enableContent("tab-1-content");
    change(tab1, tab2, tab3);
});

tab1.addEventListener('mouseover', function() {
    hoverEffectOn(tab1);
});

tab1.addEventListener('mouseout', function() {
    hoverEffectOff(tab1);
});



tab2.addEventListener('click', function(e) {
    e.preventDefault();
    enableContent("tab-2-content");
    change(tab2, tab1, tab3);
});

tab2.addEventListener('mouseover', function() {
    hoverEffectOn(tab2)
});

tab2.addEventListener('mouseout', function() {
    hoverEffectOff(tab2);
});



tab3.addEventListener('click', function(e) {
    e.preventDefault();
    enableContent("tab-3-content");
    change(tab3, tab1, tab2);
});

tab3.addEventListener('mouseover', function() {
    hoverEffectOn(tab3)
});

tab3.addEventListener('mouseout', function() {
    hoverEffectOff(tab3);
});


const enableContent = (className) => {
    for (let i = 0; i < content.length; i++) {
        if (content[i].classList.contains(className)) {
            content[i].style.display = 'block';
        }
        else {
            content[i].style.display = 'none';
        }
    }
}

const change = (element1, element2, element3) => {
    element1.style.backgroundColor = "white";
    element1.classList.remove("disabled");
    element1.style.color = "black";

    element2.style.backgroundColor = "#dae2ec";
    element2.classList.add("disabled");

    element3.style.backgroundColor = "#dae2ec";
    element3.classList.add("disabled");

}

const hoverEffectOn = (element) => {
    if (element.classList.contains("disabled")) {
        element.style.backgroundColor = "rgb(186, 236, 255)";
        element.style.color = "rgb(0, 174, 255)";
    }
}

const hoverEffectOff = (element) => {
    if (element.classList.contains("disabled")) {
        element.style.backgroundColor = "#dae2ec";
        element.style.color = "black";
    }
}  
