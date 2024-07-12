var nav=document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl=gsap.timeline()
  tl.to(".second",{
    height:"120px"
  })
  tl.to("nav h5",{
    display:"block",

  })
  tl.from("nav h5 span",{
    y:20,
    duration:0.1,
    stagger:0.1,
  })
})
nav.addEventListener("mouseleave",function(){
    let tl=gsap.timeline()
    tl.to("nav h5 span",{
        y:20,
        stagger:0.1,
        duration:0.1,
    })
    tl.to(".second",{
        height:"0%",
        duration:0.1,
    })
    
})

var elem=document.querySelectorAll(".elem")
elem.forEach(function(ele){
ele.addEventListener("mouseenter",function(){
var ali=ele.childNodes[3]
ali.style.opacity=1;
ali.style.scale=1
})
ele.addEventListener("mouseleave",function(){
  var ali=ele.childNodes[3]
ali.style.opacity=0;
ali.style.scale=0
})
ele.addEventListener("mousemove",function(dets){
  var ali=ele.childNodes[3]
  ali.style.
 ali.style.left=dets.x+"px"
 ali.style.top=dets.y+"px"
})
})
.addEventListener("contextmenu",function(e){
  e.preventDefault()
},false)
