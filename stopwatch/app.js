let timer;
let time = 0;
let running = false;

function updateTime() {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    document.querySelector('.stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            time++;
            updateTime();
    }, 1000);
    }
}

function pause() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
    time = 0;
    updateTime();
}