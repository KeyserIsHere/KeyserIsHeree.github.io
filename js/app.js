function hideElement(selector) {
    selector.css('display', 'none');
}

function showElement(selector) {
    selector.css('display', '');
}

function createCat(name, picture) {
    let clickCount = 0;

    const $cat = $('<div />', {class: 'cat'});
    const $img = $('<img />', {src: picture}).appendTo($cat);
    const $counter = $('<p />').appendTo($cat);
    const $menuItem = $(`<li><a href="#">${name}</a></li>`).appendTo($('#menu'));

    $img.click(() => {
        clickCount++;
		
        $counter
            .text(`You clicked ${name} ${clickCount} times!`)
            .css('font-size', '+=0.25');
    });

    $menuItem.click((e) => {
        hideElement($('.cat'));

        e.preventDefault();
        showElement($cat);
    });

    return $cat;
}

$(function() {
    const $main = $('#cats');

    $main.append(createCat('Kimmy', 'img/cat.jpg'));
    $main.append(createCat('Logan', 'img/cat2.jpg'));
    $main.append(createCat('Bella & Tigger', 'img/cat3.jpg'));
    $main.append(createCat('Luna', 'img/cat4.jpg'));

    hideElement($('.cat'));
});
