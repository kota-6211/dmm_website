$('a[href^=#]').click(function() {
  event.preventDefault();

  let target = $(this.hash);
  if(!target.length) return;

  let targetY = target.offset().top;

  $('body').animate({scrollTop: targetY}, 500, 'swing');
});