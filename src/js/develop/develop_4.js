function firstClick(){
    $('.question-button .yes,.question-button .no').click(function(e) {
        e.preventDefault();
        $('.item.active').fadeOut('400', function() {
            $('.item-1').removeClass('active');
            $('.item-2').fadeIn('400', function() {
                persentage();
            });
        });
    });
}

function persentage(){
    var start = 0;
    var finish = 100;

    var timer = setInterval(function(){
        $('#parcents').text(start);
        start = start + 5;
        if( start > finish ){
            clearInterval(timer);
            $('#parcents').text(finish);
            lastFunc();
        }
    },50);
}
function lastFunc(){
    setTimeout(function(){
        $('.item-2').removeClass('active');
        $('.item-2').fadeOut('400', function() {
            $('.item-3').fadeIn('400');
        });
    },600);

}


$(document).ready(function(){
    firstClick();
});

$(window).load(function(){

});

