function updateCountdown() {
    var now = new Date();
    var midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    var diff = midnight - now;
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown-hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("countdown-minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("countdown-seconds").textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
