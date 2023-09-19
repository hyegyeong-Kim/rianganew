
window.addEventListener('scroll', ()=>{
  var sec_offset = document.querySelector('.container').offsetTop;
  var sec_Height= document.querySelector('.container').clientHeight;
  var win_scrollY = window.scrollY;
  let delay = 500
  if(sec_offset < (sec_Height * 0.5) + win_scrollY ){
    var item = document.querySelectorAll('#inner .item')
    item.forEach(function(a,i){
      setTimeout(function(){
        a.style.opacity = 1;
        a.style.transitionDelay = (delay*i);
        // console.log('1 : '+i)
      }, (delay*i))
      console.log(delay*i)
    })

}
})