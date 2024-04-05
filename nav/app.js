
let links = document.querySelectorAll(".link");
let currentValue = 1;

function onActive(event) {
    links.forEach(link => {
        link.classList.remove("active");
    });
    event.target.classList.add("active");
    currentValue = event.target.getAttribute("value");
}
