$(function(){


  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3500,
  });
  
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 400, "swing");
    // urlが変化しないようにfalseを返す
    return false; 
  });


  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".PICK_UP_img").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle_btn").on("click", function () {
    $("#header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".side_nav a").on("click", function () {
    $("#header").toggleClass("open");
  });

  $(".mask").on("click", function () {
    $("#header").toggleClass("open");
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $(window).scroll(function () {
    $(".explain").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する

        $(this).addClass("fadeUp");
      }
    });

    $(window).scroll(function () {
      $(".fadeUp_img").each(function () {
  
        var scroll = $(window).scrollTop();
  
        var target = $(this).offset().top;
  
        var windowHeight = $(window).height();
  
        if (scroll > target - windowHeight + $(this).outerHeight()) {
          // outerHeight()はpaddingを含めた高さを取得する
  
          $(this).addClass("fadeUp");
        }
      });
  });


//スライド上の設定
  $('.slider-left').slick({
    speed:1500,
    autoplaySpeed:2500,
    accessibility: false,// 左右矢印ボタンでの切り替えなし
    arrows: false,//左右矢印ボタン表示なし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    swipe: false,//タッチスワイプに対応しない
  });
  //スライド下の設定
  $('.slider-right').slick({
    speed:1500,
    autoplaySpeed:2500,
    accessibility: false,// 左右矢印ボタンでの切り替えなし
    arrows: false,//左右矢印ボタン表示なし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    swipe: false,//タッチスワイプに対応しない
    rtl: true,//スライダの表示方向を左⇒右に変更する

  });
    // これを複数使う


    
  });
  

})


