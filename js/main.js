AOS.init();

  function checkScroll(){
    var startY = $('.uk-navbar-container').height() * 3; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.uk-navbar-container').addClass("scrolled");
    }else{
        $('.uk-navbar-container').removeClass("scrolled");
    }
}

if($('.uk-navbar-container').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$(window).fadeThis();

$(".btn-vermais").click(function(){
    $(".btn-vermais").css("display","none");
    $(".vm-card").css("display","block");
    $(".btn-vermenos").css("display","block");
})

$(".btn-vermenos").click(function(){
    $(".btn-vermenos").css("display","none");
    $(".vm-card").css("display","none");
    $(".btn-vermais").css("display","block");
    $("a.menu-home").prop('href', '#ancora-projetos');
    $("a.menu-home")[0].click();
})

$('.progress-sa').rProgressbar({
    percentage: 35,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#8B90C1'
});
$('.progress-l').rProgressbar({
    percentage: 25,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#EF3125'
});
$('.progress-j').rProgressbar({
    percentage: 45,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#DC2F31'
});
$('.progress-wo').rProgressbar({
    percentage: 35,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#ECCC57'
});
$('.progress-un').rProgressbar({
    percentage: 35,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#000'
});
$('.progress-js').rProgressbar({
    percentage: 55,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#E4DA21'
});
$('.progress-html').rProgressbar({
    percentage: 80,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#EF5727'
});
$('.progress-css').rProgressbar({
    percentage: 50,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#38ABDB'
});