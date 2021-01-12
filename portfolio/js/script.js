$(function(){

  $(window).on('load scroll',function (){
    $('.animation').each(function(){
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height){
        //クラスを付与
        $(this).addClass('active');
      }
    });
  });

  ScrollReveal().reveal('.a', { 
    duration: 3000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false  , // 何回もアニメーション表示するか
  });
  ScrollReveal().reveal('.b', { 
    duration: 3000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false  , // 
    delay:300
  });
  ScrollReveal().reveal('.c', { 
    duration: 3000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false  , // 何回もアニメーション表示するか
    delay:600
  });
  
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });

});
