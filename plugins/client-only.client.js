function countdown_blog() {
    var i = document.getElementById("blog_counter");

    if (parseInt(i.innerHTML) <= 0) {
        location.href = "https://narendra.design";
    }
    if (parseInt(i.innerHTML) != 0) {
        i.innerHTML = parseInt(i.innerHTML) - 1;
    }
}


setInterval(function () {
    countdown_blog();
}, 1000);

