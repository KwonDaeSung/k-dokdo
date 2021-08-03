$(function(){
    /*const $indicators = $('section>.slide-pagenation>li');
    const $container = $('section>.slide-container>li');
  
    $indicators.on('click', function(evt){
      evt.preventDefault();
  
      $(this).parent().addClass('on');
      $(this).parent().siblings().removeClass('on');
  
      const nowIdx = $indicators.index(this);
  
      $container.animate({
        left : -1200*nowIdx
      });
  
    });*/



      const $slide = $('section>.slides-container>li');
      const $indicator = $('section>.slides-pagination>li');
    
      let nowIdx = 0;
  
      const fadeFn = function(){
          //1. 이전슬라이드가 사라지는 작업
        $slide.filter('.on').stop().fadeOut(1000).removeClass('on');
    
        //2. 이번에 나타날 슬라이드 작업
        $slide.eq(nowIdx).stop().fadeIn(1000).addClass('on');
    
        //3. 인디케이터 활성화 작업
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      
      };
    
      $indicator.on('click', function(evt){
        evt.preventDefault();
    
        nowIdx = $indicator.index(this);
          fadeFn();
        
      })
    });