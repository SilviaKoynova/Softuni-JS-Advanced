class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        }
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        let findings = this.listOfParticipants.find(n => n.name === name);
        if (findings) {
            return `The ${name} is already registered at the camp.`
        }
        if (money < Number(this.priceForTheCamp[condition])) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        let participant = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {
        let findings = this.listOfParticipants.find(n => n.name === name);
        if (findings) {
            const index = this.listOfParticipants.indexOf(findings);
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`;
        } else if (!findings) {
            throw new Error(`The ${name} is not registered in the camp.`)

        }

    }
    timeToPlay(typeOfTheGame, player1, player2) {
        let exist = true;
        let firstPlayer = this.listOfParticipants.find(n => n.name === player1);
        let secondPlayer = this.listOfParticipants.find(n => n.name === player2);
        if (!firstPlayer || !secondPlayer) {
            if (typeOfTheGame === 'WaterBalloonFights') {
                exist = false;
                throw new Error(`Invalid entered name/s.`);
            }

        }
        if (exist) {
            if (this.listOfParticipants[player1].condition !== this.listOfParticipants[player2].condition) {
                throw new Error(`Choose players with equal condition.`);
            } else {
                if (typeOfTheGame === 'Battleship') {
                    player1[participant].power += 20;
                    return `The ${player1[participant].name} successfully completed the game ${typeOfGame}.`
                }
                if (typeOfTheGame === 'WaterBalloonFights') {
                    if (player1.power > player2.power) {
                        player1[participant].wins += 1;
                        return `The ${player1.name} is winner in the game ${typeOfGame}.`;
                    } else if (player1.power < player2.power) {
                        player2[participant].wins += 1;
                        return `The ${player2[participant].name} is winner in the game {typeOfGame}.`
                    } else {
                        return `There is no winner.`;
                    }

                }
            }
        }
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));



