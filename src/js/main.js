// -- STYCKY HEADER

(function() {
  // Create a clone of the page-header, right next to original.
  $('.page-header').addClass('original').clone().insertAfter('.page-header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','1000').removeClass('original').hide();

  scrollIntervalID = setInterval(stickIt, 10);


  function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;               

    if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
    } else {
    // not scrolled past the page-header; only show the original page-header.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
    }
  }
})();

// -- NAV-HAMBURGER

(function() {

  $('.page-nav__hamburger').on('click', function() {
    $('.page-nav__ul').slideToggle(300, function() {
      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
  
})();

// -- SCROLL PADE TO ID

$(document).ready(function() {
  
  $(".page-nav__item").mPageScroll2id();

});

// -- SELECT LIST
$(document).ready(function() {

  function DropDown(el) {
      this.dd = el;
      this.placeholder = this.dd.children('span');
      this.opts = this.dd.find('ul.drop--1 li');
      this.val = '';
      this.index = -1;
      this.initEvents();
  }

  DropDown.prototype = {
      initEvents: function () {
          var obj = this;
          obj.dd.on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              $(this).toggleClass('active');
          });
          obj.opts.on('click', function () {
              var opt = $(this);
              obj.val = opt.text();
              obj.index = opt.index();
              obj.placeholder.text(obj.val);
              opt.siblings().removeClass('hour-selected');
              opt.filter(':contains("' + obj.val + '")').addClass('hour-selected');
          }).change();
      },
      getValue: function () {
          return this.val;
      },
      getIndex: function () {
          return this.index;
      }
  };

  $(function () {
      // create new variable for each menu
      var dd1 = new DropDown($('#dropdown-hours'));
      // var dd2 = new DropDown($('#other-gases'));
      $(document).click(function () {
          // close menu on document click
          $('.hours').removeClass('active');
      });
  });

});

$(document).ready(function() {

  function DropDown(el) {
      this.dd = el;
      this.placeholder = this.dd.children('input');
      this.opts = this.dd.find('ul.drop--2 li');
      this.val = '';
      this.index = -1;
      this.initEvents();
  }

  DropDown.prototype = {
      initEvents: function () {
          var obj = this;
          obj.dd.on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              $(this).toggleClass('active');
          });
          obj.opts.on('click', function () {
              var opt = $(this);
              obj.val = opt.text();
              obj.index = opt.index();
              obj.placeholder.text(obj.val);
              opt.siblings().removeClass('people-selected');
              opt.filter(':contains("' + obj.val + '")').addClass('people-selected');
          }).change();
      },
      getValue: function () {
          return this.val;
      },
      getIndex: function () {
          return this.index;
      }
  };

  $(function () {
      // create new variable for each menu
      var dd1 = new DropDown($('#dropdown-people'));
      // var dd2 = new DropDown($('#other-gases'));
      $(document).click(function () {
          // close menu on document click
          $('.people').removeClass('active');
      });
  });

});

$(document).ready(function(){
  $('.datepicker-here').datepicker({
    startDate: new Date(),
    autoClose: true
  });
});

  
