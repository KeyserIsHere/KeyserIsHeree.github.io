var model = {
    currentCat: null,
    cats: [
        {
            name: 'Tiger',
            pictureUri: 'img/cat.jpg',
            clickCount: 0
        },
        {
            name: 'Kimmy',
            pictureUri: 'img/cat2.jpg',
            clickCount: 0
        },
        {
            name: 'Logan',
            pictureUri: 'img/cat3.jpg',
            clickCount: 0
        }
    ]
};

var controller = {
    init: function() {
        model.currentCat = model.cats[0];
        catMenu.init();        
        catView.init();
    },
    getCats: function() {
        return model.cats;
    },
    getCurrentCat: function() {
        return model.currentCat;
    },
    handleCatClick: function() {
        model.currentCat.clickCount++;
        catView.update();
    },
    setCurrentCat: function(cat) {
        model.currentCat = cat;
        catView.update();
    }
};

var catView = {
    init: function() {
        this.title = $('#cat-title');
        this.picture = $('#cat-picture');
        this.count = $('#cat-count');

        this.picture.click(() => {
            controller.handleCatClick();
        });
    },
    update: function() {
        const currentCat = controller.getCurrentCat();
        this.title.text(currentCat.name);
        this.picture.attr('src', currentCat.pictureUri);
        this.count.text(currentCat.clickCount);
    }
};

var catMenu = {
    init: function() {
        const catList = controller.getCats();
        let cat = null;
        for (let i = 0, len = catList.length; i < len; i++) {
            cat = $(`<li><a href="#">${catList[i].name}</a></li>`).appendTo($('#menu'));
            cat.click((e) => {
                controller.setCurrentCat(catList[i]);
                e.preventDefault();
            });
        }
    }
};

$(function() {
    controller.init();    
});