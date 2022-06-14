const SECRET_NUMBER = 25;
let count = 0;
while (true) {
  const PIN = prompt("Guess the secret number");
  count++;
  if (isNaN(Number(PIN)) || PIN === "" || PIN === null) {
    console.log("Error, enter only numbers");
  } else if (Number(PIN) === SECRET_NUMBER) {
    console.log(
      "Congratulations! You guessed the secret number in",
      count,
      "tries"
    );
    break;
  } else if (Number(PIN) > SECRET_NUMBER) {
    console.log("Your number is bigger");
  } else if (Number(PIN) < SECRET_NUMBER) {
    console.log("Your number is less");
  }
}