const formInput = document.querySelectorAll('form > .form-input');
const formButton = document.querySelector('form > input[type="submit"]')


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


