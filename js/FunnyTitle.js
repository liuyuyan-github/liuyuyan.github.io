var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/coderLiuyuyan/CDN@v1.0/0.jpg");
        document.title = '页面不见了┭┮﹏┭┮，回来看看吧';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/coderLiuyuyan/CDN@v1.0/0.jpg");
        document.title = '欢迎回来^_^' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
