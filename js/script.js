const rates = document.querySelectorAll(".container__rateus_li");
rates.forEach(function(i) {
    i.addEventListener("click", () => {
        rates.forEach(function(i){
            if (i.classList.contains("active")) {
                console.log(i);
                i.classList.remove("active");
            }
        })
        i.classList.toggle("active");
    })
});

function verifyRateUs() {
    
}