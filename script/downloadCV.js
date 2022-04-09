$(document).ready(function()
{
    if($("#hide")[0].style.display=="flex")
    {
        $("#hide")[0].style.display="none";
        $("body")[0].overflowY="scroll";
        $("#left-arrow").show();
        $("#page2").hide();
    }
    $("#download").on("click",function(){
        $("#hide")[0].style.display="flex";
        $("body")[0].style.overflowY="hidden";
        $("#left-arrow,#right-arrow").hide();
        $("#page1,#page2").show();
        let cv = $("#cv").html();
        let opt = {
            margin:       [0, -0.30,0,-0.30],
            filename:     'cv.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2 ,width:750},
            jsPDF:        { orientation: 'portrait', unit: 'cm'},
            pagebreak: { mode:'css', before: '#page2' }  
          };
        html2pdf().from(cv).set(opt).save();
        html2pdf(cv,opt);
    });
   
});