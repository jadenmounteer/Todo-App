$(document).ready(function(){
    
    // jQuery methods go here...

    // Make Shia appear 

    // PC
    $(document).mouseenter(function(){
      // Play the video
      document.getElementById("shia-labouf").play();
      // Show the video
      document.getElementById("shia-labouf").style.display = "block";
      //setTimeout(function(){ document.getElementById("shia-labouf").style.display = "block"; }, 3000);
      
      });

    // mobile
    $(document).on("tap", function(){
      // Play the video
      document.getElementById("shia-labouf").play();
      // Show the video
      document.getElementById("shia-labouf").style.display = "block";
      //setTimeout(function(){ document.getElementById("shia-labouf").style.display = "block"; }, 3000);
      
      });

  
      
        
});