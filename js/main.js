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
    $("html, body").animate({ scrollTop: $(".btn-vermais").offset().top-70 }, 1);
    $(".vm-card").css("display","none");
    $(".btn-vermais").css("display","block");
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
    percentage: 35,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#DC2F31'
});
$('.progress-wo').rProgressbar({
    percentage: 20,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#ECCC57'
});
$('.progress-un').rProgressbar({
    percentage: 20,
    borderRadius: '5px',
    height: '8px',
    fillBackgroundColor: '#000'
});
$('.progress-js').rProgressbar({
    percentage: 50,
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

function anoAtual(){
    const anoAtual = new Date().getFullYear();
    $('.anoAtual').text('© '+ anoAtual +' - Daniel Rodrigues Alves');
}

function idade() {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +2001,
        mes_aniversario = +3,
        dia_aniversario = +27,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    let idade = quantos_anos < 0 ? 0 : quantos_anos;
    $('.idade').html(idade);
}