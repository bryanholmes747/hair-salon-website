let hidden = true;
let playing = false;

function square(){
    window.open("https://book.squareup.com/appointments/sfk0ukiags5jhp/location/TAZQA5ZYCWCKH/services", "_blank");
}

function instagram(){
    window.open("http://www.instagram.com/summersmoothstyles/", "_blank");
}

function facebook(){
    window.open("https://www.facebook.com/people/Summers-Smooth-Styles/61574439673788/?mibextid=wwXIfr", "_blank");
}

document.querySelectorAll('.book').forEach(element => {
    element.addEventListener("click", square);
})

document.querySelectorAll('.fa-instagram').forEach(element => {
    element.addEventListener("click", instagram);
})

document.querySelectorAll('.fa-facebook').forEach(element => {
    element.addEventListener("click", facebook);
})

document.querySelectorAll('.foot-book').forEach(element => {
    element.addEventListener("click", square);
})

document.getElementById("li-book").addEventListener("click", square);




function playMambo(){
    if(playing == true){
        playing = false;
        document.getElementById("bailey").classList.remove("playing");
        document.getElementById("mambo-div").classList.remove("playing-text");
        document.getElementById("welcome").pause();

    }
    else{
        playing = true;
        document.getElementById("bailey").classList.add("playing");
        document.getElementById("mambo-div").classList.add("playing-text");

        document.getElementById("welcome").play();
    }
}

document.getElementById("mambo-div").addEventListener("click", playMambo);



function bailey(){
    if(hidden == true){
        hidden = false;
        document.getElementById("mambo-div").classList.add("showing");
        document.getElementById("mambo-div").classList.remove("hidden");
    }
    else{
        hidden = true;
        document.getElementById("mambo-div").classList.add("hidden");
        document.getElementById("mambo-div").classList.remove("showing");
        document.getElementById("welcome").pause();
        document.getElementById("welcome").currentTime = 0;
    }
}

document.getElementById("secret").addEventListener("click", bailey);

/* fullscreen image functionality */

let overlay = document.getElementById("overlay");
let full_image = document.getElementById("fullscreen-img");

document.querySelectorAll(".stack").forEach(img => {
    img.classList.add("zoomable");
});

document.querySelectorAll(".slide").forEach(img => {
    img.classList.add("zoomable");
});

document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        full_image.src = img.src;
        overlay.classList.add("showing");
    })
});

overlay.addEventListener("click", hideOverlay);

function hideOverlay(){
    overlay.classList.remove("showing");
}
