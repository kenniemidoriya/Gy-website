
function goToPage(page) {
    window.location.href = page;
}

function checkDate() {
    const dateInput = document.getElementById('date-input').value;
    const alertBox = document.getElementById('alert');

    if (!dateInput) {
        alertBox.style.display = 'block';
    } else {
        alertBox.style.display = 'none';
        localStorage.setItem('selectedDate', dateInput);
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

let selectedMovie = null;

function selectMovie(element) {
    const previouslySelected = document.querySelector('.movie-item.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
    element.classList.add('selected');
    selectedMovie = element.innerText;
    localStorage.setItem('selectedMovie', selectedMovie);
}