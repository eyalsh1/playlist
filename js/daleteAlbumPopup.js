class DeleteAlbomPopup {
    build(albom_id) {
        var popup = $('<div>', {
            id: "popup_background",
            click: this.remove.bind(this),
        }).appendTo('body');

        $.get('html/confirm.html', function(data) {
            var content = $('<div>', {
                html: data,
            }).appendTo(popup);

            $('.btn-danger').click(function() {
                $.ajax({
                    url: 'api/playlist.php?type=playlist&id=' + albom_id,
                    type: 'DELETE',
                    success: function (data) {
                        console.log(data.success);
                        if (data.success === true) {
                            $('body').find("#"+albom_id).remove();
                            $("#popup_background").remove();
                        }
                    }
                });
                //$('body').find("#"+albom_id).remove();
                //$("#popup_background").remove();
            });

            $('.btn-success').click(function(e) {
                $("#popup_background").remove();
            });
        });
    }

    remove(e) {
        if (e.target.id === "popup_background") {
            e.currentTarget.remove();
        }
    }
}
