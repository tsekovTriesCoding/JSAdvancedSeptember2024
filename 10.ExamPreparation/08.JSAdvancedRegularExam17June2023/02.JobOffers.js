class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let uniqueCandidates = new Set;

        candidates.forEach(candidate => {
            const [name, education, experience] = candidate.split('-');
            const existingCandidate = this.jobCandidates.find(c => c.name === name);

            if (existingCandidate && existingCandidate.yearsExperience < Number(experience)) {
                existingCandidate.yearsExperience = Number(experience);
            } else {
                const candidate = {
                    name,
                    education,
                    yearsExperience: Number(experience)
                }

                this.jobCandidates.push(candidate);
                uniqueCandidates.add(name);
            }
        });

        return `You successfully added candidates: ${Array.from(uniqueCandidates).join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');

        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (candidate.yearsExperience < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        candidate.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (candidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }

        if (candidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {
        if (!this.jobCandidates.length) {
            throw new Error('Candidate Database is empty!');
        }

        let output = ['Candidates list:'];

        this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(c => {
                const message = `${c.name}-${c.yearsExperience}`;

                output.push(message);
            });

        return output.join('\n');
    }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"])); 
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8")); 

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker")); 

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase()); 
