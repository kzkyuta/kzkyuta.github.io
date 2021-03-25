$(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
        $('.main-nav , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    })
});