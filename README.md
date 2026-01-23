Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
The-startup-responsive-interactive-website

## Beschrijving
Ademruimte en inspringen

Als ik werk aan me HTML hou ik me aan verschillende regels voor ademruimte en inspringen. Bij het inspringen gebruik ik 4 tabs, zodat alles mooi overzichtelijk blijft en in combinatie met genoeg ademruimte is het goed te zien wat gescheiden is van elkaar. Voor de ademruimte gebruik 1 spatie.
<!-- Voeg een mooie poster visual toe 📸 -->
Voorbeeld HTML:
~~~HTML
<header>
        <nav class="top-bar">
            <a class="consument">Consument</a>
            <a class="zakelijk">Zakelijk</a>
            <img src="img/shoppingcart.svg" alt="winkelwagen">
        </nav>
        
        <nav class="nav-bar">
            <img src="img/postnl.svg" alt="PostNL">
            <a>Inloggen</a>
            <img class="arrowdown" src="img/arrowdown.svg" alt="pijl">
            <img src="img/menu.svg" alt="menu">
        </nav>
    </header>
~~~

Link naar mijn github:
https://mouaad020.github.io/the-startup-responsive-interactive-website/



Volgorde en nesten van CSS selectors

Als ik werk aan mijn CSS dan nest ik de selectors die bij een bepaalde selector horen en zo probeer ik mijn CSS overzichtelijk te houden.

~~~CSS
.top-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid #eee;

    p {
        font-size: 0.9rem;
        cursor: pointer;
    }

    img {
        position: relative;
        left: 11rem;
    }
}
~~~

Link naar mijn CSS:

https://github.com/Mouaad020/the-startup-responsive-interactive-website/blob/main/index.css


Naamgeving

In mijn HTML en CSS gebruik ik voornamelijk Nederlands, omdat ik een site moet maken voor PostNL en de figma bestaat uit Nederlandse benamingen dus het is voor mij makkelijker om Nederlands aan te houden.

~~~HTML
<form class="form-pakketpunt">
            <h2>PostNL-punten</h2>
            <label for="zoek-postnl-punten">Zoek PostNL-punten</label>
            <input class="input1" type="text" id="zoek-postnl-punten" placeholder="Zoek op plaats, straat of postcode">
            <button class="button-zoek">Zoeken</button>
        </form>
~~~

~~~CSS
.button-zoek {
    color: var(--neutral-color-white);
    font-weight: bold;
    background-color: #6161FF;
    border-radius: 5px;
    border: solid #6161FF 10px;
    width: 305px;
}
~~~


Ik heb feedback ontvangen van mijn klasgenoot Yassine dat ik beter Engels kan gebruiken voor de classnamen.

<img width="1279" height="697" alt="Schermafbeelding 2026-01-21 130814" src="https://github.com/user-attachments/assets/2b57dcea-b338-469e-9c00-30d566762157" />

Ik heb feedback verwerkt die ik had ontvangen.

https://github.com/Mouaad020/the-startup-responsive-interactive-website/blob/main/index.html


In mijn JS gebruik ik voornamelijk Engels en voor sommige classes gebruik Nederlands, omdat die in mijn HTML staan waar ik dus Nederlandse naamgevingen gebruik.

~~~JS
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
~~~

Link naar mijn github:
https://mouaad020.github.io/the-startup-responsive-interactive-website/


Responsive:

Ik heb ook een deel van de pagina responsive gemaakt de breakpoint zit op 700px.

~~~CSS
 @media(min-width:700px){
        width: 65%;
        margin: auto;
    }
~~~

https://github.com/user-attachments/assets/1cba08f9-1b22-4908-8d12-cb7d86c813e9

Link naar mijn CSS:

https://github.com/Mouaad020/the-startup-responsive-interactive-website/blob/main/index.css

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


