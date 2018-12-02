/* jquerydemo.com */

$(document).ready(function() {

    $("#banner img:gt(0)").hide();
    setInterval(function() {
        var current = $('#banner img:visible');
        var next = current.next().length ? current.next() : $('#banner img:eq(0)');
        current.fadeOut(1000);
        next.fadeIn(1000);
    }, 5000);

})