// ==========================
// LOADER
// ==========================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
});


// ==========================
// TYPING EFFECT
// ==========================

const words = [
    "Assistant Professor",
    "M.Tech (Computer Science & Engineering)",
    "Researcher",
    "Mentor",
    "Web Developer",
    "AI & Blockchain Enthusiast"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,letterIndex+1);

        letterIndex++;

        if(letterIndex===currentWord.length){

            isDeleting=true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent=currentWord.substring(0,letterIndex-1);

        letterIndex--;

        if(letterIndex===0){

            isDeleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;
            }
        }
    }

    setTimeout(typeEffect,isDeleting?50:100);

}

typeEffect();


// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ==========================
// SCROLL REVEAL
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


// ==========================
// PARALLAX EFFECT
// ==========================

window.addEventListener("mousemove",(e)=>{

const img=document.querySelector(".hero-right img");

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

img.style.transform=`translate(${x}px,${y}px)`;

});


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00e5ff";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.boxShadow="0 0 20px #00e5ff";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ==========================
// PARTICLE EFFECT
// ==========================

for(let i=0;i<25;i++){

let particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=5+Math.random()*8+"s";

particle.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(particle);

}

// Theme Toggle

const theme=document.querySelector(".theme-toggle");

const body=document.body;

const icon=document.getElementById("themeIcon");

theme.onclick=()=>{

body.classList.toggle("light");

if(body.classList.contains("light")){

icon.className="fas fa-sun";

}else{

icon.className="fas fa-moon";

}

}