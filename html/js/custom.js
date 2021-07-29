/*!
 * 提示
 */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
/*!
 * goToTop
 */
$(document).ready(function(){
	$("#goToTop").hide()
	$(window).on("scroll",function() {
        if ($(this).scrollTop() > 50 ) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });
    $("#goToTop a").on("click",function() {
        $("html, body").animate({scrollTop: 0}, 800);
		return false;
     });
});
/*!
 * 延遲下載
 */
$(function() {
	$('.products .list .photo').addClass("lazy");
	$('.lazy').lazy({
	  effect: "fadeIn",
	  effectTime: 500,
	  threshold: 0
	});
});

/*!
 * 載入動態
 */
$(function() {
  if(typeof WOW !== 'undefined'){
    wow = new WOW(
      {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
  }
});

/*!
 * 下拉
 */
$(function() {
  $(document).ready(function() {
    $('select:not(.ignore)').niceSelect();      
    // FastClick.attach(document.body);
  });   
});



$(function() {
    $("#bars").click(function(){
      $(".sidebar").slideToggle("slow");
    });
});
/*!
 * 下拉
 */
$(function () {
  $('.dropdown-toggle').dropdown()
})

/*!
 * 選單定位
 */
window.onscroll = function() {myFunction()};
	var navbar = document.getElementById("menuzord");
	var sticky = navbar.offsetTop;
	function myFunction() {
	if (window.pageYOffset >= sticky) {
	  navbar.classList.add("sticky")
	} else {
	  navbar.classList.remove("sticky");
	}
}

/*!
 * 選單
 */
$(function () {
  jQuery(document).ready(function(){
    jQuery("#menuzord").menuzord({
      align: "left"
    });
  });
})

$(function(){
	$(".menu-container").jSideMenu({
		jSidePosition: "position-left", //possible options position-left or position-right
		jSideSticky: true, // menubar will be fixed on top, false to set static
		jSideSkin: "default-skin", // to apply custom skin, just put its name in this string
		});
}); 

/*!
 * 產品分類
 */
$(function () {
  $('.example').beefup({
    scroll: false,
    scrollOffset: -10,
  });
})

/*!
 * 輪播
 */
$(function () {
  $('.carousel-dots').owlCarousel({
    margin:10,
    items:1
  });
  $('.carousel-nav').owlCarousel({
    margin:10,
    items:1,
    dots:false,
    nav:true
  });
  $('.products').owlCarousel({
    loop:true,
      items:1,
      margin:10,
      nav:true,
      dots:false,
      responsive:{
          600:{
              items:4
          }
      }
  });
  $('.hot-products,.recommend-products').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        600:{
            items:5
        }
    }
  });
  $('.search-products').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        600:{
            items:6
        }
    }
  });
  $('.bid-products').owlCarousel({
    loop:true,
    items:1,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        600:{
            items:3
        }
    }
  });
  $('.live-products').owlCarousel({
    loop:true,
    margin:10,
    items:1
  });
  $('.live-carousel-1').owlCarousel({
    loop:true,
    items:1.5,
    margin:20,
    nav:false,
    dots:false,
    responsive:{
        600:{
            items:2.5,
            nav:true
        }
    }
  });
  $('.live-carousel-2').owlCarousel({
    loop:true,
    items:1.5,
    margin:20,
    nav:false,
    dots:false,
    responsive:{
        600:{
            items:5,
            nav:true
        }
    }
  });
})
/*!
 * 加入收藏/加入購物車
 */
$(".bookmark").click(function(){
  $(this).toggleClass("active");
});

if($.fn.initGallery){
  jQuery('.gallery').eq(0).initGallery({
      nav: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
      close: "<i class='material-icons'>close</i>",
      aspectRatio: 3/2,
      dots: false,
      showNavIfOneItem: false,
      showNav: true,
      arrows: true,
      loop: false,
      autoplay: false,
      transition: "slide",
  });



  jQuery('.gallery').eq(1).initGallery({
    nav: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
    close: "<i class='material-icons'>close</i>",
    aspectRatio: 3 / 2,
    showDots: true,
    showNavIfOneItem: false,
    showNav: false,
    arrows: true,
    transition: "slide",
    transitionTime: 700,
  });

  jQuery('.gallery').eq(2).initGallery({
    nav: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
    close: "<i class='material-icons'>close</i>",
    aspectRatio: 3 / 2,
    showDots: true,
    showNavIfOneItem: false,
    showNav: false,
    arrows: true,
    transition: "fade",
    fullScreen: false,
    autoplay: false,
  });

  jQuery('.gallery').eq(3).initGallery({
    aspectRatio: 3 / 2,
    dots: true,
    showDotsIfOneItem: false,
    showNav: true,
  });

  // jQuery('.gallery').trigger('change', 'prev');

};



/**
 * 結帳運送、付款方式
 */
$('.v-checkout-info-tab').each(function( index , ele ) {
  $target = $(this).data('target')
  $($target).hide()
  $(this).find('input[type=radio]').on('click', function() {
    $target = $(this).closest('.v-checkout-info-tab').data('target')
    $trigger = $(this).data('trigger')
    $($target).hide()
    $($trigger).fadeIn(250);
  });  
});







/**
 * 賣家設定 - 編輯欄位
 */
jQuery('.v-btn-edit').on('click',function(e){
  $(this).next('.v-edit-input').slideToggle()
})
jQuery('.v-edit-input .done').on('click',function(e){
  $(this).closest('.v-edit-input').slideUp()
})


/**
 * edit icon
 */
jQuery('.v-edit-icon').on('click',function(e){
  const target = $(this).data('target')
  $(target).slideToggle()
})


/**
 * 星星評價
 */
var options = {
  max_value: 5,
  step_size: 1,
  cursor: 'pointer',
}
jQuery(".rating").rate(options);



