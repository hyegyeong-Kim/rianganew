window.addEventListener('DOMContentLoaded', function() {
  // let img = document.querySelector('header h1 a img');
  // // img.setAttribute('src', '/img/Detail_1/Group_373.png');
  // console.log(document.querySelectorAll('header > div > .gnb_btn_wrap > span'))
  // let menu = document.querySelector('header > div > span')
  // // menu.style.color = "#000";
  

  //   var path = location.pathname;

  //   if(path != '/' || path != '/index.html'){
  //     img.setAttribute('src', '/img/Detail_1/Group_373.png');
  //     menu.style.color = "#000";
  //     let wrap = document.querySelectorAll('header > div > .gnb_btn_wrap > span');
  //     wrap.forEach(function(a){
  //     a.style.background="#000";
  //     })
  //   }

    /**경로*/
    console.log(location.pathname);
    
    /*반원호 만들기*/
      // var canvas_1 = document.querySelector('.circle_one');
      // var ctx1 = canvas_1.getContext('2d');
      // var radius = 150;
      // var endPercent=40;
      // var CurPer = 0;
      // var circ = Math.PI*2.55;
      // var quart = Math.PI*6;
      // ctx1.lineWidth = 5;
      // // line color
      // ctx1.strokeStyle = '#006dcd';

      

      // function draw (currentPerc){
      //   ctx1.clearRect(0,0,canvas_1.width,canvas_1.height);
      //   console.log(canvas_1.width)
      //   ctx1.beginPath();
      //   ctx1.arc('155','152',radius,quart,(circ*currentPerc)-quart,false);
      //   /* arc (x,y,반지름,시작점,끝나는점,false)
      //   false시 아래 반원, ture 시 위쪽 반원
      //   */
      //   ctx1.stroke();   
      //   CurPer++
      //   if(CurPer<endPercent){
      //     requestAnimationFrame(function(){
      //       draw(CurPer/100);
      //     })
      //     console.log()
      //   }
        
      // }
      // draw()
      // ctx1.beginPath();
      // ctx1.arc(x, y, radius, startAngle, endAngle, counterClockwise);

      // ctx1.stroke(); 


animateCircle1 = function() {
  var ctx1 = document.querySelector('.circle_one').getContext('2d');
  var end = Math.PI * 1.01;
  for (var i = 0; i < 100; i++) {
    draw1(i);
  };

  function draw1(delay) {
    setTimeout(function() {
      ctx1.strokeStyle = '#006dcd';
      ctx1.lineWidth = 5;
      ctx1.clearRect(0, 0, 310, 310);
      ctx1.beginPath();
      ctx1.arc(155, 152, 150, 0, end / 100 * delay, false);
      ctx1.stroke();
    }, delay * 10);
  }
};
animateCircle1()


animateCircle2 = function() {
  var ctx2 = document.querySelector('.circle_two').getContext('2d');
  var end = Math.PI * -1.01;
  for (var i = 0; i < 100; i++) {
    draw2(i);
  };

  function draw2(delay) {
    setTimeout(function() {
      ctx2.strokeStyle = '#EE141E';
      ctx2.lineWidth = 5;
      ctx2.clearRect(0, 0, 310, 310);
      ctx2.beginPath();
      ctx2.arc(155, 152, 150, 0, end / 100 * delay, true);
      ctx2.stroke();
    }, delay * 10);
  }
};
animateCircle2()




      // var canvas_2 = document.querySelector('.circle_two');
      // var ctx2 = canvas_2.getContext('2d');
      // var x = 155;
      // var y = 152;
      // var radius = 150;
      // var startAngle = 0;
      // var endAngle = Math.PI;
      // var counterClockwise = true;
      // ctx2.beginPath();
      // ctx2.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      // ctx2.lineWidth = 3;
      // // line color
      // ctx2.strokeStyle = '#EE141E';
      // ctx2.stroke(); 
animateCircle3 = function() {
  var ctx3 = document.querySelector('.circle_three').getContext('2d');
  var end = Math.PI * 1.01;
  for (var i = 0; i < 100; i++) {
    draw3(i);
  };

  function draw3(delay) {
    setTimeout(function() {
      ctx3.strokeStyle = '#ff9600';
      ctx3.lineWidth = 5;
      ctx3.clearRect(0, 0, 310, 310);
      ctx3.beginPath();
      ctx3.arc(155, 152, 150, 0, end / 100 * delay, false);
      ctx3.stroke();
    }, delay * 10);
  }
};

animateCircle3()



      // var canvas_3 = document.querySelector('.circle_three');
      // var ctx3 = canvas_3.getContext('2d');
      // var x = 155;
      // var y = 152;
      // var radius = 150;
      // var startAngle = 0;
      // var endAngle = Math.PI;
      // var counterClockwise = false;
      // ctx3.beginPath();
      // ctx3.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      // ctx3.lineWidth = 5;
      // // line color
      // ctx3.strokeStyle = '#ff9600';
      // ctx3.stroke(); 


}) 