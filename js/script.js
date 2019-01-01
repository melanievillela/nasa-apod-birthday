//Global variables
const date = new Date();
const day = document.querySelector("#day");
const month = document.querySelector("#month");

//Set initial max days to 31 for January
day.setAttribute("max", 31);

//Check month to restrict number of days available when changed
month.addEventListener("change", () => {
    if (month.value === "2") {
        day.setAttribute("max", 28)
    } else if (month.value === "4" || month.value === "6" || month.value === "9" || month.value === "11") {
        day.setAttribute("max", 30)
    } else {
        day.setAttribute("max", 31)        
    }
});

//Set day and month variables to send to NASA API
window.addEventListener("load", () => {
    document.querySelector("#birthday-form").addEventListener("submit", (e) => {
        e.preventDefault();
        let userMonth = month.value;
        let userDay = day.value;
        randomizeYear();
        changeImage(randomYear, userMonth, userDay)
    });
});

//Get random year
function randomizeYear() {
    const min = 1995;
    const max = date.getFullYear() + 1;
    return randomYear = Math.floor(Math.random() * (max - min) + min);
}

//Set initial image to today's date then change when birthday is entered
function changeImage(year, month, day) {
    const birthday = `${year}-${month}-${day}`
    fetch(`https://api.nasa.gov/planetary/apod?api_key=vy77lplV6oEhKTgPSzAd8v819F14sxrZXTn028YX&date=${birthday}`)
    .then((response) => {
        return response.json()
    })     
    .then((data) => {
        let date = data.date;
        let description = data.explanation;
        let image = data.url;
        let title = data.title;
        let imageContainer = document.querySelector(".image-container");
        let imageDate = document.querySelector(".date");
        let imageDescription = document.querySelector(".image-description");
        let imageTitle = document.querySelector(".title");
        //Set image and paragraph info from API response
        imageContainer.innerHTML = `<img src="${image}" alt="NASA APOD">`;
        imageDate.innerText = date;
        imageDescription.innerHTML = `<p>${description}</p>`;
        imageTitle.innerText = title;
    })   
    .catch((error) => {
        console.log("Error: ", error)
    })  
}

changeImage(`${date.getFullYear()}`, `${date.getMonth() + 1}`, `${date.getDate()}`);

/*
//Default call to NASA to get today's photo based on today's date
fetch("https://api.nasa.gov/planetary/apod?api_key=vy77lplV6oEhKTgPSzAd8v819F14sxrZXTn028YX")
    .then((response) => {
        return response.json()
    })     
    .then((data) => {
        let date = data.date;
        let description = data.explanation;
        let image = data.url;
        let title = data.title;
        let imageContainer = document.querySelector(".image-container");
        let imageDate = document.querySelector(".date");
        let imageDescription = document.querySelector(".image-description");
        let imageTitle = document.querySelector(".title");
        //Set image and paragraph info from API response
        imageContainer.innerHTML = `<img src="${image}" alt="NASA APOD">`;
        imageDate.innerText = date;
        imageDescription.innerHTML = `<p>${description}</p>`;
        imageTitle.innerText = title;
    })   
    .catch((error) => {
        console.log("Error: ", error)
    })   

https://api.nasa.gov/planetary/apod?api_key=vy77lplV6oEhKTgPSzAd8v819F14sxrZXTn028YX&date=2018-12-25
*/