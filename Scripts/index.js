$(document).ready(function(e) {
    
    var bookName='';
    var fullName='';
    var publication='';
    $('#right').click(function( e ){
            e.preventDefault();
            var slideW = $('#slider-container').width();
            $('#slider-container').animate({scrollLeft:"+="+slideW}, 600);
            if($('#slider-container').next()==0){
                $('#slider-container').first().animate({scrollLeft:"-="+slideW}, 600);
            }  
    });

    $('#left').click(function( e ){
        e.preventDefault();
        var slideW = $('#slider-container').width();
        $('#slider-container').animate({scrollLeft:"-="+slideW}, 600);
        if($('#slider-container').next()==0){
            $('#slider-container').first().animate({scrollLeft:"+="+slideW}, 600);
        }
    });

    $('#art-click').click(function( e ){
        e.preventDefault();
        if($('#art-click').hasClass('active')==false){
            $('#art-click').addClass('active');
            $('#business-click').removeClass('active');
            $('#computer-click').removeClass('active');

            $('#art').removeClass('hidden');
            $('#business').addClass('hidden');
            $('#computers').addClass('hidden');
        }
    });
    $('#business-click').click(function( e ){
        e.preventDefault();
        if($('#business-click').hasClass('active')==false){
            $('#business-click').addClass('active');
            $('#art-click').removeClass('active');
            $('#computer-click').removeClass('active');

            $('#business').removeClass('hidden');
            $('#art').addClass('hidden');
            $('#computers').addClass('hidden');
        }
    });
    $('#computer-click').click(function( e ){
        e.preventDefault();
        if($('#computer-click').hasClass('active')==false){
            $('#computer-click').addClass('active');
            $('#business-click').removeClass('active');
            $('#art-click').removeClass('active');

            $('#computers').removeClass('hidden');
            $('#business').addClass('hidden');
            $('#art').addClass('hidden');
        }
    });

    $("#book-button").click(function(){
        bookName = $("#bookName").val();
        search();
    });
    $("#author-button").click(function(){
        fullName = $("#bookName").val();
        search();
    });
    $("#pub-button").click(function(){
        publication = $("#bookName").val();
        search();
    });

    var lastScrollTop = 0;
    var header = $('header');

    $(window).scroll(function(){
        var st = $(this).scrollTop();
            if (st > lastScrollTop){
                header.addClass('hide');
            } else {
                header.removeClass('hide');
            }
        lastScrollTop = st;
            
    });
});

function search(){
    alert("searching...");
};