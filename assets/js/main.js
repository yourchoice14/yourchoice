// עטיפת כל הקוד כדי למנוע התנגשויות
(function($) {

  // פרילודר - העלמתו אחרי טעינת העמוד
  $(window).on('load', function() {
    $('#preloader').fadeOut('slow', function() {
      $(this).remove();
    });
  });

  // גלילה חלקה בתוך האתר
  $(function() {
    $('#nav a, #back-to-top').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  });

  // כפתור חזור למעלה - הצגה והסתרה לפי הגלילה
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // הופעת סקשנים בעדינות (Fade+Slide) תוך כדי גלילה
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // הדגשת קישור פעיל בתפריט ניווט
  $(window).on('scroll', function() {
    var position = $(this).scrollTop();

    $('section').each(function() {
      var target = $(this).offset().top - 120;
      var id = $(this).attr('id');

      if (position >= target) {
        $('#nav ul li a').removeClass('active');
        $('#nav ul li a[href="#' + id + '"]').addClass('active');
      }
    });
  });

})(jQuery);