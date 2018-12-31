bday = document.querySelector("#bday");
/*
//Default call to NASA to get today's photo based on today's date
fetch("https://api.nasa.gov/planetary/apod?api_key=vy77lplV6oEhKTgPSzAd8v819F14sxrZXTn028YX")
    .then((response) => {
        return response.json()
    })     
    .then((data) => {
        let image = data.url;
        let description = data.explanation;
        let imageContainer = document.querySelector(".image-container");
        let imageDescription = document.querySelector(".image-description");

        imageContainer.innerHTML = `<img src="${image}" alt="NASA APOD">`;
        imageDescription.innerHTML = `<p>${description}</p>`;

        console.log(data)
    })   
    .catch((error) => {
        console.log("Error: ", error)
    }) 
*/    

/*Set min & max value for date selector
let today =  new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();
let todayFormattedDate = `${year}-${month}-${day}`;

bday.setAttribute("max", todayFormattedDate);
bday.setAttribute("min", `1995-06-16`);
*/

//Listen for user to click submit to get the date that was inputed.
window.addEventListener("load", () => {
    document.querySelector("#birthday-form").addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(bday.value)
    });
});
    
/*
window.addEventListener("load", function() {
    document.querySelector("#birthday-form").addEventListener("submit", function(e) {
        e.preventDefault(); // before the code
        // do what you want with the form 
        console.log(e);
        // Should be triggered on form submit
    });
});
*/

//https://api.nasa.gov/planetary/apod?api_key=vy77lplV6oEhKTgPSzAd8v819F14sxrZXTn028YX&date=2018-12-25
