$(function(){
  $('.slider').slick({
    autoplay:true,
    arrows:true,
    adaptiveHeight:true,
    slidesToShow:4,
    pauseOnHover:false
  });

  // ナビゲーション
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scroll-nav", window.scrollY > 0);
  });

  // スクロールした時にアニメーション
  $(window).on('load scroll',function (){
		$('.heading,.description-img').each(function(){
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
  // $(window).on('load scroll',function (){
	// 	$('.description-heading').each(function(){
	// 		//ターゲットの位置を取得
	// 		var target = $(this).offset().top;
	// 		//スクロール量を取得
	// 		var scroll = $(window).scrollTop();
	// 		//ウィンドウの高さを取得
	// 		var height = $(window).height();
	// 		//ターゲットまでスクロールするとフェードインする
	// 		if (scroll > target - height){
	// 			//クラスを付与
	// 			$(this).addClass('active-x');
	// 		}
	// 	});
	// });
  ScrollReveal().reveal('.description-img',{
    duration: 1600, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'bottom',
    distance: '100px',
  });
  ScrollReveal().reveal('.description-heading',{
    duration: 1600, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'left',
    distance: '50px',
    delay: 500
  });
  ScrollReveal().reveal('.description-text-contents',{
    duration: 1600, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'top',
    distance: '50px',
  });
  ScrollReveal().reveal('.attraction-contents,.mini-heading,.attraction-img',{
    duration: 1600, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'bottom',
    distance: '50px',
  });
  ScrollReveal().reveal('.person-img,.environment-top,.center-contents,.feature-heading,.system-m,.data,.office-heading,.office-img,.direction,.carousel-heading,.future-contents',{
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'bottom',
    distance: '50px',
  });
  ScrollReveal().reveal('.text-right',{
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'right',
    distance: '50px',
    delay: 300
  });
  ScrollReveal().reveal('.text-left',{
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'left',
    distance: '50px',
    delay: 300
  });
  ScrollReveal().reveal('.under-text,.second',{
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'bottom',
    distance: '50px',
    delay: 300
  });
  ScrollReveal().reveal('.under-img',{
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'bottom',
    distance: '50px',
    delay: 500
  });
  ScrollReveal().reveal('.allowance,.slider',{
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   
  });
});