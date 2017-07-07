$('#add-new-playlist-button').on('click',function() {
    var playlistPopup = new PlaylistPopup();
    playlistPopup.build();
});

/*var musicPlayer = new MusicPlayer();
musicPlayer.loadPreviousPage();*/

$.get("api/playlist.php?type=playlist", function(response) {
    for (i=0; i < response.data.length; i++) {
        addAlbom(response.data[i]);
    }
});

function addAlbom(albom) {
    //console.log("id=" + albom.id + ", name=" + albom.name + ", image=" + albom.image);

    var albomName = $('<div>', {
        class: "albom-name",
        id: albom.id
    }).appendTo("body");

    $('<strong>', {
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
        class: "btn btn-warning btn-circle glyphicon glyphicon-remove",
        click : function(){
            var deleteAlbomPopup = new DeleteAlbomPopup();
            deleteAlbomPopup.build(albom.id);
        }
    }).appendTo(outerCircle);

    $('<button>', {
        type: "button",
        class: "btn btn-info btn-circle glyphicon glyphicon-pencil",
    }).appendTo(outerCircle);

    $('<button>', {
        type: "button",
        class: "btn btn-success btn-circle-xl glyphicon glyphicon-play",
        click : function(){
            //alert(albom.id);
            var musicPlayer = new MusicPlayer();
            musicPlayer.build(albom.id);
        }
    }).appendTo(outerCircle);
}

/*$( ".outer-circle" ).hover(function() {
    //console.log('hover');
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 100 );
});*/

//$('#arc').arctext({radius: 120});

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