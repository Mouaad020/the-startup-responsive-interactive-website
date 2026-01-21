const send = document.querySelector('.locatie')
const hidecontent = document.querySelector('.hidden')
const showcontent = document.querySelector('.shown')
const showtab = document.querySelector('.locatie-show')
const track = document.querySelector('.li-track')
const volgenform = document.querySelector('.form-volgen')
const pakketform = document.querySelector('.form-pakketpunt')


send.addEventListener('click', function() {
    pakketform.classList.add('shown')
    pakketform.classList.remove('hidden')
    volgenform.classList.add('hidden')
    volgenform.classList.remove('shown')
    track.classList.add('hidden')
    track.classList.remove('locatie-show')
    send.classList.add('locatie-show')
    send.classList.remove('hidden')
});



track.addEventListener('click', function() {
    volgenform.classList.add('shown')
    volgenform.classList.remove('hidden')
    pakketform.classList.add('hidden')
    pakketform.classList.remove('shown')
    track.classList.add('locatie-show')
    track.classList.remove('hidden')
    send.classList.add('hidden')
    send.classList.remove('locatie-show')
});