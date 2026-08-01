// ---------- PASSWORD ----------

function checkPassword() {
    let password = document.getElementById("password").value.trim().toLowerCase();

    if (password === "jun") {
        switchPage("passwordPage", "welcomePage");
    } else {
        document.getElementById("error").innerHTML =
            "Hmm... that's not the nickname my heart knows ❤️";
    }
}

// ---------- PAGE SWITCH ----------
function switchPage(hideId, showId){

document.getElementById(hideId).classList.remove("active");

const page=document.getElementById(showId);

page.classList.add("active");

page.classList.add("fadeIn");

setTimeout(()=>{

page.classList.remove("fadeIn");

},1200);

}
function goToEnvelope() {
    switchPage("welcomePage", "envelopePage");
}

function openLetter() {
    switchPage("envelopePage", "letterPage");

    document.getElementById("song").play();

    typeLetter();
}

function goToGallery() {
    switchPage("letterPage", "galleryPage");
}

function goToEnding() {
    switchPage("galleryPage", "endingPage");
}

// ---------- LOVE LETTER ----------

const letter = `

My Dearest Jun ❤️,

I still wonder how someone could change my entire world without even realizing it.

Before you, life simply moved forward. After you, every single day became brighter because of you.

I don't know exactly how it happened, but you made me fall in love in a way no one ever has.

There was a time when I thought I had lost you, and that taught me one thing...

I never want to lose you again.

I know I may not be the most perfect man today, but I promise I'll spend every day becoming the man you deserve.

Stay beside me forever.

I'll always support your dreams, especially the day you walk into IIT Delhi with the biggest smile on your face.

Your happiness will always be my happiness.

It's amazing how God brought us together through a friend's sister sharing your Instagram.

One message became thousands.

Thousands became love.

Even though 242 kilometres separate us today...

One day that distance will disappear.

We'll be together.

I still laugh whenever I remember your father video-calling me after you got caught talking to me.

That moment became one of my favourite memories.

Jun...

I dream of building my future with you.

Growing old with you.

Laughing with you.

Supporting you.

Marrying you.

No matter what happens...

I will choose you every single day.

I will love you forever and ever.

Your Sun ❤️

`;

let index = 0;

function typeLetter() {

    if(index < letter.length){

        document.getElementById("typing").innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}
// ---------- STARS ----------

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(Math.random()*3+2)+"s";

stars.appendChild(star);

}