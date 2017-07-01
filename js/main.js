$('#add-new-playlist-button').on('click',function() {
    var playlistPopup = new PlaylistPopup();
    playlistPopup.build();
});

/*$( ".outer-circle" ).hover(function() {
    //console.log('hover');
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
});*/

$(".outer-circle").hover(function() {
    //console.log('hover');
    //$(".outer-circle .btn").removeClass('hidden');
    $(".outer-circle .btn").toggleClass('hidden');
    //$( this ).toggleClass('hidden');
    console.log(this);
});

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