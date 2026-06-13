const text =
"Today we celebrate your success and bright future.";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,50);
    }
}

typeWriter();

for(let i=0;i<40;i++){

    const icon=document.createElement("div");

    icon.classList.add("floating");

    icon.innerHTML =
    Math.random() > 0.5 ? "🎓" : "⭐";

    icon.style.left =
    Math.random()*100 + "%";

    icon.style.animationDuration =
    Math.random()*5+6 + "s";

    document.querySelector(".floating-icons")
    .appendChild(icon);
}

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    document
    .getElementById("story")
    .classList.remove("hidden");

});