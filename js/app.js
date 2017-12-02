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
    catView.update();
  },
  getCats: function() {
    return model.cats;
  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  setCurrentCat: function(cat) {
    model.currentCat = cat;
    catView.update();
  },
  handleCatClick: function() {
    model.currentCat.clickCount++;
    catView.update();
  },
  updateCurrentCat: function(newCat) {
    var index = model.cats.indexOf(model.currentCat);
    console.log(model.currentCat);
    console.log(newCat);
    model.cats[index] = newCat;
    model.currentCat = newCat;

    catView.update();
    catMenu.clear();
    catMenu.init();
  }
};

var catView = {
  init: function() {
    this.title = $('#cat-title');
    this.picture = $('#cat-picture');
    this.count = $('#cat-count');
    this.form = $('#cat-super');

        this.form.hide();    // the admin form is hidden by default

        this.picture.click(() => {
          controller.handleCatClick();
        });

        const enableSuperButton = $('#super-enable');

        enableSuperButton.click(() => {
          var superName = $('#super-name');
          var superPicture = $('#super-picture');
          var superCount = $('#super-count');
          var selectedCat = controller.getCurrentCat();

          superName.val(selectedCat.name);
          superPicture.val(selectedCat.pictureUri);
          superCount.val(selectedCat.clickCount);

          enableSuperButton.hide();
          this.form.show();
        });

        $('#super-cancel').click(() => {
          this.form.hide();
          enableSuperButton.show();
        });

        this.form.submit((e) => {
          e.preventDefault();

          var result = { };
          $.each($('form').serializeArray(), function() {
            result[this.name] = this.value;
          });

          controller.updateCurrentCat(result);

            $('#super-cancel').trigger('click');    // hides form
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
      },
      clear: function() {
        $('ul').empty();
      }
    };

    $(function() {
      controller.init();
    });