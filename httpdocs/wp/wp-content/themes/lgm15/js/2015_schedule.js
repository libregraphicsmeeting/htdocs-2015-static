/**
 * here belong the jquery commands to show/hide the description
 */

jQuery(document).ready(function ($) {

  /*
   * - show a "+/- details" for expand the slots.
   * - update the url#fragment when expanding details sections. (pippin)
   * - open and scroll to the specified one when opening the url contains a ##fragment. (pippin)
   */


  var fragment = document.location.hash
  var target = undefined;

  if (fragment)
    fragment = fragment.substring(1)

	$(".schedule_summary").each(function (){
    var foo = $(this).prev().prev().children(":first")[0].name;

    if (foo == fragment)
    {
      $(this).before("<p class=\"schedule_toggle\"><a href=\"#" + foo + "\">- details </a></p>");
      $(this).show();
      target = $(this).parent()[0];
    }
    else
    {
      $(this).before("<p class=\"schedule_toggle\"><a href=\"#" + foo + "\">+ details </a></p>");
      $(this).hide();
    }
  })

	$('.schedule_toggle a').click(function(e){
      e.preventDefault();
      if ($(this).parent().next().is(":visible")) {
          $(this).text("+ details");
      } else {
          $(this).html("&ndash; details");
      }
		  $(this).parent().next().toggle();
      document.location.hash = "##" + ($(this)[0].href).replace(/.*#/, '');
		  e.preventDefault();
    });
  if (target)
  {
    setTimeout(function(){target.scrollIntoView();}, 500)
  }
})
