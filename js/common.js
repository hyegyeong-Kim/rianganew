window.addEventListener('load', function(){
   /* nav active */
   document.querySelector('header > div').addEventListener('click', function(){
    document.querySelector('.gnb').classList.add('on');
  });

  document.querySelector('.gnb > div').addEventListener('click', function(){
    document.querySelector('.gnb').classList.remove('on');
  });
  /* masonry */
  var elem = document.querySelector('.gallery');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.item',

    horizontalOrder:true
  });
  console.log('hi1')
});
console.log('hi2')

/* masonry */
// var elem = document.querySelector('.gallery');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.item',

//   horizontalOrder:true
// });

// element argument can be a selector string
//   for an individual element
/* sticky_gallery */
var sticky_gallery = {
  deployment:function(e, count, hori_mg, verti_mg){
      var li = document.querySelectorAll(e);
      var imgStack = new Array();
      
      var count, hori_mg, verti_mg;

      li.forEach(e=> {
          e.style.width = (e.parentNode.clientWidth / Number(count)) - Number(hori_mg) + (Number(hori_mg) / Number(count))+'px';
      });
      setTimeout(function(){
        console.log(li)
        var colWidth = document.querySelector(e).offsetWidth + Number(hori_mg);

          for(var i = 0; i < Number(count); i++){
              imgStack[i] = 0;
          }

          for(var i = 0; i < li.length; i++){

              var minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));

              var x = colWidth * minIndex;
              var y = imgStack[minIndex];
              imgStack[minIndex] += (li[i].offsetHeight + Number(verti_mg));
              li[i].style.transform = "translateX("+x+"px) translateY("+y+"px)";
              if(i === li.length - 1){
                  li[i].parentElement.style.height =  (Math.max.apply(0, imgStack) - verti_mg)+"px"
              }
          }
      },500);
  }
};
console.log('hi3')