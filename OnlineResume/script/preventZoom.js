let width = window.innerWidth;
$(window).resize(function() {
    let currentWidth = window.innerWidth;
    if(width>currentWidth)
    {
        let elemWidth = $("*").css("width"); 
        $("*").css("width",elemWidth-160+"px");
    }
   
  /*
    TODO :
    MAKE THIS MDFCKER WORK
  */
 });