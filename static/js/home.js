
$(document).ready(function() {

    /*
        Waypoints
    */
    var wp_projects = new Waypoint({
        element: document.getElementById('projects_cont'),
        handler: function(direction) {
            $("#projects_cont").addClass("animated bounceIn");
            $("#projects_cont").css("opacity", "1");
            this.destroy();
        },
        offset: '90%'
    });

    var wp_skillsRow1 = new Waypoint({
        element: document.getElementById('skillsRow1'),
        handler: function(direction) {
            $("#skillsRow1").addClass("animated slideInDown");
            $("#skillsRow1").css("opacity", "1");
            this.destroy();
        },
        offset: '95%'
    });

    var wp_skillsRow2 = new Waypoint({
        element: document.getElementById('skillsRow2'),
        handler: function(direction) {
            $("#skillsRow2").addClass("animated slideInUp");
            $("#skillsRow2").css("opacity", "1");
            this.destroy();
        },
        offset: '95%'
    });

});
