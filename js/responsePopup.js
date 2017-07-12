class ResponsePopup {
    build(response) {
        var popup = $('<div>', {
            id: "popup_background",
            click: this.remove.bind(this),
        }).appendTo('body');

        var container = $('<div>', {
            class: "container",
        }).appendTo(popup);
        container.css("width", "70%");

        var jumbo = $('<div>', {
            class: "jumbotron",
        }).appendTo(container);

        var txt = $('<h1>', {
            class: "text-center",
            text: response,
        }).appendTo(jumbo);
        txt.css("color", "red");
    }

    remove(event) {
        if (event.target.id === "popup_background") {
            event.currentTarget.remove();
        }
    }
}
