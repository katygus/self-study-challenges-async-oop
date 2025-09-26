/**
 * CHALLENGE 3: Sum After Delay
 * Create a function `sumAfterDelay` that takes two numbers and a delay
 * (in milliseconds) as arguments. It should return a promise that resolves
 * with the sum of the two numbers after the specified delay.
 */

function sumAfterDelay(num1, num2, delay) {
  return new Promise((resolve, reject) => {
    // create/return new promise instance
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const sum = num1 + num2;
      setTimeout(() => resolve(sum), delay);// promise func resolves by summing num1 and num2 after the delay
      }
     else if (typeof num1 !== 'number') {// promise func rejects with an error message if nums aren't numbers
      reject(`${num1} is not a number`); 
    } else if (typeof num2 !== 'number') {
      reject(`${num2} is not a number`);
    }
  }); 
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
sumAfterDelay(5, 10, 1000)
  .then((sum) => console.log(sum)) // should log 15 after 1 second
  .catch((error) => console.error('Error:', error));

  sumAfterDelay(18, 'bread', 1000)
  .then((sum) => console.log(sum)) 
  .catch((error) => console.error('Error:', error));// should log "Error: bread is not a number"