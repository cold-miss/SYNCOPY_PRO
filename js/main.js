$(function(){

    // mobile 토글 메뉴
    $(function(){

    $('.mobile_toggle_btn').click(function(){
      $('#gnb').toggleClass('on');
    })
  

    // PC 토글메뉴
    $('.sitemap_btn').click(function(){
      $('.sitemap-modal').toggleClass('on');
    })
    
  })
  

})