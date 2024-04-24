const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')
const stopwatch = document.getElementById('stopwatch')


let counter = null
let miliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0

function timeFormat(num) {
    if (num < 10) {
        return '0' + num
    }
    return num
}

const start = function() {
    counter = setInterval(function () {
      miliseconds += 10
      if (miliseconds === 1000) {
        miliseconds = 0
        seconds++
      }
      if (seconds === 60) {
        seconds = 0
        minutes++
      }
      if (minutes === 60) {
        minutes = 0
        hours++
      }
      document.getElementById('stopwatch').innerHTML = `${timeFormat(hours)}:${timeFormat(minutes)}:${timeFormat(seconds)}:${timeFormat(miliseconds)}`
    }, 10)
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
  }

function stop() {
    clearInterval(counter)
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function reset() {
    stop()
    counter = null
    miliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    stopwatch.innerHTML = '00:00:00:00'
    startButton.disabled = false;
    stopButton.disabled = false;
    resetButton.disabled = true;
}