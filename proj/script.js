$(function(){
    $("tr.you td.comment div a.comment-remove").each(function(i, elem){
        $(elem)[0].click();
    });
    $('div#comment-list-app div.tw-player-page__comment__list div.tw-comment-item[data-type="owner"] div.tw-comment-popup ul.tw-popup-menu li[role="presentation"] a[role="menuitem"]:contains("削除")').each(function(i, elem){
        $(elem)[0].click();
    });
});
