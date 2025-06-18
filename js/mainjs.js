//Aqui voy a usar la librería gsap para las animaciones
//VARIABLES A ANIMAR AQUI
let imagenPortada = document.querySelector(".img1");
let contenedorPortada = document.querySelector(".divmain");
let scrollFin0 = document.querySelector("#pq0");
let scrollFin1 = document.querySelector("#pq1");
let scrollFin2 = document.querySelector("#pq2");
let scrollFin3 = document.querySelector("#pq3");
let scrollFin4 = document.querySelector("#pq4");
let scrollFin5 = document.querySelector("#pq5");
//elementos de la animación camino
let ca0 = document.querySelector(".e0")
let ca1 = document.querySelector(".e1");
let ca2 = document.querySelector(".e2");
let ca3 = document.querySelector(".e3");
let ca4 = document.querySelector(".e4");
let ca5 = document.querySelector(".e5");
let ca6 = document.querySelector(".e6");
let ca7 = document.querySelector(".e7");
let siguiente = document.querySelector("#siguiente");
let aux = document.querySelector(".auxiliarCamino");


//***********FUNCIONES**********
//Imagen de portada
gsap.to(imagenPortada,{
    y:-300,
    width: '100%',
    height: '100%',
    scale: 5,
    scrollTrigger: {
        trigger: imagenPortada,
        start: 'top 30%', //bottom center
        scrub: 1, //smooth, number
        toggleActions: "restart none none none" //play none none reverse
    }
});

//Sombra abajo del corazón
gsap.to(contenedorPortada,{
    boxShadow: '0 1rem 3rem 3rem   #E55951',
    scrollTrigger: {
        trigger: contenedorPortada,
        start: 'bottom center',
        toggleActions: "play none none reverse"
    }
});

/*Animación para el camino*/
function camino(){
    const tal2 = gsap.timeline({
        scrollTrigger: {
            trigger: ca0,
            start: "top 10%",
            scrub: 1,
            pin: ca0,
            pinSpacing: true,
            toggleActions: "restart none none none"
        }
    });
    //TODO REVISAR LAS POSICIONES FINALES (SUPER TRABAJO)
    /*
    tal2.fromTo(ca1, { x: "-70vw", borderColor: "#E55951", border: "2" },{x: "30vw", scale: 2})
    tal2.to(ca1, {y: "60vh",x: "150%", scale: 0.75, borderColor: ""})

    tal2.fromTo(ca2, { x: "-70vw", borderColor: "#E55951", border: "2" }, { x: "30vw", scale: 2 })
    tal2.to(ca2, { y: "40vh", x: "-10%", scale: 0.75, borderColor: ""})

    tal2.fromTo(ca3, { x: "-70vw", borderColor: "#E55951", border: "2" }, { x: "30vw", scale: 2 })
    tal2.to(ca3, { y: "20vh", x: "170%", scale: 0.75, borderColor: ""})

    tal2.fromTo(ca4, { x: "-70vw", borderColor: "#E55951", border: "2" }, { x: "30vw", scale: 2 })
    tal2.to(ca4, { y: "-50%", x: "60%", scale: 0.75, borderColor: ""})

    tal2.fromTo(ca5, { x: "-70vw", y: "10vh", borderColor: "#E55951", border: "2" }, { x: "30vw", y: "-60vh",scale: 2 })
    tal2.to(ca5, { y: "-250%", x: "150%", scale: 0.75, borderColor: ""})

    tal2.fromTo(ca6, { x: "-70vw", y: "10vh", borderColor: "#E55951", border: "2"}, { x: "30vw", y: "-80vh", scale: 2 })
    tal2.to(ca6, { y: "-380%", x: "50%", scale: 0.75, borderColor: "" })

    tal2.fromTo(ca7, { x: "-70vw", y: "10vh", borderColor: "#E55951", border: "2" }, { x: "30vw", y: "-80vh", scale: 2 })
    tal2.to(ca7, { y: "-980%", x: "0%", scale: 0.75, borderColor: "" })
    */ 
    tal2.fromTo(ca1, { xPercent: -200, scale: 2 }, { xPercent: 100, scale: 1, borderColor: "#E55951", border: "2" })
    tal2.to(ca1, {yPercent: 0, y: "60vh",scale:0.5, borderColor: "", xPercent: 0, x: "10vw"})

    tal2.fromTo(ca2, { xPercent: 430, scale: 2 }, { xPercent: 0, yPercent: 0, scale: 1, borderColor: "#E55951", border: "2" })
    tal2.to(ca2, { yPercent: 0, y: "50vh", scale: 0.5, borderColor: "", xPercent: 0, x: "20vw" })

    tal2.fromTo(ca3, { xPercent: -400, scale: 2 }, { xPercent: -100, scale: 1, borderColor: "#E55951", border: "2" })
    tal2.to(ca3, { yPercent: 0, y: "45vh", scale: 0.5, borderColor: "", xPercent: 0, x: "-30vw" })

    tal2.fromTo(ca4, { xPercent: 430, scale: 2 }, { xPercent: 100, yPercent: -80, scale: 1, borderColor: "#E55951", border: "2" })
    tal2.to(ca4, { yPercent: 0, y: "10vh", scale: 0.5, borderColor: "", xPercent: 0, x: "50vw" })

    tal2.fromTo(ca5, { xPercent: -400, scale: 2 }, { xPercent: 0, yPercent: -150,scale: 1, borderColor: "#E55951", border: "2" })
    tal2.to(ca5, { yPercent: 0, y: "5vh", scale: 0.5, borderColor: "", xPercent: 0, x: "0vw" })

    tal2.fromTo(ca6, { xPercent: 430, scale: 2 }, { xPercent: -100, yPercent: -100, scale: 1, borderColor: "#E55951", border: "2" })
    tal2.to(ca6, { yPercent: 0, y: "-7vh", scale: 0.5, borderColor: "", xPercent: 0, x: "-20vw" })

    tal2.fromTo(ca7, { xPercent: -400, scale: 2 }, { xPercent: 0, yPercent: -400, scale: 1, borderColor: "#E55951", border: "2" })
    tal2.to(ca7, { yPercent: 0, y: "-30vh", scale: 0.5, borderColor: "", xPercent: 0, x: "-20vw" })
    return tal2;
}

//Animación para el scroll final
function final(){
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: scrollFin0,
            start: "top 10%",
            scrub: 1,
        }
    });

    tl.from(scrollFin1, { y: "100vw" })
    tl.from(scrollFin2, { y: "100vw" })
    tl.from(scrollFin3, { y: "100vw" })
    tl.from(scrollFin4, { y: "100vw" })
    tl.from(scrollFin5, { y: "100vw"})

    return tl;
}

let master = gsap.timeline();
master
    .add(camino())
    .add(final());

/*
gsap.from (scrollFin1,{
    y: "100vw",
    scrollTrigger: {
        trigger: scrollFin0,
        start: 'top 30%',
        scrub: 1,
        toggleActions: "restart none none none"
    }
});*/