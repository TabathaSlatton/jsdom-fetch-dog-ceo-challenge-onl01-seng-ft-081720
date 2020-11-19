const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// console.log('%c HI', 'color: firebrick')

function fetchImages() {
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImageElements(json));
}

function renderImageElements(images) {
    const container = document.getElementById('dog-image-container')
    // console.log(images.message)
    // for (const image of images) {}
    images.message.forEach(image => {
        // console.log(image)
        const img = document.createElement("IMG")
        container.appendChild(img)
        img.src = image
    });
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreedElements(json));
}

function renderBreedElements(breeds) {
    const ul = document.getElementById('dog-breeds')
    myBreeds = breeds.message
    for(const breed in myBreeds){
        // console.log(breed)
        const li = document.createElement("li")
        ul.appendChild(li)
        li.innerText = breed
        li.className = "breeds-list-item"
        li.addEventListener('click', function(event) {
            li.style.color = "purple"
        });
    } 
}


document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()

    
});