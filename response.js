$(function() {
   
    var $window = $(window),
        $html = $('.col-md-3');

    $window.resize(function resize(){
        if ($window.width() < 986) {
            return $html.addClass('col-md-4');
        }

        $html.removeClass('col-md-4');
    }).trigger('resize');
})

/* $(function() {
   
    var $window = $(window),
        $html = $('.col-6');

    $window.resize(function resize(){
        if ($window.width() < 320) {
            return $html.addClass('col-9');
        }

        $html.removeClass('col-6');
    }).trigger('resize');
}) */