class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        } else if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const disciplinesCompleted = Math.round(condition / 30);

        if (disciplinesCompleted === 1 || disciplinesCompleted === 2) {
            return `${participantName} could only complete ${disciplinesCompleted} of the disciplines`;
        }


        this.listOfFinalists.push({ [participantName]:  this.participants[participantName]});
        delete this.participants[participantName];

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        if (!this.listOfFinalists.some(p => Object.keys(p)[0] === participantName)) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (!this.listOfFinalists.length) {
            return `There are no finalists in this competition`;
        }

        if (criteria === 'all') {
            let output = [`List of all ${this.competitionName} finalists:`];

            this.listOfFinalists
                .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
                .forEach(f => {
                    output.push(Object.keys(f)[0]);
                });

            return output.join('\n');
        }

        const finalistByCriteria = this.listOfFinalists.filter(f => Object.values(f)[0] === criteria);

        if (!finalistByCriteria.length) {
            return `There are no ${criteria}'s that finished the competition`;
        }

        const firstPlaceParticipantName = Object.keys(finalistByCriteria[0]);

        return `${firstPlaceParticipantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));