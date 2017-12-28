var time = 0

function frame(actions) {

  setTimeout(function () {
    actions()
  }, time)

  time += 500

}

// document.addEventListener('DOMContentLoaded', function () {
//   scene2()
// })
//
// document.addEventListener('DOMContentLoaded', function () {
//   scene3()
// })
//
// document.addEventListener('DOMContentLoaded', function () {
//   scene4()
// })
