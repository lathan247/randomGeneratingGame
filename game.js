"use strict"


// We're building a basketball game that randomly selects your player, team, and location.
/*
LoopsforHoops
    Name = string 
    Team = string
    Home or Away = string
*/

function randomGenerator(item) {
    if(!item) {
        var hoopsBoo = Math.round(Math.random());
        if(hoopsBoo === 1) {
            return true;
        } else {
            return false;
        }
    }
    if (typeof item === "number") {
        return (Math.ceil(Math.random) * item);
    }
    return item[Math.floor(Math.random() * item.length)];
}

function buildGame() {
    var Players = ["Kobe", "Lebron", "Kyrie","KD", "Steph", "Harden"];
    var Team = ["Lakers", "Celtics", "Heat", "Suns", "Bulls", "Hawks"];
        return {
            Name: randomGenerator(Players),
            Team: randomGenerator(Team),
            Location: pickLocation(randomGenerator())
        }
}

function pickLocation(bool) {
    if (bool === true)
    {
        return "home"
    } 
    else 
    {
        return "away"
    }
}

console.log(buildGame());
