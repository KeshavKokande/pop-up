$(document).ready(function(){
    var check = false;
    $('.clicks').on('click',function(){
        if(check==false){
            $('#box').addClass('show');
            check = true;
        }
        else{
            check = false;
            $('#box').removeClass('show');
        }
    })
    $('.submission').on('click',function(){
        $('#box').removeClass('show');
    })

    $('.closeBtn').on('click',function(){
        $('#box').removeClass('show');
    })
});