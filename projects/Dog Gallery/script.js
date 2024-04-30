var list = document.getElementById('dog-selector');
var imgContainer = document.querySelector('.img-container');

async function createDogList() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();  
    const dogs = Object.keys(data.message);
    for (let  breed of  dogs) {
        let option = document.createElement('option');
        option.value = breed;
        option.text = breed;
        list.add(option);
    }  
  } 
  
createDogList();
  

const createImg = (url) => {
    let img = document.createElement('img');
    img.src = url;
    imgContainer.appendChild(img);
};

list.addEventListener('change', async function () {
    imgContainer.innerHTML = "";
    list.options[0].disabled = true;
    for (let i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            let link = await fetchDog(`https://dog.ceo/api/breed/${list.options[i].value}/images`);
            let loopLen = link.message.length > 4 ? 4 : link.message.length;
            for (let j = 0; j < loopLen; j++) {
                    createImg(link.message[j]);
                }
            }
        }
});

async function fetchDog(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
