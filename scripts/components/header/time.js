function getTime() {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    const clock = document.getElementById('clock');

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    clock.innerHTML = hours + ':' + minutes;
}

export default getTime;
