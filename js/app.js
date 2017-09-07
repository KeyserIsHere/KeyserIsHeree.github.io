class Cat {
    constructor(name, picture) {
        let self = this;

        self.name = name;
        self.picture = picture;
        self.count = 0;

        self.menuItem = $(`<li><a href="#">${self.name}</a></li>`);
        $("ul").append(self.menuItem);

        let mainDiv = $('#cats');
        let catDiv = $('<div class="cat"></div>');
        catDiv.css("display", "none");

        self.img = $(`<img src="${self.picture}">`);
        self.counter = $('<p></p>');

        catDiv.append(self.img);
        catDiv.append(self.counter);

        self.menuItem.click(function(e) {
            e.preventDefault();

            // hide all others
            $(".cat").css("display", "none");

            // display the selected
            catDiv.css("display", "");
            mainDiv.append(catDiv);
        });

        self.img.click(function () {
            self.count++;
            self.counter.text(`You clicked ${self.name} ${self.count} times.`);
            self.counter.css("font-size", "+=0.5");
        });
    }
}

$(document).ready(function () {
    new Cat('Kimmy', 'img/cat.jpg');
    new Cat('Logan', 'img/cat2.jpg');
    new Cat('Bella & Tigger', 'img/cat3.jpg');
    new Cat('Luna', 'img/cat4.jpg');
});
