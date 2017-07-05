var newPlaylistObject = {};

class PlaylistPopup {
    build() {
        var popup = $('<div>', {
            id: "popup_background",
            click: this.remove.bind(this),
        }).appendTo('body');

        $.get('html/addNewPlaylist.html', function(data) {
            var content = $('<div>', {
                html: data,
            }).appendTo(popup);

            content.find('form').submit(function(event) {
                event.preventDefault();
                newPlaylistObject.name = $(event.target).find('input[name=name]').val();
                newPlaylistObject.photo = $(event.target).find('input[name=url]').val();
                //console.log(newPlaylistObject);
                //addSongs($(event.target));
                var songsPopup = new SongsPopup($(event.target), newPlaylistObject);
                songsPopup.build();
            });

            content.find('button[type=reset]').click(function() {
                //alert("click");
                $('.form-horizontal')[0].reset();
            });
        });
    }

    remove(e) {
        if (e.target.id === "popup_background") {
            e.currentTarget.remove();
        }
    }
}
