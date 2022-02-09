let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end:"80%",
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end:"80%",
        scrub: 1,
    },
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end:"80%",
        scrub: 1,
    },
});

tl.fromTo(".sliding-text", {y: 0}, {y: -400});
tl2.fromTo(".logo", {scale : 6}, {scale: 1, top: "2rem", left: "3rem", x: "50%", y: "50%"});
tl4.fromTo(".square", {left: "70%"}, {left: "100%", opacity: 0, rotation : 90});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "0%",
        end:"200%",
        scrub: 1,
        pin : true,
        pinSpacing : false,
    },
});


const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {

    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` ;
        }
        
    });

    //Burger Animation 
      burger.classList.toggle('toggle');
  

    });

  
}

navSlide();



