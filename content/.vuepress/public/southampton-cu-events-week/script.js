if (screen.width > 1024) {
  $(window).scroll(function(e) {
    var scrolled = $(window).scrollTop();
    $('#background').css('top', -(scrolled * 0.3) + 'px');
  });
}

$(function() {
  // Menu buttons
  $('#menu li').click(function() {
    var self = $(this);
    $('html, body').animate({
      scrollTop: $('#' + self.data('hrefId')).offset().top - $('#menu').height()
    }, 1000);
  });
  
  // More info links
  $('.more-info-link').click(function() {
    var self = $(this);
    self.parent().find('.more-info-content').show();
    self.hide();
  });
  
  $('#submit').click(function() {
    $.post('#', {
      firstName: $('#inputFirstName').val(),
      lastName: $('#inputLastName').val(),
      email: $('#inputEmail').val(),
      mobile: $('#inputMobile').val(),
      alpha: $('#inputAlpha').prop('checked') ? 'yes' : 'no',
      findOutMore: $('#inputFindOutMore').prop('checked') ? 'yes' : 'no'
    }, function() {
      $('#submit').hide();
      $('#thankYouMessage').css('display', 'inline-block');
      $('input').val('');
    });
  });
});
