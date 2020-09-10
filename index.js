var wakeDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`)
  return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Leash ${dogName} the ${dogBreed}`)
  return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName="Byron", DogBreed="poodle") {
  console.log(`Walk to the park with ${dogName} the ${DogBreed}`)
  return `Walk to the park with ${dogName} the ${DogBreed}`
}

var throwFrisbee = function(dogName="Byron", DogBreed="poodle") {
  console.log(`Throw the frisbee for ${dogName} the ${DogBreed}`)
  return `Throw the frisbee for ${dogName} the ${DogBreed}`
}

var walkHome = function(dogName="Byron", DogBreed="poodle") {
  console.log(`Walk home with ${dogName} the ${DogBreed}`)
  return `Walk home with ${dogName} the ${DogBreed}`
}

var unleashDog = function(dogName="Byron", DogBreed="poodle") {
  console.log(`Unleash ${dogName} the ${DogBreed}`)
  return `Unleash ${dogName} the ${DogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed))
}