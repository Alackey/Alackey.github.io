
$(document).ready(function() {

    /*
        Waypoints
    */
    var wp_projects = new Waypoint({
        element: document.getElementById('projects'),
        handler: function(direction) {
            $(".project").hide().fadeIn(2000);
            this.destroy();
        },
        offset: 'bottom-in-view'
    });

    var wp_skillsRow1 = new Waypoint({
        element: document.getElementById('skillsRow1'),
        handler: function(direction) {
            $("#skillsRow1").addClass("animated slideInDown");
            $("#skillsRow1").css("opacity", "1");
            this.destroy();
        },
        offset: 'bottom-in-view'
    });

    var wp_skillsRow1 = new Waypoint({
        element: document.getElementById('skillsRow2'),
        handler: function(direction) {
            $("#skillsRow2").addClass("animated slideInUp");
            $("#skillsRow2").css("opacity", "1");
            this.destroy();
        },
        offset: 'bottom-in-view'
    });

});
