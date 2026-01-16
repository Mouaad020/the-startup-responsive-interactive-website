//selecteer de class//
const send = document.querySelector('.locatie')
const hidecontent = document.querySelector('.hidden')
const showcontent = document.querySelector('.show')

const volgenform = document.querySelector('.form-volgen')
const pakketform = document.querySelector('.form-pakketpunt')

//als je op locatie klikt verdwijnt de standaard form//




send.addEventListener('click', function() {
    pakketform.classList.add('shown')
    volgenform.classList.add('hidden')
});

//daarna komt de nieuwe form tevoorschijn//
