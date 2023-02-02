$(function () { // wait for document ready
    var controller = new ScrollMagic.Controller();

    var horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer", 1,   {x: "-25%"}) 
    .to("#js-slideContainer", 1,   {x: "-50%"})
    .to("#js-slideContainer", 1,   {x: "-75%"})
    //   .to("#js-slideContainer", 1,   {x: "-80%"})


    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: "400%"
    })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);       
    
    }
);


$('.tabcontent > div').hide();
$('.tablist a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tablist a').removeClass('active');
    $(this).addClass('active');
    return false;
}).filter(':eq()').click();

window.onload = function() {
    const toggle = document.getElementById("__mode_btn");
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    console.log(header);
    const section = document.querySelectorAll('section');
    const dot = document.querySelectorAll('.__double_dot');
    console.log(dot);
    const goSite = document.querySelectorAll(".__site");
    const url = document.querySelectorAll(".__go_site > a");
    const pagination = document. querySelectorAll("span.swiper-pagination-bullet");
    console.log(pagination);

    // const footer = document.querySelector('footer');
    toggle.onclick = function() {
        toggle.classList.toggle('active');
        header.classList.toggle('change');
        footer.classList.toggle('change');
        for(i = 0; i<section.length; i++) {
            section[i].classList.toggle('change');
        }
        for(j = 0; j<dot.length; j++) {
            dot[j].classList.toggle('change');
        }
        for(k=0; k<goSite.length; k++) {
            goSite[k].classList.toggle("active");
            url[k].classList.toggle("active");
            // underLine[k].classList.toggle(".active");
        }
        for (i = 0; i < pagination.length; i++) {
            pagination[i].classList.toggle("change");
        } 
        // item.document.documentElement.style.setProperty('background', 'black');
    }
}

$(function(){
var swiper = new Swiper(".proSwiper", {
    slidesPerView: "auto",
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false,
    // },
        // spaceBetween: 30,
        pagination: {
            el: ".proSwiper .swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current) {
              var pageNum = current < 10 ? '#_0' + current : current
              $(".page-num").text(pageNum);
            },
        },
        centeredSlide: true,
        loop: true,
      });
    });