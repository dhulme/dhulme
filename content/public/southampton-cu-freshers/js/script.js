$(function() {
  $('#scrollArrowImg').click(function() {
    $('html, body').animate({
      scrollTop: $('#whatsonContainer').offset().top
    }, 1000);
  });
  
  $('.link-graphic').click(function() {
    var self = $(this);
    $('html, body').animate({
      scrollTop: $('#' + self.data('scroll-id')).offset().top
    }, 1000);
  });
    
  $('#disableVimeoLink').click(loadYouTube);
  
  function loadYouTube() {
    $('#videoContainer').html('<iframe width="600" height="338" src="http://www.youtube.com/embed/gpf2JeBA2YE?rel=0" frameborder="0" allowfullscreen></iframe>');
  }
  
  // Check for mobile devices
  var desktop = true;
  if (screen.width <= 800) {
    desktop = false;
    $('#sizeStylesheet').prop('href', "css/mobile.css");
    $('#scrollArrowImg').prop('src', "img/arrow-large.png");
    $('#logoImg').prop('src', "img/logo-large.png");
    
    // Load YouTube version as movile devices don't seem to support vimeo very well :(
    loadYouTube();
  } else {
    if (screen.height <= 800 || screen.width <= 1024) {
      // Load new style sheet
      $('#sizeStylesheet').prop('href', "css/800.css");
      $('#logoImg').prop('width',500);
    
      // Adjust video size
      $('#vimeoPlayer').prop('width',500);
      $('#vimeoPlayer').prop('height',281);
    }
  }
  
  if (desktop)
    $('.more-info').prepend('<div class="triangle"></div>');
  
  $('.link').click(function() {
    var moreInfo = $('#' + $(this).prop('id') + 'MoreInfo');
      
    if (moreInfo.css('display') === 'none') {
      $('.not-active').hide();
      moreInfo.addClass('not-active');
      
      if (desktop) {
        moreInfo.show(400, 'linear', function() {
          moreInfo.find('p').css('visibility','visible');
          moreInfo.find('.triangle').css('visibility','visible');
          moreInfo.find('.triangle').animate({'margin-top' : -20}, 100);
        });
      } else {
        moreInfo.show();
        moreInfo.find('p').css('visibility','visible');
      }
    } else {
      if (desktop) {
        moreInfo.find('.triangle').animate({'margin-top' : 0}, 100, function() {
          moreInfo.find('.triangle').css('visibility','hidden');
        });
        moreInfo.find('p').css('visibility','hidden');
        moreInfo.hide(400, 'linear');
      } else {
        moreInfo.hide();
        moreInfo.find('p').css('visibility','hidden');
      }
    }
  });
  
  $('.more-info').each(function() {
    $(this).addClass('not-active');
  });
  
  // Make sure more-info divs are full width
  if (desktop)
    $('.more-info').css('width',$(window).width());
  
  // Churches
  var FADE_TIME = 400;
  var animationFinished = true;
  $('#aboveBarChurch').addClass('active');
  $('#churchList').find('li').first().addClass('link-active');
  
  $('#churchList').find('li').click(function() {
    if (!animationFinished) return;
    
    animationFinished = false;
    
    // Make link active
    $('#churchList').find('li').removeClass('link-active');
    $(this).addClass('link-active');
    
    // Hide all church info
    var item = $(this);
    
    var active = $('.active');
    var numberAnimations = active.length;
    $('.active').fadeOut(FADE_TIME, function() {
      if (--numberAnimations > 0) return;
      
      $('#' + item.data('churchId')).fadeIn(FADE_TIME, function() {
        $(this).addClass('active');
        animationFinished = true;
      });
    });
  });
  
  $('#buddySubmitButton').click(function() {
    $.post('buddy_handler.php', {
      name: $('#buddyNameInput').val(),
      email: $('#buddyEmailInput').val(),
      mobile: $('#buddyMobileInput').val(),
      gender: $('#buddyGenderInput').val(),
      course: $('#buddyCourseInput').val(),
      international: $('#buddyInternationalInput').val()
    }).done(function() {
      $('#buddyForm').find('input').val('');
      $('#buddyForm').find('button').fadeOut(200, function() {
        $('#buddySuccessMessage').fadeIn(200);
      });
    });
  });
});