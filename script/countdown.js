function to00format(num, len = 2) {
    var res = num;
    while (res.length != len) {
        res = "0" + res;
    }
    return res;
}

const currentYear = new Date().getFullYear();
var countdownDate = new Date(`May 1, ${currentYear + 1}`);
var update = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const msg = `<h3>${to00format(days, 3)} : ${to00format(hours)} : ${to00format(minutes)} : ${to00format(seconds)}</h3>`;

    // console.log(msg);
    document.getElementById("countdown-body").innerHTML = msg;
});