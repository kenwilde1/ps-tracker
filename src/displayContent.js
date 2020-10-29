const initializeEventListners = ( () => {

    const getAllButtons = document.querySelectorAll('a');

    getAllButtons.forEach( button => button.addEventListener('click', ()=> {
        switch (button.id) {
            case 'console':
                loadEUConsoleData();
                break;
            case 'cyberpunk':
                loadCyberpunkData();
                break;
            case 'valhalla':
                loadValhallaData();
                break;
            case 'bugsnax':
                loadBugsnaxData();
                break;
        }
    }));

})();

const contentContainer = document.querySelector('.content');
const title = document.querySelector('.title');
let releaseDate;
let intervalArray = [];

const displayCountdown = (date) => {

    const countDownDate = new Date(date).getTime()

    intervalArray.push(setInterval( () => {
    
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('#demo').innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        if (distance < 0) {
            clearInterval(this);
            document.querySelector('#demo').innerHTML = 'Officially Released.';
        }

    }, 1000));
}

const removeCountdown = () => {
    intervalArray.map( (a) => {
        clearInterval(a);
        intervalArray = [];
    });

    document.querySelector('#demo').innerHTML = '';
}


const loadEUConsoleData = () => {
    removeCountdown();
    removeStyling();
    title.innerHTML = 'PS5 Console (EU)';
    contentContainer.classList.add('console-appearance');
    releaseDate = 'Nov 19, 2020 00:00:00';
    displayCountdown(releaseDate);
}

const loadCyberpunkData = () => {
    removeCountdown();
    removeStyling();
    title.innerHTML = 'Cyberpunk 2077';
    contentContainer.classList.add('cyberpunk-appearance');
    releaseDate = 'Dec 10, 2020 00:00:00';
    displayCountdown(releaseDate);
}

const loadValhallaData = () => {
    removeCountdown();
    removeStyling();
    title.innerHTML = `Assassin's Creed: Valhalla`;
    contentContainer.classList.add('valhalla-appearance');
    releaseDate = 'Nov 10, 2020 00:00:00';
    displayCountdown(releaseDate);
}

const loadBugsnaxData = () => {
    removeCountdown();
    removeStyling();
    title.innerHTML = `Bugsnax`;
    contentContainer.classList.add('bugsnax-appearance');
    releaseDate = 'Nov 12, 2020 00:00:00';
    displayCountdown(releaseDate);
}

const removeStyling = () => {
    contentContainer.classList.remove('console-appearance', 'cyberpunk-appearance', 'valhalla-appearance', 'bugsnax-appearance');
}

export default initializeEventListners;