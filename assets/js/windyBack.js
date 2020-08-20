setInterval(function (){
    if (Boolean(Math.round(Math.random()))) {
        if ($("#windy-main").hasClass("slow-wind")) {
            $("#windy-main").removeClass("slow-wind");
        } else {
            $("#windy-main").addClass("slow-wind");
        }
    }
}, 3000);