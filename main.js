const toggleButton = document.querySelector('.toggle_nav');
const skillContainer = document.querySelectorAll(".skill");
const projectContainer = document.querySelectorAll(".project");


    toggleButton.addEventListener('click', () => {

        toggleButton.classList.toggle('x-mark');
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



