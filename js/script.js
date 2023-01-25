const rates = document.querySelectorAll(".container__rateus_li");
const btnSubmit = document.querySelector(".container__btn");
const container = document.querySelector(".container");

rates.forEach(function(i) {
    i.addEventListener("click", () => {
        rates.forEach(function(i){
            if (i.classList.contains("active")) {
                i.classList.remove("active");
            }
        })
        i.classList.toggle("active");
    })
});

btnSubmit.addEventListener("click", () => {
    let counter = 0;
    rates.forEach(function(i) {
        if(i.classList.contains("active")) {
            rating(i.getAttribute("value"));
        } else {
            counter++;
        }
    })
    if (counter === 5) {
        return alert("You need to choose an option!")
    }
});

function rating(rate) {
    container.innerHTML = "";
    container.style.textAlign = "center";

    // NEW ICON
    const divIcon = document.createElement("div");
    divIcon.classList.add("container__newIcon");
    const imgIcon = document.createElement("img");
    imgIcon.src = "../images/illustration-thank-you.svg";
    imgIcon.alt = "Image thank you!";
    divIcon.append(imgIcon);

    // RATING
    const rating = document.createElement("p");
    rating.classList.add("container__rating");
    rating.innerHTML = `You selected ${rate} out of 5`

    // NEW TITLE
    const title = document.createElement("h1");
    title.classList.add("container__newTitle");
    title.innerText = "Thank you!"

    // NEW PARAGRAPHS
    const divParagraphs = document.createElement("div");
    divParagraphs.classList.add("container__divParagraph")
    const paragraph = document.createElement("p");
    paragraph.innerText = "We appreciate you taking the time to give a rating."
    
    const paragraph2 = document.createElement("p");
    paragraph2.innerText = "If you ever need more support, don't hesitate to get in touch!";

    divParagraphs.append(paragraph, paragraph2);

    // We add all elements to the div ".container"
    container.append(divIcon, rating, title, divParagraphs);
}