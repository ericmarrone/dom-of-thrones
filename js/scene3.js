function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage')
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  // Character 1
  danerysContainer = document.createElement('div')
  stage.append(danerysContainer)
  danerysContainer.style.width = '13%'
  danerysContainer.style.height = '42%'
  // danerysContainer.style.border = '2px red solid'
  // danerysContainer.style.background = 'yellow'
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.top = '55%'
  danerysContainer.style.left = '15%'

  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  danerys.style.width = '40%'
  danerys.style.position = 'absolute'
  danerys.style.top = 0
  danerys.style.left = "19%"

  blueDress = document.querySelector('#blue-dress')
  danerysContainer.append(blueDress)
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0

  // Character 2

  drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  drogoContainer.style.width = '13%'
  drogoContainer.style.height = '50%'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.top = '49%'
  drogoContainer.style.right = '10%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.width = '60%'
  drogo.style.position = 'absolute'
  drogo.style.top = 0
  drogo.style.left = '20%'

  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.height = "78%"
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0

  // Setup Props
  // Prop 1
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.width = '5%'
  egg.style.position = 'absolute'
  egg.style.top = '67%'
  egg.style.left = '15%'

  // Prop 2

  // Action!

  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '15%'
  })

  frame(function() {
    egg.style.top = '57%'
    egg.style.left = '25%'
  })

  frame(function() {
    egg.style.top = '47%'
    egg.style.left = '35%'
  })

  frame(function() {
    egg.style.top = '44%'
    egg.style.left = '45%'
  })

  frame(function() {
    egg.style.top = '47%'
    egg.style.left = '55%'
  })

  frame(function() {
    egg.style.top = '57%'
    egg.style.left = '65%'
  })


  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '75%'
  })

  frame(function() {
    egg.style.top = '57%'
    egg.style.left = '65%'
  })

  frame(function() {
    egg.style.top = '47%'
    egg.style.left = '55%'
  })

  frame(function() {
    egg.style.top = '44%'
    egg.style.left = '45%'
  })

  frame(function() {
    egg.style.top = '47%'
    egg.style.left = '35%'
  })

  frame(function() {
    egg.style.top = '57%'
    egg.style.left = '25%'
  })

  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '15%'
  })
}
