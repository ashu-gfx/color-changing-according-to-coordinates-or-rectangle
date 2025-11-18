var rect = document.querySelector('.center')

rect.addEventListener('mousemove', function (dets) {
  var rectlocation = rect.getBoundingClientRect()
  
  //   console.log(recthalfwidth)
  var insiderect = dets.clientX - rectlocation.left
  // var insiderect = dets.clientY - rectlocation.top
  
  if (insiderect < rectlocation.width / 2) {
     var recthalfwidth = rectlocation.width / 2
    var redcolor = gsap.utils.mapRange(0, recthalfwidth, 255, 0, insiderect)
    gsap.to(rect,{
        backgroundColor: `rgb(${redcolor},0,0)`,
        ease: Power4
    })
    // console.log('left')
  } else {
    var recthalfwidth = rectlocation.width / 2
    var bluecolor = gsap.utils.mapRange(recthalfwidth, rectlocation.width, 0, 255, insiderect)
    gsap.to(rect,{
        backgroundColor: `rgb(0,0,${bluecolor})`,
        ease: Power4
    })

    // console.log('right')
  }
  // console.log(dets.x,dets.y)
})

rect.addEventListener('mouseleave',function(){
    // rect.style.backgroundColor = "rgb(255,255,255)"
     gsap.to(rect,{
        backgroundColor: `rgb(255,255,255)`,
        ease: Power4
    })
})
