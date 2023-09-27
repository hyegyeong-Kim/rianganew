// window.addEventListener('load', function(){
  /* accordion */
  function accordion(_target, evt){ // 23.08.18 nextElementSibling 테그가 없는 경우를 위한 수정
    var evt,
    accordion = document.querySelectorAll(_target, evt);
    accordion.forEach(el => {

        el.querySelectorAll('dt > a').forEach((el, i) => {
          el.addEventListener(evt, function(){
                if(el.closest('dl').classList.contains('single')){
                    const parent_index = Array.from(el.closest('dl').getElementsByTagName('dt')).indexOf(el.parentNode);

                    for(j=0; j<el.closest('dl').getElementsByTagName('dt').length; j++){
                        if(i != j && el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling != null){
                            el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling.classList.remove('show');
                        }
                    }
                }
                
                if(el.parentNode.nextElementSibling != null){
                    if(el.parentNode.nextElementSibling.classList.contains('show')){
                        el.parentNode.nextElementSibling.style.height = '0px'

                        el.parentNode.nextElementSibling.addEventListener('transitionend', () => {
                            el.parentNode.nextElementSibling.classList.remove('show');
                        }, {once: true});
                    } else {
                        el.parentNode.nextElementSibling.classList.add('show');

                        el.parentNode.nextElementSibling.style.height = 'auto'
                        var height = el.parentNode.nextElementSibling.clientHeight + 'px'
                        el.parentNode.nextElementSibling.style.height = '0px'
                        setTimeout(() => {
                            el.parentNode.nextElementSibling.style.height = height
                        });
                    }
                }
            });
        });
    });
  }

  
// })


