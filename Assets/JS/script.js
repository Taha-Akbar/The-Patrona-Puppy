$(document).ready(function () {
    $('#all').click(function(){
        $('#united').toggle();
        $('#italy').toggle();
        $('#germany').toggle();
        $('#canada').toggle();
    })
    $('#button1').click(function () {
        $('#united').toggle();
        $('#italy').hide();
        $('#germany').hide();
        $('#canada').hide();

    })
    $('#button2').click(function () {
        $('#united').hide();
        $('#italy').toggle();
        $('#germany').hide();
        $('#canada').hide();

    })
    $('#button3').click(function () {
        $('#united').hide();
        $('#italy').hide();
        $('#germany').toggle();
        $('#canada').hide();

    })
    $('#button4').click(function () {
        $('#united').hide();
        $('#italy').hide();
        $('#germany').hide();
        $('#canada').toggle();

    })

})
$(document).ready(function () {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    $('.navbar-nav .nav-link[href="' + filename + '"]').addClass('active');
});