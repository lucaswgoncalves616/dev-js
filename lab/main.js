let fullName = "crew de jesus";

function displayName(fullName) {
    let arrayString = fullName.split(" ");
    let name = arrayString[0];
    let lastName = arrayString[arrayString.length - 1];

    return `Hello! ${name} ${lastName}!`;
}


console.log(displayName(fullName));