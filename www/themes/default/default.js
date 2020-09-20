//menu responsive
$(document).ready(function () {
    $("#navicon span").click(function () {
        $("#header nav").addClass("show");
    });
});
$(document).ready(function () {
    $("#header nav .cross").click(function () {
        $("#header nav").removeClass("show");
    });
});

//clients clicks
$(document).ready(function () {
    $(".pg-clients .clients > div").click(function () {
        var jeTrida = (jQuery(this).hasClass('show'));
        $(".pg-clients .clients > div").removeClass("show");
        if (!jeTrida) {
            $(this).addClass("show");
        }
        else {
            $(this).removeClass("show");
        }
    });
});

//technology clicks
$(document).ready(function () {
    $(".pg-tech .technology > div").click(function () 
    {
        var jeTrida = (jQuery(this).hasClass('show'));
        $(".pg-tech .technology > div").removeClass("show");
        if (!jeTrida) {
            $(this).addClass("show");
        }
        else {
            $(this).removeClass("show");
        }
    });
});   

