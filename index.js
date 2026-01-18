//selecteer de class//
const send = document.querySelector('.locatie')
const hidecontent = document.querySelector('.hidden')
const showcontent = document.querySelector('.show')
const track = document.querySelector('.li-track')
const volgenform = document.querySelector('.form-volgen')
const pakketform = document.querySelector('.form-pakketpunt')

//als je op locatie klikt verdwijnt de standaard form//



send.addEventListener('click', function() {
    pakketform.classList.add('shown')
    pakketform.classList.remove('hidden')
    volgenform.classList.add('hidden')
    volgenform.classList.remove('shown')
    track.classList.add('hidden')
    track.classList.remove('show')
    send.classList.add('show')
    send.classList.remove('hidden')
});



track.addEventListener('click', function() {
    volgenform.classList.add('shown')
    volgenform.classList.remove('hidden')
    pakketform.classList.add('hidden')
    pakketform.classList.remove('shown')
    track.classList.add('show')
    track.classList.remove('hidden')
    send.classList.add('hidden')
    send.classList.remove('show')
});
