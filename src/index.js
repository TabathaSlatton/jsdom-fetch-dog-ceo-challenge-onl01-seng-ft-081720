function fetchImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImageElements(json));
}

function renderImageElements(images) {
    const container = document.getElementById('dog-image-container')
    images.message.forEach(image => {
        const img = document.createElement("img")
        container.appendChild(img)
        img.src = image
    });
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
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

function filterBreeds() {
    const dropdown = document.getElementById("breed-dropdown");
    const breed_list = document.getElementsByClassName("breeds-list-item");

    for (let li of breed_list) {
        if (li.innerText.split("")[0] != dropdown.value) {
            li.remove()
        } 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()

    
});