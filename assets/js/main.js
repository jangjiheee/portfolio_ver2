window.onload = function() {
    const toggle = document.getElementById("__mode_btn");
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    console.log(header);
    const section = document.querySelectorAll('section');
    const dot = document.querySelectorAll('.__double_dot');
    console.log(dot);
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
        // item.document.documentElement.style.setProperty('background', 'black');
    }
}