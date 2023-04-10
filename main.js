const toggleButton = document.querySelector('.toggle_nav');
const skillContainer = document.querySelectorAll(".skill");
const projectContainer = document.querySelectorAll(".project");
const locations = document.querySelectorAll('.locations')
console.log(locations);

const locationDetails = {
    "location1": {
        "image": "./images/canada-photo.png",
        "title": "canada",
        "link": "location.html#location1",
    },
    "location2": {
        "image": "./images/australia-photo.png",
        "title": "australia",
        "link": "location.html#location2",
    },
    "location3": {
        "image": "./images/uk-photo.png",
        "title": "united kingdom",
        "link": "location.html#location3",
    }

}


    toggleButton.addEventListener('click', () => {

        toggleButton.classList.toggle('x-mark');

        if (document.querySelector('nav').classList.contains('show')) {
            // if the navigation menu is shown, hide it
            document.querySelector('nav').classList.remove('show');
            document.querySelector('nav').classList.add('hide');
          } else {
            // if the navigation menu is hidden, show it
            document.querySelector('nav').classList.remove('hide');
            document.querySelector('nav').classList.add('show');
          }
    });
    
    fetch('json/skill.json')
    .then(response => response.json())
    .then(data => {
        skillContainer.forEach(box => {
            const skill = data[box.id];
            console.log(skill)
            box.querySelector("img").src = skill.image
            box.querySelector("h2").textContent = skill.heading;
            box.querySelector("p").textContent  = skill.description;
        }) 

        return fetch('json/project.json');
    })
    .then(response2 => response2.json())
    .then(data2 => {
        projectContainer.forEach(box => {
            const project = data2[box.id];
            console.log(project)
            box.querySelector('img').src = project.image;
            box.querySelector('h2').textContent = project.title;
        })
        console.log(data2);
    })
    .catch(error => console.error(error));



    locations.forEach((locate, index) => {
        let location = locationDetails[Object.keys(locationDetails)[index]];
     
     
         locate.querySelector('img').src = location.image;
         locate.querySelector('h2').innerText = location.title;
         locate.querySelector('a').href = location.link
         locate.querySelector('a').innerText = "see location";
     
     })