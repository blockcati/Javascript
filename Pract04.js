let username = "JaneDoe";
let password = "12345";

if (password.length >= 6) {
  console.log(`Access granted for ${username}.`);
} else {
  console.log("Access denied. Password too short.");
}

if (username.toLowerCase().startsWith("jane")) {
  console.log("Username starts with 'jane'.");
}