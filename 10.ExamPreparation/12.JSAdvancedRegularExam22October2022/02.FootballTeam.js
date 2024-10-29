class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const players = new Set;
        footballPlayers.forEach(p => {
            let [name, age, playerValue] = p.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            const existingPlayer = this.invitedPlayers.find(p => p.name === name);

            if (existingPlayer && existingPlayer.playerValue < playerValue) {
                existingPlayer.playerValue = playerValue;
            } else {
                const player = {
                    name,
                    age,
                    playerValue
                }

                this.invitedPlayers.push(player);
                players.add(name);
            }
        });

        return 'You successfully invite ' + Array.from(players).join(', ') + '.';
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        const player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < player.playerValue) {
            const priceDifference = player.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        player.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list`);
        }

        if (player.age < age) {
            const diff = age - player.age;

            const output = diff < 5 ? `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
                : `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;

            return output;
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        const playersInfo = this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(p => `Player ${p.name}-${p.playerValue}`)
            .join('\n');

        return `Players list:\n` + playersInfo;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());



