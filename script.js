const button = document.querySelector('button');

button.addEventListener('click', searchImage);

async function getPictureOfTheDay(date) {
    let data;
    if (!date) {
        const res = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=b67x81EFujxnXG0cF6ceQmT9iwDCa1EfCP9hbajC'
        );
        data = await res.json();
    } else {
        const res = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=b67x81EFujxnXG0cF6ceQmT9iwDCa1EfCP9hbajC&date=${date}`
        );
        data = await res.json();
    }

    return data;
}

async function searchImage() {
    const image = document.querySelector('.picture');
    const input = document.querySelector('input');
    const title = document.querySelector('b');
    const data = await getPictureOfTheDay(input.value);

    title.innerText = data.title;
    image.src = data.url;
}