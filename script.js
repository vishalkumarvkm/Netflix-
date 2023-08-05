let tl = gsap.timeline()

tl.from("#logo img,#list,#minilogo",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})
tl.from("#body",{
   
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})
 gsap.from("#main0 h1,#main0 p",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    scrollTrigger:"#main0 h1,#main0 p"
 })
   
 



