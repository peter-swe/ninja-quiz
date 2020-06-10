// correct answer is B Actual VALUE each input-fiels have
const correctSvar = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result');

// Now first of all we want to attach an event listener to the form to listen when a user has submitted
// the form.
const form = document.querySelector('.quiz-form');
form.addEventListener('submit', event => {
    event.preventDefault();   

    let score = 0;
    // the value look at whichever one is checked.
    const userSvar = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check for answers
    // svar = .value & index = position in Array
    userSvar.forEach((svar, index) => {
        if(svar === correctSvar[index]){
            score += 25;
            
        }
    
    });
    // result on page
    scrollTo(0,0)
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    
});
