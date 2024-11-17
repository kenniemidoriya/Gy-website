function goToPage(page) {
    window.location.href = page;
}

function checkDate() {
    const dateInput = document.getElementById('date-input').value;
    const timeInput = document.getElementById('time-input').value;
    const alertBox = document.getElementById('alert');

    if (!dateInput || !timeInput) {
        alertBox.style.display = 'block';
    } else {
        alertBox.style.display = 'none';
        localStorage.setItem('selectedDate', dateInput);
        localStorage.setItem('selectedTime', timeInput);
        goToPage('what-eat.html');
    }
}

let selectedFood = null;

function selectFood(element) {
    const previouslySelected = document.querySelector('.food-item.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
    element.classList.add('selected');
    selectedFood = element.innerText;
    localStorage.setItem('selectedFood', selectedFood);
}

function selectMovie(element) {
    const previouslySelected = document.querySelector('.movie-item.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
    element.classList.add('selected');
    const selectedMovie = element.innerText;
    localStorage.setItem('selectedMovie', selectedMovie); // Store selected movie
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedDate = localStorage.getItem('selectedDate');
    const selectedTime = localStorage.getItem('selectedTime');
    const selectedFood = localStorage.getItem('selectedFood');
    const selectedMovie = localStorage.getItem('selectedMovie');
    const summary = document.getElementById('summary');

    if (selectedDate && selectedFood && selectedMovie && selectedTime) {
        summary.textContent = `Don't forget on ${selectedDate} at ${selectedTime} we will watch ${selectedMovie} with a delicious ${selectedFood}!`;
    } else {
        summary.textContent = 'Details not complete!';
    }
});
