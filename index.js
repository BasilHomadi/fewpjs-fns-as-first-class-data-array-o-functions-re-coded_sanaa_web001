var wakeDog = function(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${DogBreed}`)
  return `Wake ${dogName} the ${DogBreed}`
}

var leashDog = function(dogName, DogBreed) {
  console.log(`Leash ${dogName} the ${DogBreed}`)
  return `Leash ${dogName} the ${DogBreed}`
}

var walkToPark = function(dogName, DogBreed) {
  console.log(`Walk to the park with ${dogName} the ${DogBreed}`)
  return `Walk to the park with ${dogName} the ${DogBreed}`
}

var throwFrisbee = function(dogName, DogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${DogBreed}`)
  return `Throw the frisbee for ${dogName} the ${DogBreed}`
}

var walkHome = function(dogName, DogBreed) {
  console.log(`Walk home with ${dogName} the ${DogBreed}`)
  return `Walk home with ${dogName} the ${DogBreed}`
}

var unleashDog = function(dogName, DogBreed) {
  console.log(`Unleash ${dogName} the ${DogBreed}`)
  return `Unleash ${dogName} the ${DogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed))
}