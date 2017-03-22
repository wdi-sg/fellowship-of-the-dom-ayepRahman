console.log('Linked')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')
var landArticle = document.createElement('Article')
var landTitle = document.createElement('h1')
var newLi = document.createElement("li")

// Part 1
// CALL THE FUNCTION!!!!!

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (land) {
    var landArticle = document.createElement('Article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)


  })

  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var firstArticle = document.querySelectorAll('article')[0]
  var shire = firstArticle.querySelector('h1')
  var newHobs = document.createElement('ul')
  var newList = document.createElement("li")
  newList.classList.add('hobbits')

  shire.appendChild(newHobs)
  newHobs.appendChild(newList)

//<li class="hobbit">Frodo</li>
for (var i = 0; i < hobbits.length; i++ ) {

  newHobs.appendChild(newList)
  var multiHobbit = hobbits[i]
  //var multiName = newLi.textContent(multiHobbit)

  var newClass = document.createAttribute("class")
  //multiName.textContent(newClass)
}


console.log(newHobs)
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
}

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
}

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
