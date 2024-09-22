function firstFunction() {
    console.log('Entering firstFunction');
    secondFunction();  // Calls the second function
    console.log('Exiting firstFunction');
}

function secondFunction() {
    console.log('Entering secondFunction');
    thirdFunction();   // Calls the third function
    console.log('Exiting secondFunction');
}

function thirdFunction() {
    console.log('Entering thirdFunction');
    // Some task in third function
    console.log('Exiting thirdFunction');
}

// Start the process by calling the first function
firstFunction();