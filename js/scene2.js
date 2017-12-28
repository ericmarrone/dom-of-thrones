function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  stage = document.querySelector('#stage')
  document.querySelector('#sets')
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast
  // Character 1
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.width = '10%'
  nedContainer.style.height = '37%'
  nedContainer.style.position = 'absolute'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0

  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  leather.style.position = 'absolute'
  leather.style.bottom = 0

  // Character 2
  joffreyContainer = document.createElement('div')
  joffreyContainer.id = 'joffrey-container'
  stage.append(joffreyContainer)
  joffreyContainer.style.width = '8%'
  joffreyContainer.style.height = '31%'
  joffreyContainer.style.position = 'absolute'
  joffreyContainer.style.top = '55%'
  joffreyContainer.style.left = '55%'

  joffrey = document.querySelector('#joffrey')
  joffreyContainer.append(joffrey)
  joffrey.style.width = '75%'
  joffrey.style.position = 'absolute'
  joffrey.style.left = '33%'

  king = document.querySelector('#king')
  joffreyContainer.append(king)
  king.style.position = 'absolute'
  king.style.bottom = 0

  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Action!

  // Stage direction 1
  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })


  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

  // Stage direction 2
  frame(function() {
    joffrey.style.top = "-20%"
    joffrey.style.left = "60%"
  })

  frame(function() {
    joffrey.style.top = "-30%"
    joffrey.style.left = "75%"
    joffrey.style.transform = 'rotateZ(30deg)'
  })

  frame(function() {
    joffrey.style.top = "-45%"
    joffrey.style.left = "105%"
    joffrey.style.transform = 'rotateZ(85deg)'
  })

  frame(function() {
    joffrey.style.top = "-30%"
    joffrey.style.left = "130%"
    joffrey.style.transform = 'rotateZ(106deg)'
  })

  frame(function() {
    joffrey.style.top = "-10%"
    joffrey.style.left = "145%"
    joffrey.style.transform = 'rotateZ(145deg)'
  })

  frame(function() {
    joffrey.style.top = "20%"
    joffrey.style.left = "165%"
    joffrey.style.transform = 'rotateZ(170deg)'
  })

  frame(function() {
    joffrey.style.top = "55%"
    joffrey.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    joffrey.style.top = "85%"
  })
}
