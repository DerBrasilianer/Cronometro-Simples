let hh = 0
let mm = 0
let ss = 0
let ms = 0
let stopwatch

function timeFormat(num) {
  if (num < 10) {
    return '0' + num
  }
  return num
}

function start() {
  stopwatch = setInterval(() => {
    ms++
    if (ms == 100) {
      ms = 0
      ss++
    }
    if (ss == 60) {
      ss = 0
      mm++
    }
    if (mm == 60) {
      mm = 0
      hh++
    }
    document.getElementById('stopwatch').innerHTML = `${timeFormat(hh)}:${timeFormat(mm)}:${timeFormat(ss)}:${timeFormat(ms)}`
  }, 10)
  document.getElementById('start').setAttribute('disabled', true)
  document.getElementById('stop').removeAttribute('disabled')
}

function stop() {
  clearInterval(stopwatch)
  document.getElementById('start').removeAttribute('disabled')
  document.getElementById('stop').setAttribute('disabled', true)
}

function reset() {
  clearInterval(stopwatch)
  hh = 0
  mm = 0
  ss = 0
  document.getElementById('stopwatch').innerHTML = '00:00:00:00'
  document.getElementById('start').removeAttribute('disabled')
  document.getElementById('stop').setAttribute('disabled', true)
}

document.addEventListener('keydown', function (event) {
  const key = event.code

  switch (key) {
    case 'Space':
      if (document.getElementById('start').disabled) {
        stop()
      } else {
        start()
      }
      break
    case 'KeyZ':
      reset()
      break
  }
})