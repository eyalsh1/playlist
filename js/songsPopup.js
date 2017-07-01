class SongsPopup {
    constructor(form, newPlaylistObject) {
        this.form = form;
        this.newPlaylistObject = newPlaylistObject;
    }

    build() {
        var content = this.form.parent();
        this.form.remove();
        console.log(content);
        //console.log(this.newPlaylistObject);
        $(".panel-heading").text("Add Playlist Songs");

        /*$.get('html/addAnotherSong.html', function(data) {
            content.html(data);
        });*/

        $.get('html/addPlayListSongs.html', function(data) {
            content.html(data);
        });

        //$("<span>Hello world!</span>").insertAfter(content.find('form fieldset:last-of-type'));

        /*$.get('html/addAnotherSong.html', function(data) {
            $(html(data)).insertAfter("button");
        });
        $.get('html/addAnotherSong.html', function(data) {
            var content = $('<div>', {
                html: data,
            }).appendTo(content);
        });*/
    }
}