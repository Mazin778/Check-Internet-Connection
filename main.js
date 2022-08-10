let tittle = document.querySelector('.tittle');
let tittle1 = document.querySelector('.tittle1');
let p = document.querySelector('p');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function() {
    if (window.navigator.onLine) {
        online();
    } else {
        offline();
    }
}

window.addEventListener("online", function() {
    online();
});
window.addEventListener("offline", function() {
    offline();
});
reload.onclick = function() {
    window.location.reload();
}

function online() {
    tittle.innerHTML = "INternet is Reconnect";
    tittle.style.color = "green";
    tittle1.classList.add("hide");
    ul.classList.add("hide");
    p.classList.add("hide");
    reload.classList.add("hide");
}

function offline() {
    tittle.innerHTML = "INternet is Diconnect";
    tittle.style.color = "#666";
    tittle1.classList.remove("hide");
    ul.classList.remove("hide");
    p.classList.remove("hide");
    reload.classList.remove("hide");
}