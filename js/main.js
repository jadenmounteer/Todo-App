$(document).ready(function(){
    
    // jQuery methods go here...
    
    $(document).mouseenter(function(){
      // Play the video
      document.getElementById("shia-labouf").play();
      // Show the video
      setTimeout(function(){ document.getElementById("shia-labouf").style.display = "block"; }, 3000);
      
      });
        
});