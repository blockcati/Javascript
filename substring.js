let text = "Welcome to JavaScript programming!";
let startSubString = "Welcome";
let endSubString = "programming!";

if (text.startsWith(startSubString)) {
    console.log(`The string starts with "${startSubString}".`);
} else {
    console.log(`The string does not start with "${startSubString}".`);
}

if (text.endsWith(endSubString)) {
    console.log(`The string ends with "${endSubString}".`);
} else {
    console.log(`The string does not end with "${endSubString}".`);
}