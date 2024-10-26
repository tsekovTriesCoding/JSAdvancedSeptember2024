class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        const task = {
            description,
            cost,
            priority,
        };

        this.tasks.push(task);
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        const task = this.tasks.find(task => task.description === description);

        if (!task) {
            throw new Error(`Task '${description}' not found in the renovation plan.`)
        }

        this.tasks = this.tasks.filter(task => task.description !== description);
        this.completedTasks.push(task);

        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        }

        const filteredTasksByPriority = this.tasks
            .slice()
            .filter(task => task.priority >= minimalPriority);

        if (filteredTasksByPriority.length) {
            return `You have ${filteredTasksByPriority.length} tasks to prioritize.`;
        }

        return `No tasks found with priority ${minimalPriority} or higher.`;
    }

    renovationSummary() {
        if (!this.completedTasks.length) {
            throw new Error('No tasks have been completed yet!');
        }

        let output = [`Budget left $${this.budget}.`,
        `You have completed ${this.completedTasks.length} tasks.`,
            'Pending tasks in the renovation plan:'];

        this.tasks.forEach(task => {
            const message = `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`;
            output.push(message);
        });

        return output.join('\n');
    }
}
// const renovation = new HomeRenovation(10000); 
// console.log(renovation.addTask("Paint walls", 1500, 2));  
// console.log(renovation.addTask("Install new windows", 5000, 1));  
// console.log(renovation.addTask("New Roof", 5000, 1));

// const renovation = new HomeRenovation(10000); 
// console.log(renovation.addTask("Paint walls", 1500, 2));  
// console.log(renovation.addTask("Install new windows", 5000, 1));  
// console.log(renovation.markTaskAsCompleted("Paint walls"));  
// console.log(renovation.markTaskAsCompleted("Change doors"));

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.getPriorityTasksCount(1));

const renovation = new HomeRenovation(10000); 
console.log(renovation.addTask("Paint walls", 1500, 2));  
console.log(renovation.addTask("Install new windows", 5000, 1));  
console.log(renovation.markTaskAsCompleted("Paint walls"));  
console.log(renovation.renovationSummary());