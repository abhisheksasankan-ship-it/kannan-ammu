/*=========================
    OPEN INVITATION
=========================*/

const openInvitation = document.getElementById("openInvitation");

openInvitation.addEventListener("click", () => {

    document.getElementById("invitation").scrollIntoView({

        behavior: "smooth"

    });

});
const weddingDate = new Date("September 10, 2026 12:05:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);
/*=========================
        LIGHTBOX
=========================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach((image)=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=image.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});
/*=========================
      BACK TO TOP
=========================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.style.display="block";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});