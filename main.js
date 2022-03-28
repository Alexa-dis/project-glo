const body = document.querySelector('body');
const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close')

buttonModal.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');
    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if(!isModal) {
        modalWindow.style.display = 'none';
    }
});

modalClose.addEventListener ('click', () => {
    modalWindow.style.display = 'none';
})

function counts() {
    let now = new Date();
    let date = new Date('Jule 5 2022 00:00:00')
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds; 
}

counts();

setInterval(counts, 1000)