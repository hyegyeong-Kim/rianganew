window.addEventListener('load', function(){
  var dott_position = document.querySelectorAll('#inner p strong');
  var dott = document.querySelectorAll('#inner p strong em')
  for(i=0; i<dott_position.length; i++){
    for(j=0; j<dott.length; j++){
      dott[0].style.left = dott_position[0].offsetWidth + 10 +'px';
      dott[1].style.left = dott_position[0].offsetWidth + 10 +'px';
      dott[2].style.left = dott_position[1].offsetWidth + 10 +'px';
      dott[0].style.top = (dott_position[0].offsetHeight) * 0.5 + 'px';
    }
  }
  var gnb_title = document.querySelectorAll('.gnb ul li a');
  var gnb_dott = document.querySelectorAll('.gnb ul li a em');
  gnb_dott.forEach(function(a,i){
    a.style.left = gnb_title[i].offsetWidth + 10 + 'px';
  });

})//windowload

var last_resize = 0;
window.addEventListener("resize", function(){
  
  var dott_position = document.querySelectorAll('#inner p strong');
  var dott = document.querySelectorAll('#inner p strong em')
  for(i=0; i<dott_position.length; i++){
    for(j=0; j<dott.length; j++){
      dott[0].style.left = dott_position[0].offsetWidth + 10 +'px';
      dott[1].style.left = dott_position[0].offsetWidth + 10 +'px';
      dott[2].style.left = dott_position[1].offsetWidth + 10 +'px';
      dott[0].style.top = (dott_position[0].offsetHeight) * 0.5 + 'px';
    }
  }

  /* window resizing check */
  this.setTimeout(function(){
    console.log(window.document.body.offsetWidth+' / '+last_resize);
    if(window.document.body.offsetWidth == last_resize){ //resizing 끝났으면
      this.setTimeout(function(){
        var gnb_dott = document.querySelectorAll('.gnb ul li a em');
        gnb_dott.forEach(function(a,i){
          a.style.left = a.parentElement.offsetWidth + 10 + 'px';
        });
      },100);
    }
  },300);

  last_resize = window.document.body.offsetWidth;
  /* //window resizing check */
})//window.resize


/* section 2 */


window.addEventListener('scroll', function(){
  var sec_offset = document.querySelector('.sec_2').offsetTop;
  var sec_Height= document.querySelector('.sec_2').clientHeight;
  var win_scrollY = window.scrollY;  
  var txt = document.querySelectorAll('.sec_2 #inner p')
  if(sec_offset < (sec_Height * 0.8) + win_scrollY ){
    document.querySelector('.sec_2 #inner img').style.opacity = 1;
    txt.forEach(function(a){
      a.style.opacity = 1;
    })
  }
})//scroll evetn

window.addEventListener('scroll',()=>{
  var sec_offset = document.querySelector('.sec_3').offsetTop;
  var sec_Height= document.querySelector('.sec_3').clientHeight;
  var win_scrollY = window.scrollY;
  if(sec_offset < (sec_Height * 0.92) + win_scrollY ){
    document.querySelector('.sec_3_swiper').classList.add('active')
    document.querySelector('.sec_3 #inner').classList.add('active')
  }
})//scroll evetn


window.addEventListener('scroll', ()=>{
  var sec_dl = document.querySelectorAll('.sec_4 > #inner > dl')
  var win_scrollY = window.scrollY;
  sec_dl.forEach(function(a,i){
    let sec_offset = a.offsetTop;
    let sec_Height = a.clientHeight;
    if(sec_offset < (sec_Height * 0.7) + win_scrollY ){
      a.classList.add('show')
    }
    //만약 각각의 offset 이 (sec_Height * 0.92) + win_scrollY 작아지면
    //각각의 요소에 active가 추가된다. (opacity, position  좌표, transitiondelay)
  })
  
//   if(sec_offset < (sec_Height * 0.5) + win_scrollY ){
//     var item = document.querySelectorAll('.sec_4 #inner .item')
//     item.forEach(function(a,i){
//       setTimeout(function(){
//         a.classList.add('show');
//         a.style.opacity = 1;
//         a.style.animationDelay = (delay*i);
//         // console.log('1 : '+i)
//       }, (delay*i))
//       console.log(delay*i)
//     })

// }
})


window.addEventListener('scroll', ()=>{
  var sec_offset = document.querySelector('.sec_5').offsetTop;
  var sec_Height= document.querySelector('.sec_5').clientHeight;
  var win_scrollY = window.scrollY;
  let delay = 500
  if(sec_offset < (sec_Height * 0.5) + win_scrollY ){
    var item = document.querySelectorAll('.sec_5 #inner .item')
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


window.addEventListener('scroll', ()=>{
  var sec_offset = document.querySelector('.sec_6').offsetTop;
  var sec_Height= document.querySelector('.sec_6').clientHeight;
  var win_scrollY = window.scrollY;
  let delay = 100
  if(sec_offset < (sec_Height * 0.92) + win_scrollY ){
    var text = document.querySelectorAll('.element_jumps > li > img')
    text.forEach(function(a,i){
      setTimeout(function(){
        a.style.animation = "jumps 2s ease-in-out 1 alternate";
        a.style.animationDelay = (delay*i);
        // console.log('1 : '+i)
      }, (delay*i))
      console.log(delay*i)
    })

}
})//scroll evetn
//스크롤 이벤트 진행 시
//스크롤한 양이  sec_2의 offsetTop 값보다 클때 
// img가 opcatity가 1로 돌아온다.
//순서대로 하나씩 opacity가 돌아온다.



