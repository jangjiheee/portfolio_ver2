window.onload = function() {
    const toggle = document.getElementById("__mode_btn");
    console.log(toggle);
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


    const mobileBtn = document.querySelector(".__mobile_btn");
    const line = document.querySelectorAll(".line");
    const moNav = document.querySelector(".mobile_nav")
    mobileBtn.addEventListener("click", ()=> {
        for(i = 0; i <line.length; i++) {
            line[i].classList.toggle("active");
        }
        moNav.classList.toggle("active");
    })


    toggle.addEventListener("click", function() {
        this.classList.toggle("active");
    })
}
