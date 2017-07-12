class SongsPopup {
    constructor(form, newPlaylistObject) {
        this.form = form;
        this.newPlaylistObject = newPlaylistObject;
    }

    build() {
        var content = this.form.parent();
        this.form.remove();

        $.get('html/addPlayListSongs.html', function(data) {
            content.html(data);

            if (newPlaylistObject.id > 0) { // Edit
                $("strong").text("Edit Playlist Songs");

                $.ajax({
                    url : "api/playlist.php?&type=songs&id=" + newPlaylistObject.id ,
                    method:'GET',
                    success: function(response){
                        var object = response.data.songs;
                        $.each(object, function(index, val) {
                            addSong(val.name, val.url).insertBefore(content.find('.form-buttons'));
                        });
                    }
                });
            }
            else { // Add
                $("strong").text("Add Playlist Songs");
                addSong().insertBefore(content.find('.form-buttons'));
            }

            $('#add-another-song-button').click(function(event) {
                /*if (content.find('fieldset').length > 0)
                    addSong().insertAfter(content.find('fieldset:last-of-type'));
                else*/
                    addSong().insertBefore(content.find('.form-buttons'));
            });

            content.find('#remove_icon').click(function(event) {
                //console.log(this);
                $(event.target).closest("fieldset").remove();
            });

            content.find('form').submit(function(event) {
                event.preventDefault();
                newPlaylistObject.songs = [];
                $(event.target).find('fieldset').each(function(index, el) {
                    var song = {};
                    song.url = $(el).find('input[name=url]').val();
                    song.name = $(el).find('input[name=name]').val();
                    newPlaylistObject.songs.push(song);
                });

                if (newPlaylistObject.id > 0) { // Edit
                    var response = editAlbomInDB(newPlaylistObject);
                    console.log("response=", response);
                    if (response != 200) {
                        var responsePopup = new ResponsePopup();
                        responsePopup.build("Failed updating DB!");
                        //alert("Failed updating DB!");
                    }
                    else
                        addAlboms();
                }
                else { // Add
                    addAlbomToDB(newPlaylistObject);
                    addAlbom(newPlaylistObject); // to html
                }

                $("#popup_background").remove();
                //addAlbom(newPlaylistObject); // to html
                /*if (addAlbomToDB() === 200) {
                    alert("New Albom was adfded to server...");
                    $("#popup_background").remove();
                }newPlaylistObject
                else {
                    alert("Faild to add albom to server, please try again...");
                }*/
            });
        });
    }
}

function addSong(name="", url="") {
    var fieldset = $('<fieldset>');

    var formGroupDiv = $('<div>', {
        class: "form-group",
    }).appendTo(fieldset);

    $('<label>', {
        class: "col-sm-2 control-label",
        text: "Song URL",
    }).appendTo(formGroupDiv);

    var colDiv1 = $('<div>', {
        class: "col-sm-5",
    }).appendTo(formGroupDiv);

    $('<input>', {
        type: "text", //type: "url",
        class: "form-control",
        name: "url",
        val: url,
    }).appendTo(colDiv1);

    $('<label>', {
        class: "col-sm-1 control-label",
        text: "Name",
    }).appendTo(formGroupDiv);

    var colDiv2 = $('<div>', {
        class: "col-sm-3",
    }).appendTo(formGroupDiv);

    $('<input>', {
        type: "text",
        class: "form-control",
        name: "name",
        val: name,
    }).appendTo(colDiv2);

    var colDiv3 = $('<div>', {
        class: "col-sm-1",
    }).appendTo(formGroupDiv);

    var btn = $('<button>', {
        type: "button",
        id: "remove_icon",
        class: "btn btn-default",
        click: function (event) {
            $(event.target).closest("fieldset").remove();
        }
    }).appendTo(colDiv3);

    var btn = $('<span>', {
        class: "glyphicon glyphicon-remove"
    }).appendTo(btn);

    return fieldset;
}

function addAlbomToDB(newPlaylistObject) {
    //console.log(newPlaylistObject);
    $.post("api/playlist.php?type=playlist", {
        name: newPlaylistObject.name,
        image: newPlaylistObject.photo,
        songs: newPlaylistObject.songs,
    }, function (data, textStatus, xhr) {
        console.log("id=" + data.id + ", status=" + textStatus + ", statusId=" + xhr.status);
        return (xhr.status);
    });
}

function editAlbomInDB(newPlaylistObject) {
    //console.log(newPlaylistObject);
    $.post("api/playlist.php?type=songs&id=" + newPlaylistObject.id, {
        songs: newPlaylistObject.songs,
    }, function (data, textStatus, xhr) {
        console.log("id=" + newPlaylistObject.id + ", status=" + textStatus + ", statusId=" + xhr.status);
        return (xhr.status);
    });
}