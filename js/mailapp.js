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

$(function(){
    $("table").resizableColumns({
        store: window.store
    });
});

$(function(){
   $(".emailrow").toArray().forEach(function(row) {
      $(row).click(function(){
          console.log("open email preview");
      });
      $(row).dblclick(function(){
         console.log("open email in new window");
      });
   });
});
