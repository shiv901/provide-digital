    // Auto hide Navbar
    const navbarClassUpdate = (className = "") => {
      document.querySelector('.navbar-wrapper').className = `navbar-wrapper navbar-dark ${className}`
    }

    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        // scroll up
        this.scrollY > 100 && navbarClassUpdate("sticky");
      } else {
        // scroll down
        this.scrollY > 100 && navbarClassUpdate();
      }

      this.scrollY < 100 && navbarClassUpdate("static");
      this.oldScroll = this.scrollY;
      delete window.onscroll;
    };
    // Auto Hide Fn ends

    // ********* Navbar Minimize and Fixed ******//

    // ********* Typewriter JS *****************//
    $('#typewriter').typewriter({
      text: ["Agency", "Company"],
      typeDelay: 100,
      waitingTime: 1000,
      blinkSpeed: 1000,
      prefix: ''
    });


    $(document).ready(function () {

      AOS.init();

      $('.partner-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'ease',
        autoplay: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });

      $('.face-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    });