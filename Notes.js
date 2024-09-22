const notes = [];

function addNote(note) {
    notes.push(note);
    console.log(`Note added: ${note}`);
}

function displayNotes() {
    console.log("Notes:");
    notes.forEach((note, index) => {
        console.log(`${index + 1}: ${note}`);
    });
}

addNote("Buy groceries");
addNote("Finish project");
displayNotes();