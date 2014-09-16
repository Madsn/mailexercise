var toggleMenu = function(id) {
    var collapse = "collapse";
    $(".accounts").toArray().forEach(function(elem) {
        if (elem.id === id) {
            if ($(elem).hasClass(collapse)) {
                $(elem).removeClass(collapse);
            } else {
                $(elem).addClass(collapse);
            }
        } else {
            if (!$(elem).hasClass(collapse)) {
                $(elem).addClass(collapse);
            }
        }
    });
};