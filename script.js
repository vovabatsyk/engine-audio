let start = false,
  t1,
  t2
const engine = new Audio('./audio/engine.mp3')
const audio = new Audio('./audio/car.mp3')

engine.loop = true
audio.loop = true
engine.volume = 0.2

document
  .querySelector('.start')
  .addEventListener('click', function () {
    if (!start) {
      start = true
      this.innerHTML = 'stop'
      engine.play()
      document
        .querySelector('.treadle')
        .addEventListener('click', pushTradle)
      document.querySelector('.progress-line').style.width = '100px'
    } else {
      start = false
      this.innerHTML = 'start'
      engine.pause()
      document
        .querySelector('.treadle')
        .removeEventListener('click', pushTradle)
      document.querySelector('.progress-line').style.width = '0'
      t1 = clearTimeout(t1)
      t2 = clearTimeout(t2)
      audio.pause()
      audio.currentTime = 0
    }
  })

function pushTradle() {
  t1 = clearTimeout(t1)
  t2 = clearTimeout(t2)
  this.classList.add('treadle-push')
  document.querySelector('.progress-line').style.width = '300px'
  audio.play()
  stopTreadle()
}

function stopTreadle() {
  t1 = setTimeout(() => {
    document
      .querySelector('.treadle')
      .classList.remove('treadle-push')
    document.querySelector('.progress-line').style.width = '100px'
  }, 500)
  t2 = setTimeout(() => {
    audio.pause()
    audio.currentTime = 0
  }, 1500)
}
