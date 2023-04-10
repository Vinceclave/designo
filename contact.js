const formInput = document.querySelectorAll('form > .form-input');
const formButton = document.querySelector('form > input[type="submit"]')
const locations = document.querySelectorAll('.locations')
console.log(locations);

const locationDetails = {
    "location1": {
        "image": "images/canada-photo.png",
        "title": "canada",
        "link": "location.html#location1",
    },
    "location2": {
        "image": "images/australia-photo.png",
        "title": "australia",
        "link": "location.html#location2",
    },
    "location3": {
        "image": "images/uk-photo.png",
        "title": "united kingdom",
        "link": "location.html#location3",
    }

}

console.log(formButton)


formInput.forEach(input => {
    input.addEventListener('change', () => {
        if(input.value === '') {
            input.classList.remove('isFilled');
            input.classList.add('isBlank');

            document.querySelector('form > textarea').classList.remove(isFilled)
            document.querySelector('form > textarea').classList.add(isBlank)
        } else {
            
            input.classList.remove('isBlank');
            input.classList.add('isFilled');

            document.querySelector('form > textarea').classList.remove(isBlank)
            document.querySelector('form > textarea').classList.add(isFilled)
        }
    }) 
})

formButton.addEventListener('click', (e) => {
    let hasEmptyFields = false;
    formInput.forEach(input => {
        if(input.value === '') {
            hasEmptyFields = true;
            e.preventDefault();
            return;
        } 
    })

    if (hasEmptyFields) {
        alert('Please fill in all fields');
        return;
    } else {
        console.log(true);
    }
})


locations.forEach((locate, index) => {
   let location = locationDetails[Object.keys(locationDetails)[index]];


    locate.querySelector('img').src = location.image;
    locate.querySelector('h2').innerText = location.title;
    locate.querySelector('a').href = location.link
    locate.querySelector('a').innerText = "see location";

})