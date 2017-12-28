function scene4() {

  // Setup Stage
  stage = document.querySelector('#stage')
  kingsLanding = document.querySelector('#kings-landing')
  stageImg = document.querySelector('#stage-img')
  kingsLandingImgSrc = kingsLanding.getAttribute('src')
  stageImg.setAttribute('src', kingsLandingImgSrc)


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

  // Character 3
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.width = '10%'
  nedContainer.style.height = '37%'
  nedContainer.style.position = 'absolute'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '35%'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0

  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  leather.style.position = 'absolute'
  leather.style.bottom = 0

  // Setup Props
  // Prop 1

  // Prop 2

  // Action!

  for (i = 0; i < 5; i++) {
    frame(function() {
      nedContainer.style.top = "50%"
      nedContainer.style.left = "35%"
      drogoContainer.style.top = "49%"
      drogoContainer.style.right = "10%"
      danerysContainer.style.top = '55%'
      danerysContainer.style.left = '15%'
    })
    frame(function() {
      nedContainer.style.top = "60%"
      nedContainer.style.left = "35%"
      nedContainer.style.transform = 'rotateY(180deg)'
      drogoContainer.style.top = "45%"
      drogoContainer.style.right = "15%"
      drogoContainer.style.transform = 'rotateZ(30deg)'
      danerysContainer.style.top = '45%'
      danerysContainer.style.left = '17%'
      danerysContainer.style.transform = 'rotateZ(20deg)'
    })
    frame(function() {
      nedContainer.style.top = "50%"
      nedContainer.style.left = "35%"
      nedContainer.style.transform = 'rotateY(30deg)'
      drogoContainer.style.transform = 'rotateZ(350deg)'
      drogoContainer.style.top = "47%"
      drogoContainer.style.right = "13%"
      danerysContainer.style.transform = 'rotateZ(330deg)'
      danerysContainer.style.top = '45%'
      danerysContainer.style.left = '15%'
    })
  }

  frame(function() {
    nedContainer.style.top = "60%"
    drogoContainer.style.top = "59%"
    danerysContainer.style.top = "65%"
  })
  frame(function() {
    nedContainer.style.top = "70%"
    drogoContainer.style.top = "69%"
    danerysContainer.style.top = "75%"
  })
  frame(function() {
    nedContainer.style.top = "80%"
    drogoContainer.style.top = "79%"
    danerysContainer.style.top = "85%"
  })
  frame(function() {
    nedContainer.style.top = "80%"
    drogoContainer.style.top = "89%"
    danerysContainer.style.top = "95%"
  })
  frame(function() {
    nedContainer.style.top = "100%"
    drogoContainer.style.top = "109%"
    danerysContainer.style.top = "105%"
  })
}
