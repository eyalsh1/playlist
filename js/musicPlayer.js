function buildMusicPlayer(albom_id) {
    $('body').empty();
    buildNavbar();
    buildPlayer(albom_id);
    buildSongs(albom_id);
}

function buildNavbar()
{
    var navbar = $('<nav>', {
        class: "navbar navbar-default navbar-fixed-top",
    }).appendTo('body');

    var container = $('<div>', {
        class: "container",
    }).appendTo(navbar);

    var p = $('<p>').appendTo(container);

    var button_new = $('<button>', {
        type: "button",
        id: "add-new-playlist-button",
        class: "btn btn-info btn-lg",
        click: function () {
            var playlistPopup = new PlaylistPopup();
            playlistPopup.build();
        }
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
        click: loadPreviousPage,
    }).appendTo(span);

    $('<span>', {
        class: "glyphicon glyphicon glyphicon-menu-left",
    }).appendTo(button_back);

    $('<span>', {
        text: "  Back",
    }).appendTo(button_back);
}

function buildPlayer(albom_id) {
    var cover = $('<div>', {
        class: "player-cover",
    }).appendTo('body');

    var outerCircle = $('<div>', {
        class: "player-outer-circle",
    });

    $.get("api/playlist.php?type=playlist&id=" + albom_id, function(response) {
        outerCircle.css("background-image", 'url(' + response.data.image + ')');
        outerCircle.appendTo(cover);
    });

    $('<button>', {
        type: "button",
        class: "btn btn-success btn-circle-xl glyphicon glyphicon-play",
        click: function() {
            if ($(".player-outer-circle").hasClass("rotate")) {
                $(".player-outer-circle").removeClass("rotate");
                $("button[type=button]").removeClass("glyphicon-pause");
                $("button[type=button]").addClass("glyphicon-play");
            } else {
                $(".player-outer-circle").addClass("rotate");
                $("button[type=button]").removeClass("glyphicon-play");
                $("button[type=button]").addClass("glyphicon-pause");

                //var audio = $('audio');
                //console.log(audio);
                //audio[0].play();

                //var s = $("li:first-of-type").trigger('click');
            }
        }
    }).appendTo(outerCircle);

    var audioContainer = $('<div>', {
        class: "player-audio-container",
    }).appendTo(cover);

    $('<audio>', {
        id: "audioPlayer",
        controls : true,
    }).appendTo(audioContainer);

    var rap = $('<div>').appendTo(audioContainer);

    $('<strong>', {
        text: "NOW PLAYING: ",
    }).appendTo(rap);

    $('<button>', {
        type: "button",
        class: "btn btn-default glyphicon glyphicon-remove remove-btn",
        click: function() {
            var deleteAlbomPopup = new DeleteAlbomPopup();
            deleteAlbomPopup.build(albom_id);
        }
    }).appendTo('body');

    $('<button>', {
        type: "button",
        class: "btn btn-default glyphicon glyphicon-pencil edit-btn",
        click: function() {
            var playlistPopup = new PlaylistPopup();
            playlistPopup.build();
        }
    }).appendTo('body');
}

function buildSongs(albom_id)
{
    $.ajax({
        url : "api/playlist.php?&type=songs&id=" + albom_id ,
        method:'GET',
        success: function(response){
            var object = response.data.songs;

            var audioContainer = $(".player-audio-container");
            var filesListContainer = $('<ol>').appendTo(audioContainer);
            $.each(object, function(index, val) {
                var li = $('<li>', {
                    html: $('<button>', {
                        text: val.name,
                        click: playSong,
                        class: "player-song-button",
                    }).attr('data-src', val.url),
                }).appendTo(filesListContainer);
            });
            filesListContainer.appendTo(audioContainer);
        }
    });
}

function playSong(e) {
    var audioContainer = $('.player-audio-container');
    var pressedBtn = e.target;
    audioContainer.find('strong').text('NOW PLAYING: ' + $(pressedBtn).text());
    var audio = $('audio');
    audio
        .attr({src: pressedBtn.dataset.src})
    audio[0].play();
    audio.on('ended', function(e) {
        //console.log(e);
        $(pressedBtn).parent('li').next().find('button').trigger('click');
    });
    $('.player-cover').find(".player-outer-circle").addClass("rotate");
    $('.player-cover').find("button[type=button]").removeClass("glyphicon-play");
    $('.player-cover').find("button[type=button]").addClass("glyphicon-pause");
}

function loadPreviousPage()
{
    $('body').empty();

    var navbar = $('<nav>', {
        class: "navbar navbar-default navbar-fixed-top",
    }).appendTo('body');

    var container = $('<div>', {
        class: "container",
    }).appendTo(navbar);

    var p = $('<p>').appendTo(container);

    var button_new = $('<button>', {
        type: "button",
        id: "add-new-playlist-button",
        class: "btn btn-info btn-lg",
        click: function () {
            var playlistPopup = new PlaylistPopup();
            playlistPopup.build();
        }
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

/*class MusicPlayer {
    build(albom_id) {
        //alert(albom_id);
        $('body').empty();
        this.buildNavbar();
        this.buildPlayer(albom_id);
        this.buildSongs(albom_id);
    }

    buildNavbar()
    {
        var navbar = $('<nav>', {
            class: "navbar navbar-default navbar-fixed-top",
        }).appendTo('body');

        var container = $('<div>', {
            class: "container",
        }).appendTo(navbar);

        var p = $('<p>').appendTo(container);

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

        var rap = $('<div>').appendTo(audioContainer);

        $('<strong>', {
            text: "NOW PLAYING: ",
        }).appendTo(rap);
    }

    buildSongs(albom_id)
    {
        $.ajax({
            url : "api/playlist.php?&type=songs&id=" + albom_id ,
            method:'GET',
            success: function(response){
                var object = response.data.songs;

                var audioContainer = $(".player-audio-container");
                var filesListContainer = $('<ol>').appendTo(audioContainer);
                $.each(object, function(index, val) {
                    var li = $('<li>', {
                        html: $('<button>', {
                            text: val.name,
                            click: playSong,
                            class: "player-song-button",
                        }).attr('data-src', val.url),
                    }).appendTo(filesListContainer);
                });
                filesListContainer.appendTo(audioContainer);
            }
        });
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

        var p = $('<p>').appendTo(container);

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

    playSong(e) {
        alert("");
        console.log(e);
        var audioContainer = $('.player-audio-container');
        var pressedBtn = e.target;
        audioContainer.find('strong').text('NOW PLAYING: ' + $(pressedBtn).text());
        var audio = $('audio');
        audio
            .attr({src: pressedBtn.dataset.src})
        audio[0].play();
        audio.on('ended', function(e) {
            console.log(e);
            $(pressedBtn).parent('li').next().find('button').trigger('click');
        });
        $('.player-cover').find(".player-outer-circle").addClass("rotate");
        $('.player-cover').find("button[type=button]").removeClass("glyphicon-play");
        $('.player-cover').find("button[type=button]").addClass("glyphicon-pause");
    }
}*/
