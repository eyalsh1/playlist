/*class PlaylistPopup {
    build() {
        this.popup = $('<div>', {
            id: "popup",
            click: this.remove.bind(this),
        }).appendTo('body');

        var popupContainer = $('<div>', {
            id: "popup_container",
        }).appendTo(this.popup);

        $("<h3>", {
            text: 'Add New Playlist'
        }).appendTo(popupContainer);
        $("<button>", {
            id: "remove_popup",
            text: "X",
            click: this.remove.bind(this)
        }).appendTo(popupContainer);
    }
    remove(e) {
        if (e.target.id === "popup") {
            $(e.currentTarget).remove();
        } else {
            console.log("clicked on popup_container");
        }
    }
}*/

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
                console.log(newPlaylistObject);
                addSongs($(event.target));
            });

            content.find('button[type=reset]').click(function() {
                //alert("click");
                $('.form-horizontal')[0].reset();
            });
        });
    }
    remove(e) {
        if (e.target.id === "popup_background") {
            $(e.currentTarget).remove();
        }
    }
}