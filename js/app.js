class Cat {
    constructor(name, picture) {
        let self = this;

        self.name = name;
        self.picture = picture;
        self.count = 0;

        let mainDiv = $('#cats');
        let catDiv = $('<div></div>');

        mainDiv.append(catDiv);

        self.img = $(`<img src="${self.picture}">`);
        catDiv.append(self.img);

        self.counter = $('<p></p>');
        catDiv.append(self.counter);

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
});
