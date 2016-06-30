/*globals $, alert*/
(function () {
    "use strict";
    var showMore = $('.showMore'),
        showLess = $('.showLess');
    

    showMore.click(function (e) {
        e.preventDefault();
        //var hiddenP = this.parentNode.nextElementSibling;
        //$('#' + hiddenP.id).slideToggle(400);
        this.style.display = "none";
        $(this).parent().next('p').slideDown(400);
    });
    showLess.click(function (e) {
        e.preventDefault();
        $(this).parent().slideUp(400);
        $(this).parent().prev('p').children().show();
    });
}());