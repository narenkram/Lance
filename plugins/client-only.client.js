function countdown_blog() {
    var i = document.getElementById("blog_counter");

    if (parseInt(i.innerHTML) <= 0) {
        location.href = "https://blog.narendra.design";
    }
    if (parseInt(i.innerHTML) != 0) {
        i.innerHTML = parseInt(i.innerHTML) - 1;
    }
}

function countdown_hire_me() {
    var i_hire = document.getElementById("hire_me_counter");
    if (parseInt(i_hire.innerHTML) <= 0) {
        location.href = "https://www.upwork.com/freelancers/~01d7fc59aedbaa665c";
    }
    if (parseInt(i_hire.innerHTML) != 0) {
        i_hire.innerHTML = parseInt(i_hire.innerHTML) - 1;
    }
}

setInterval(function () {
    countdown_blog();
}, 1000);

setInterval(function () {
    countdown_hire_me();
}, 1000);

