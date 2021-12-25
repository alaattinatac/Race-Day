let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = prompt("If you registered early, enter true. Otherwise, enter false.");
const age = prompt("How old are you?");

if (parseInt(age) > 18 && registeredEarly) {
    raceNumber += 1000;
    document.getElementById("result").innerHTML=(`Race will begin at 9:30. Your race number is: ${raceNumber}.`);
} else if (parseInt(age) > 18 && !registeredEarly) {
    document.getElementById("result").innerHTML=(`Race will begin at 11:00. Your race number is: ${raceNumber}.`);
} else if (parseInt(age) < 18) {
    document.getElementById("result").innerHTML=(`Race will begin at 12:30. Your race number is: ${raceNumber}.`);
} else {
    document.getElementById("result").innerHTML=('Please report to the registration desk, thanks!');
}