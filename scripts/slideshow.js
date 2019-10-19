const api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=";
const apiHeader = {"method": "GET",	
                    "headers": {
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": "345055b289msh186be75226c3a7cp1532c5jsn3e8081ea78ee"
                    }};
const number =  "3";
const apiQuery = api + number

getImgs()
    .catch(err => {console.log(err)})

async function getImgs() {
    const response = await fetch(apiQuery,apiHeader);
    const request = await response.json();
    const randomArray = request.recipes
    randomArray.forEach(function(slide){  
            let slideCont = document.getElementById("slideshow");
            slideCont.innerHTML += `<img src="${slide.image}" id="${slide.id}" class="imgslide" alt="Illustration of a dish" onclick="reDir(${slide.id})">`;
        });

    const imgSlide = document.querySelectorAll(".imgslide");
    const slideDelay = 4000;
    let currentSlide = 0;

    imgSlide[currentSlide].style.opacity = 1;
    setInterval(nextSlide, slideDelay);

    function nextSlide() {
        imgSlide[currentSlide].style.zIndex = 100;
        const tempSlide = currentSlide;
        setTimeout(() => {
            imgSlide[tempSlide].style.opacity = 0;
        }, 0);
        currentSlide = (currentSlide + 1) % imgSlide.length;
        imgSlide[currentSlide].style.opacity = 1;
        imgSlide[currentSlide].style.zIndex = 200;
    }       
}


