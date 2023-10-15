//RESUELVE TUS EJERCICIOS AQUI
//1

async function getAllBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(json => Object.keys(json.message).map(message => message));

};


//2
 async function getRandomDog() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => data.message)
}


//3
async function getAllImagesByBreed() {
    return fetch(`https://dog.ceo/api/breed/komondor/images`)
        .then(response => response.json())
        .then(data => data.message);
}


//4
async function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => data.message);
}

