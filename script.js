let crsr = document.querySelector("#cursor");
document.addEventListener( 'mousemove', function (dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})

let crsr_blr = document.querySelector("#cursor-blur");
document.addEventListener( 'mousemove', function (dets){
    crsr_blr.style.left = dets.x -200 + "px";
    crsr_blr.style.top = dets.y -200 + "px";
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(e) {
e.addEventListener("mouseenter", function () { 
    crsr.style.backgroundColor= "transparent"
    crsr.style.scale="3"
    crsr.style.border ="1px solid #95c11e"})
    e.addEventListener("mouseleave", function () { 
        crsr.style.backgroundColor= "#95c11e"
        crsr.style.scale="1"
        crsr.style.border ="0px solid #95c11e"})
    
})

gsap.to("#nav",{
    backgroundColor :"white",
    duration: 0.5 ,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});
gsap.to("#nav h4",{
    color:"#000",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});
gsap.to("#main",{
backgroundColor:"#000",
scrollTrigger:{
    trigger:"#main",
    scrolller:"body",
    // markers:true,
    start:"top -30%",
    end:"top -80%",
    scrub:2
},
});

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
 duration:1,
 stagger:0.4,
 scrollTrigger:{
    trigger:"#about-us",
    scoller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 58%",
    scrub:2
 },
});
// gsap.from(".cards",{
//     y:90,
//     opacity:0,
//  duration:1,
//  stagger:0.1,
//  scrollTrigger:{
//     trigger:".cards",
//     scoller:"body",
//     // markers:true,
//     start:"top 60%",
//     end:"top 58%",
//     scrub:2
//  },
// });

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    },
});
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 85%",
      end: "top 80%",
      scrub: 2,
    },
  });