let heading = document.querySelector('#heading');

heading.addEventListener('click', () => {
    if (heading.style.color === "red") {
        heading.style.color = "cyan";
    } else {
        heading.style.color = "red";
    }
});

let toDay = new Date();
alert(toDay);

