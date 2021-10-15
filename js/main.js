$(document).ready(function(){
    
    // jQuery methods go here...

    // Make the title type itself in
    /*
    var i = 0;
    var txt = 'Just Do It';
    var speed = 150;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("page-title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
    */

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