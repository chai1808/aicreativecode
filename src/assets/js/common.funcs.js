// common.funcs.js

$(function () {
  $('body').css('opacity', '0');
  $(document).ready(function () {
    $('body')
      .css('opacity', 0)
      .animate({ opacity: 1 }, { duration: 2000, easing: 'easeInOutQuad' });
  });
  $(window).bind('load scroll', function () {
    $('.-effect, .-effecttitle, .-effectlist').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var wh = $(window).height();
      if (scroll > pos - wh - 100) {
        $(this).addClass('-scrollin');
      }
    });
    $('.-effectlist>li').each(function () {
      $(this).attr(
        'style',
        'transition-duration: ' + $(this).closest('li').index() * 0.17 + 's;'
      );
    });
  });

  if ($('body').attr('id') == 'index') {
    $('#workssection .login form .submit').click(function () {
      if (
        $('.idinput').val() != 'portfolio' ||
        $('.passinput').val() != 'aichinen'
      ) {
        $(this).closest('form').children('p.ermsg').remove();
        $(this)
          .closest('form')
          .prepend(
            "<p class='ermsg'>The login attempt failed. Either the user ID or password is invalid.</p>"
          );
        $('body, html').animate(
          { scrollTop: $('p.ermsg:first').parent().offset().top },
          800
        );
        return false;
      }
    });
  }
});