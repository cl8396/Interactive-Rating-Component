const submitButton = document.querySelector('.js-submit-button');

const ratingState = document.querySelector('.rating-state');
const thanksState = document.querySelector('.thank-you-state');

const ratingScoreText = document.querySelector('.rating-score-span');

const ratingButtons = document.querySelectorAll('input[name="rating-score"]');


submitButton.addEventListener('click', () => {
    if (document.querySelector('input[name="rating-score"]:checked') === null) { /* ensures a score is selected */
        alert('please select a score');
        return;
    }
    updateRatingText();
    changeActiveState();
})

function updateRatingText() {
    let selectedRating;
    for (const ratingButton of ratingButtons) {
        if (ratingButton.checked) {
            selectedRating = ratingButton.value;
            ratingScoreText.textContent = selectedRating;
            break;
        }
    }
}

function changeActiveState() {
    if (ratingState.getAttribute('data-active') === 'true') {
        ratingState.setAttribute('data-active', 'false');
        thanksState.setAttribute('data-active', 'true');
    }
    return;
}


