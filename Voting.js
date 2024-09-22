const votes = { optionA: 0, optionB: 0 };

function vote(option) {
    if (votes[option] !== undefined) {
        votes[option]++;
        console.log(`Voted for: ${option}`);
    } else {
        console.log("Invalid option.");
    }
}

function displayResults() {
    console.log(`Option A: ${votes.optionA} votes`);
    console.log(`Option B: ${votes.optionB} votes`);
}

vote('optionA');
vote('optionB');
vote('optionA');
displayResults();