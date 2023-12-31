document.addEventListener('DOMContentLoaded', function () {
    var targetDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

    function updateCountdown() {
        var currentDate = new Date();
        var timeDifference = targetDate - currentDate;

        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        var countdownLabel = document.getElementById('countdown-label');
        var countdownElement = document.getElementById('countdown');

        if (days > 30) {
            countdownLabel.textContent = 'Countdown to New Year';
            countdownElement.innerHTML =
                Math.floor(days / 30) + ' months ' + (days % 30) + ' days';
        } else if (timeDifference > 0) {
            countdownLabel.textContent = 'Countdown to New Year';
            countdownElement.innerHTML =
                days + ' days ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
        } else {
            countdownLabel.textContent = 'Happy New Year!';
            countdownElement.innerHTML = '';
        }
    }

    setInterval(updateCountdown, 1000);
});
