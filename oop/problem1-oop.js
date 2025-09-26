/**
 * CHALLENGE 1: Bird
 * You are working with National Geographic on a bird tracking application.
 * You are tasked with creating a function that returns objects representing
 * different birds. Each `Bird` object should contain the following properties,
 * which are initially set via arguments when the object is created:
 *
 * `species` (string representing the bird's species)
 * `color` (string representing the bird's color)
 * `locations` (array of locations where the bird has been found)
 *
 * The following methods must also be available to every instance of a Bird object
 * (but not stored on the individual objects themselves):
 * `getColor` (returns the color of the bird)
 * `setColor` (sets a new color for the bird)
 * `getLocations` (returns the locations where the bird was found)
 * `addLocation` (adds a new location to the locations array)
 *
 * The methods that take an argument must accept only one argument, and it must be a string.
 */
class Bird {// create Bird class
    constructor(species, color, locations) {
        this.species = species;//`species` (string representing the bird's species)
        this.color = color;//`color` (string representing the bird's color)
        this.locations = locations;//`locations` (array of locations where the bird has been found)
    }

    getColor() {// `getColor` (returns the color of the bird)
        return this.color;
    }

    setColor(color) {//`setColor` (sets a new color for the bird)
        this.color = color;
    }

    getLocations() {// `getLocations` (returns the locations where the bird was found)
        return this.locations;
    }

    addLocation(location) {// `addLocation` (adds a new location to the locations array)
        this.locations.push(location);
    }
}
  


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const newBird = new Bird('canary', 'red', ['newyork', 'spain']);
console.log(newBird); // => should log { species: 'canary', 'color: 'red', locations: ['newyork', 'spain'] }
console.log(newBird.getColor()); // => should return 'red'
newBird.setColor('yellow');
console.log(newBird.getColor()); // => should return 'yellow'
newBird.addLocation('france');
console.log(newBird.getLocations()); // => should return ['newyork', 'spain', 'france'];
