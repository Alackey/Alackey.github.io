
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

});
