$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});

$(".header .burgir").click(function() {
    if($(".header .burgir").hasClass("active")) {
        $(".header__navbar").removeClass("opacity");
        $(".header .burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__navbar").removeClass("open");
            $(".header .burgir").removeClass("active");
        },400);
    } else {
        $(".header__navbar").addClass("open");
        $(".header .burgir").addClass("active");
        setTimeout(function() {
            $(".header__navbar").addClass("opacity");
            $(".header .burgir").addClass("rotate");
        },400);
    };
});

if(document.querySelector(".question_answer__accordion .btn")) {
    $(".question_answer__accordion .btn").click(function() {
        $(this).toggleClass("active");
    });
};

if(document.querySelector(".tab_btns")) {
    // Tab
    function tabFun(num) {
        if(document.querySelector("#tab-btn-" + num)) {
            $("#tab-btn-" + num).click(function() {
                $(".tab-btn-all").removeClass("active");
                $(".tab-block-all").removeClass("active");
                $(this).addClass("active");
                $("#tab-block-" + num).addClass("active");
            });
        };
    };
    tabFun("1");
    tabFun("2");
    tabFun("3");
    tabFun("4");
    tabFun("5");
    tabFun("6");
    tabFun("7");
    tabFun("8");
    tabFun("9");
    tabFun("10");
}
