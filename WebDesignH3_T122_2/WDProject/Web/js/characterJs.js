let i = 0;
$(document).ready(function(){
    
    $(".next").click(function(){
        i++;
        $(".pict").animate({right: `${i*40}vw`});
    })

    $(".prev").click(function(){
        i--;
        $(".pict").animate({right: `${i*40}vw`});
    })

});