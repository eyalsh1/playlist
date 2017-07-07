class MusicPlayer {
    build(albom_id) {
        //alert(albom_id);
        $('body').empty();
        this.buildNavbar();
        this.buildPlayer(albom_id);
    }

    buildNavbar()
    {
        var navbar = $('<nav>', {
            class: "navbar navbar-default navbar-fixed-top",
        }).appendTo('body');

        var container = $('<div>', {
            class: "container",
        }).appendTo(navbar);

        var p = $('<p>', {
        }).appendTo(container);

        var button_new = $('<button>', {
            type: "button",
            id: "add-new-playlist-button",
            class: "btn btn-info btn-lg",
            click: this.popup
        }).appendTo(p);

        $('<span>', {
            class: "glyphicon glyphicon-plus-sign",
        }).appendTo(button_new);

        $('<span>', {
            text: "  Add new playlist",
        }).appendTo(button_new);

        var span = $('<span>', {
            class: "pull-right",
        }).appendTo(p);

        var button_back = $('<button>', {
            type: "button",
            id: "back-button",
            class: "btn btn-info btn-lg",
            click: this.loadPreviousPage
        }).appendTo(span);

        $('<span>', {
            class: "glyphicon glyphicon glyphicon-menu-left",
        }).appendTo(button_back);

        $('<span>', {
            text: "  Back",
        }).appendTo(button_back);
    }

    buildPlayer(albom_id) {
        var cover = $('<div>', {
            class: "player-cover",
        }).appendTo('body');

        var outerCircle = $('<div>', {
            class: "player-outer-circle",
        });

        $.get("api/playlist.php?type=playlist&id=" + albom_id, function(response) {
            //console.log(response);
            outerCircle.css("background-image", 'url(' + response.data.image + ')');
            outerCircle.appendTo(cover);
        });

        $('<button>', {
            type: "button",
            class: "btn btn-success player-btn-circle-xl glyphicon glyphicon-play",
        }).appendTo(outerCircle);

        var audioContainer = $('<div>', {
            class: "player-audio-container",
        }).appendTo(cover);

        $('<audio>', {
            id: "audioPlayer",
            controls : true,
        }).appendTo(audioContainer);

        var rap = $('<div>', {
        }).appendTo(audioContainer);

        $('<strong>', {
            text: "NOW PLAYING: ",
        }).appendTo(rap);
    }

    loadPreviousPage()
    {
        $('body').empty();

        var navbar = $('<nav>', {
            class: "navbar navbar-default navbar-fixed-top",
        }).appendTo('body');

        var container = $('<div>', {
            class: "container",
        }).appendTo(navbar);

        var p = $('<p>', {
        }).appendTo(container);

        var button_new = $('<button>', {
            type: "button",
            id: "add-new-playlist-button",
            class: "btn btn-info btn-lg",
            click: this.popup
        }).appendTo(p);

        $('<span>', {
            class: "glyphicon glyphicon-plus-sign",
        }).appendTo(button_new);

        $('<span>', {
            text: "  Add new playlist",
        }).appendTo(button_new);

        var span = $('<span>', {
            class: "pull-right",
        }).appendTo(p);

        $('<input>', {
            type: "text",
            class: "form-control",
            placeholder: "Search playlists",
            name: "q",
        }).appendTo(span);
    }

    popup() {
        var playlistPopup = new PlaylistPopup();
        playlistPopup.build();
    }
}
