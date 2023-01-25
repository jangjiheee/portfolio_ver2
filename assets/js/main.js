window.onload = function() {
    const toggle = document.getElementById("__mode_btn");
    const header = document.querySelector('header');
    const section = document.querySelectorAll('section')
    console.log(header);
    toggle.onclick = function() {
        toggle.classList.toggle('active');
        header.classList.toggle('change');
        item.forEach(item => {
            section.classList.toggle('change');
        });
    }
}