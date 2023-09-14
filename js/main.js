window.addEventListener('load', function(){
  var dott_position = document.querySelectorAll('.inner p strong');
  var dott = document.querySelectorAll('.inner p strong em')
  for(i=0; i<dott_position.length; i++){
    for(j=0; j<dott.length; j++){
      dott[0].style.left = dott_position[0].offsetWidth + 10 +'px';
      dott[1].style.left = dott_position[0].offsetWidth + 10 +'px';
      dott[2].style.left = dott_position[1].offsetWidth + 10 +'px';
      dott[0].style.top = (dott_position[0].offsetHeight) * 0.5 + 'px';
    }
  }
  var gnb_title = document.querySelectorAll('.gnb ul li a')
  var gnb_dott = document.querySelectorAll('.gnb ul li a em')
  gnb_dott.forEach(function(a,i){
    a.style.left = gnb_title[i].offsetWidth + 10 + 'px';
  })
  document.querySelector('header > div').addEventListener('click', function(){
    document.querySelector('.gnb').classList.add('on');
  })

  document.querySelector('.gnb > div').addEventListener('click', function(){
    document.querySelector('.gnb').classList.remove('on');
  })




})//windowload

window.addEventListener("resize", function(){
  
  var dott_position = document.querySelectorAll('.inner p strong');
  var dott = document.querySelectorAll('.inner p strong em')
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
      a.style.left = a.parentElement.offsetWidth + 10 + 'px';
      console.log(a.parentElement.offsetWidth);
      // gnb_title[i].innerText=(gnb_title[i].offsetWidth);
    })
  

})//window.resize

/* nav active */

