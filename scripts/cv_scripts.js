const note = document.getElementsByClassName("skill-percentage");
const languageContainer = document.getElementsByClassName("language");
const sensor = document.getElementsByClassName('sensor');

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i = 0, iLen = events.length; i < iLen; i++) {
        element.addEventListener(events[i], listener);
    }
}

setTimeout(() => {
    for (let i = 0; i < note.length; i++) {
        note[i].classList.remove("note");
    }
}, 1500);


for (let i = 0; i < languageContainer.length; i++) {
    languageContainer[i].addEventListener('click', (e) => {
        let languageName = e.target.getAttribute("data-language");
        let languageData = document.getElementById(languageName);


        if (languageData.style.display === "block") {
            languageData.style.display = "none";
            e.target.childNodes[1].classList.remove("up");
            e.target.childNodes[1].classList.add("down");
        } else {
            languageData.style.display = "block";
            e.target.childNodes[1].classList.remove("down");
            e.target.childNodes[1].classList.add("up");
        }
    });
}


addListenerMulti(window, 'load scroll', function () {
    for (let i = 0; i < sensor.length; i++) {
        let sensorData = sensor[i].getAttribute("data-experience");
        if (isInViewport(sensor[i])) {
            document.getElementById(sensorData).classList.remove("hide")
        }

    }
});





