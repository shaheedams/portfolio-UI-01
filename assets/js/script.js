
$(document).ready(function () {
    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
    });

    // Misc active trigger
    $('.miscNavBtns .btn').on('click', function (e) {
        let id = $(e.target).attr('data-id');
        $(`.misc_container, .miscNavBtns .btn`).removeClass('active');
        $(`#${id}`).addClass('active');
        $(e.target).addClass('active');
    });

    // Nav links active trigger
    const sections = document.querySelectorAll(".sec");
    window.addEventListener("scroll", navHighlighter);
    function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute("id");
            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight && sectionId !== 'slogan' && sectionId !== 'skills' && sectionId !== 'recognition'
            ) {
                $('.nav a').removeClass('active');
                document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");
            }
        });
    }

    let emailTo = "mohamedshaheed8055@gmail.com";
    let emailBody = "body"
    let emailSub = "sub"

    // window.open("mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody);
    window.open("mailto:"+emailTo+'?subject='+emailSub+'&body='+emailBody);

});


