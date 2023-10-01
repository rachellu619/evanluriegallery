const tl1 = gsap.timeline();

gsap.from(".landing-image", 2, {
  delay: 1,
  scale: 0,
  ease: "power3.inOut",
  stagger: {
        amount: 0.3
  }
})

tl1.to(".landing-image-description", {
  opacity: 1,
  duration: 0.5,
});

tl1.from(".logo , .menu-open", {
  duration: 1,
  y: -100,
  opacity: 0,
  stagger: {
    amount: 0.4,
  },
});

const tl = gsap.timeline({
  paused: "true",
});

tl.to(".menu-container", {
  duration: 1,
  x: 0,
});
tl.from(
  ".menu-close",
  {
    opacity: 0,
    rotate: "180deg",
  },
  "-=.2"
);
tl.from(
  ".line",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.2"
);
tl.from(
  ".menu-item-list",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.5"
);
tl.from(
  ".menu-item-name",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    y: 100,
  },
  "-=1.3"
);

function menuOpen() {
  tl.play();
}
function menuClose() {
  tl.reverse();
}
