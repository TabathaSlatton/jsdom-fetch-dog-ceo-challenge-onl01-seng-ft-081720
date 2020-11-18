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
    console.log(images.message)
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



document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
});