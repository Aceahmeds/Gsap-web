const tl = gsap.timeline();
tl.from(".logo", {
    y:-40,
    opacity:0,
    duration:0.4
});
tl.from("#item", {
    y:-40,
    opacity:0,
    duration:0.4,
    stagger:0.4
});
tl.from("#banner h1", {
    rotateY: 180,
    duration:0.4,
    ease: "power2.out",
    stagger:0.4
});
