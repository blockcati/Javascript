let originalString = "JavaScript is fun.";
let toReplace = "fun";
let replacement = "awesome";

if (originalString.includes(toReplace)) {
    let newString = originalString.replace(toReplace, replacement);
    console.log(`Original: ${originalString}`);
    console.log(`Modified: ${newString}`);
} else {
    console.log(`The substring "${toReplace}" was not found in the string.`);
}