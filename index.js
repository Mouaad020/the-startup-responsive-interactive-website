const send = document.querySelector('.location')
const hidecontent = document.querySelector('.hidden')
const showcontent = document.querySelector('.shown')
const showtab = document.querySelector('.location-show')
const track = document.querySelector('.li-track')
const followform = document.querySelector('.form-follow')
const packageform = document.querySelector('.form-parcelpoint')


send.addEventListener('click', function() {
    packageform.classList.add('shown')
    packageform.classList.remove('hidden')
    followform.classList.add('hidden')
    followform.classList.remove('shown')
    track.classList.add('hidden')
    track.classList.remove('location-show')
    send.classList.add('location-show')
    send.classList.remove('hidden')
});



track.addEventListener('click', function() {
    followform.classList.add('shown')
    followform.classList.remove('hidden')
    packageform.classList.add('hidden')
    packageform.classList.remove('shown')
    track.classList.add('location-show')
    track.classList.remove('hidden')
    send.classList.add('hidden')
    send.classList.remove('location-show')
});