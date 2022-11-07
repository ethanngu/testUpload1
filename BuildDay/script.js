$(function(){
  $(".increment").click(function(){
    var count = parseInt($("~ .count", this).text());
    
    if($(this).hasClass("up")) {
      var count = count + 1;
      
       $("~ .count", this).text(count);
    } else {
      var count = count - 1;
       $("~ .count", this).text(count);     
    }
    
    $(this).parent().addClass("bump");
    
    setTimeout(function(){
      $(this).parent().removeClass("bump");    
    }, 400);
  });
});

// Upvote_downvote

function increment() {
  score_element = document.getElementById("vote");
  score_element.innerHTML = parseInt(score_element.innerHTML) + 1;
}

function decrement() {
  score_element = document.getElementById("vote");
  score_element.innerHTML = parseInt(score_element.innerHTML) - 1;
}


  


