var newPlaylistObject = {};

class PlaylistPopup {
    build(albom_id=0) {
        var popup = $('<div>', {
            id: "popup_background",
            click: this.remove.bind(this),
        }).appendTo('body');

        $.get('html/addNewPlaylist.html', function(data) {
            var content = $('<div>', {
                html: data,
            }).appendTo(popup);

            if (albom_id > 0) { // edit playlist
                $("strong").text("Edit Playlist");
                newPlaylistObject.id = albom_id;
                $.get("api/playlist.php?type=playlist&id=" + albom_id, function(response) {
                    $("input[type=text]").val(response.data.name);
                    $("input[type=url]").val(response.data.image);
                });
            }
            else { // new playlist
                $("strong").text("Add New Playlist");
            }

            content.find('form').submit(function(event) {
                event.preventDefault();
                newPlaylistObject.name = $(event.target).find('input[name=name]').val();
                newPlaylistObject.photo = $(event.target).find('input[name=url]').val();

                $.post("api/playlist.php?type=playlist&id=" + newPlaylistObject.id, {
                    name: newPlaylistObject.name,
                    image: newPlaylistObject.photo,
                }, function (data, textStatus, xhr) {
                    console.log("id=" + data.id + ", status=" + textStatus + ", statusId=" + xhr.status);
                    return (xhr.status);
                });

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

    remove(event) {
        if (event.target.id === "popup_background") {
            event.currentTarget.remove();
        }
    }
}
