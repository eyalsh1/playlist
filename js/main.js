buildHader();
addAlboms();

function buildHader() {
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
        keyup: function () {
            addAlboms($(this).val());
        },
        name: "q",
    }).appendTo(span);
}

function addAlboms(name="") {
    $(".albom-name").remove();
    $.get("api/playlist.php?type=playlist", function (response) {
        for (i = 0; i < response.data.length; i++) {
            if (name === "" || response.data[i].name.toUpperCase().startsWith(name.toUpperCase()))
                addAlbom(response.data[i]);
        }
    });
}

function addAlbom(albom) {
    //console.log("id=" + albom.id + ", name=" + albom.name + ", image=" + albom.image);

    var albomName = $('<div>', {
        class: "albom-name",
        id: albom.id
    }).appendTo("body");

    $('<h3>', {
        class: "albom-title",
        text: albom.name,
    }).appendTo(albomName);

    var outerCircle = $('<div>', {
        class: "outer-circle",
        //'album-id': albom.id
    });
    outerCircle.css('background-image', 'url(' + albom.image + ')');
    outerCircle.appendTo(albomName);

    $('<button>', {
        type: "button",
        class: "btn btn-warning btn-circle glyphicon glyphicon-remove main-remove",
        click: function(){
            var deleteAlbomPopup = new DeleteAlbomPopup();
            deleteAlbomPopup.build(albom.id);
        }
    }).appendTo(outerCircle);

    $('<button>', {
        type: "button",
        class: "btn btn-info btn-circle glyphicon glyphicon-pencil main-pencil",
        click: function(){
            var playlistPopup = new PlaylistPopup();
            playlistPopup.build(albom.id);
        }
    }).appendTo(outerCircle);

    $('<button>', {
        type: "button",
        class: "btn btn-success btn-circle-xl glyphicon glyphicon-play main-play",
        click: function(){
            //alert(albom.id);
            buildMusicPlayer(albom.id);
            //var musicPlayer = new MusicPlayer();
            //musicPlayer.build(albom.id);
        }
    }).appendTo(outerCircle);

    //$('albom-title').circleType({radius: 200});
}

/*$(document).ready(function() {
    $('albom-name.albom-title').circleType({radius: 200}); // Eyal - fix
});*/

/*$( ".outer-circle" ).hover(function() {
    //console.log('hover');
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 100 );
});*/

// $.ajax({
//     url: "api/playlist.php?type=playlist&id=1",
//     type: "DELETE",
//     success: function (data) {
//         console.log(data);
//     }
// });

// $.post("api/playlist.php?type=playlist", {
//     name: "Hayehudim",
//     image: "http://media.shironet.mako.co.il/media/performers/heb/0/341/profile/341_t152.jpg",
//     songs: [
//         {
//             name: "Ezlech Baolam",
//             url: "music/Hayehudim/Ezlech Baolam.mp3",
//         },
//         {
//             name: "Hazman Shelach",
//             url: "music/Hayehudim/Hazman Shelach.mp3",
//         },
//         {
//             name: "Lo Kal",
//             url: "music/Hayehudim/Lo Kal.mp3",
//         },
//     ]
// }, function (data, textStatus, xhr) {
//     console.log(data);
//     console.log(textStatus);
//     console.log(xhr.status);
// });

// $.post("api/playlist.php?type=playlist", {
//     name: "Amir Dadon",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsIz2hqn1AQVLJLY0EJCVfn_mXmqF1Ta6Ai93R-K3JcMcEtZj3Tqzc1Si",
//     songs: [
//         {
//             name: "Or Gadol",
//             url: "music/Amir Dadon/Or Gadol.mp3",
//         },
//     ]
// }, function (data, textStatus, xhr) {
//     console.log(data);
//     console.log(textStatus);
//     console.log(xhr.status);
// });