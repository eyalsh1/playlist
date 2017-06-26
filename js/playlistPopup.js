class PlaylistPopup {
    constructor (text) {
        this.text = text;
    }
    build() {
        this.popup = $('<div>', {
            id: "popup",
            click: this.remove.bind(this),
        }).appendTo('body');

        var popupContainer = $('<div>', {
            id: "popup_container",
        }).appendTo(this.popup);

        $("<h3>", {text: this.text}).appendTo(popupContainer);
        $("<button>", {
            id: "remove_popup",
            text: "X",
            click: this.remove.bind(this)}).appendTo(popupContainer);
    }
    remove(e) {
        if (e.target.id === "popup") {
            $(e.currentTarget).remove();
        } else {
            console.log("clicked on popup_container");
        }
    }
}