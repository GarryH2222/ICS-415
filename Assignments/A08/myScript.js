/**
 * Created by omgitsg on 9/22/15.
 */
jQuery.fn.extend({
  toggleText: function (a, b){
    var isClicked = false;
    var that = this;
    this.click(function (){
      if (isClicked) { that.text(a); isClicked = false; }
      else { that.text(b); isClicked = true; }
    });
    return this;
  }
});

$(document).ready(function(){
  $("#id1").hide();
  $("#id2").hide();
  $("#id3").hide();
  $("#id4").hide();


  $("#q1").toggleText('+ What should you do on this site?', '- What should you do on this site?');
  $("#q2").toggleText('+ What happens if you click on this?', '- What happens if you click on this?');
  $("#q3").toggleText("+ What happens if you don't click on this?", "- What happens if you don't click on this?");
  $("#q4").toggleText("+ Who's awesome?", "- Who's awesome?");



  $("#q1").click(function(){
    $("#id1").toggle();
  });
  $("#q2").click(function(){
    $("#id2").toggle();
  });
  $("#q3").click(function(){
    $("#id3").toggle();
  });
  $("#q4").click(function(){
    $("#id4").toggle();
  });
});