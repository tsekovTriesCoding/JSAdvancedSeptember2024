function solve(moves) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let player = 'X';
    let win = false;
    let hasFreeFields = (matrix) => matrix.some((arr) => arr.some(value => value === false));

    for (let move of moves) {
        if (!hasFreeFields(dashboard)) {
            break;
        }
        
        const row = move.split(' ')[0];
        const col = move.split(' ')[1];

        if (!dashboard[row][col]) {
            dashboard[row][col] = player;

            if (checkForWinner(dashboard, player)) {
                win = true;
                break;
            }

            player = player === 'X' ? 'O' : 'X';
        } else {
            console.log("This place is already taken. Please choose another!");
        }
    }

    if (win) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log("The game ended! Nobody wins :(");
    }

    dashboard.forEach(line => {
        console.log(line.join('\t'));
    });

    function checkForWinner(dashboard, sign) {
        let win = false;
        for (let i = 0; i < 3; i++) {

            if (dashboard[i][0] === sign && dashboard[i][1] === sign && dashboard[i][2] === sign) {
                win = true;
                break;
            }

            if (dashboard[0][i] === sign && dashboard[1][i] === sign && dashboard[2][i] === sign) {
                win = true;
                break;
            }
        }

        if (!win) {
            if ((dashboard[0][0] === sign && dashboard[1][1] === sign && dashboard[2][2] === sign) ||
                (dashboard[2][0] === sign && dashboard[1][1] === sign && dashboard[0][2] === sign)) {
                win = true;
            }
        }
        return win;
    }
}

// solve(["0 1",

//     "0 0",

//     "0 2",

//     "2 0",

//     "1 0",

//     "1 1",

//     "1 2",

//     "2 2",

//     "2 1",

//     "0 0"]);

// solve(["0 0",

//     "0 0",

//     "1 1",

//     "0 1",

//     "1 2",

//     "0 2",

//     "2 2",

//     "1 2",

//     "2 2",

//     "2 1"]);

solve(["0 1",

    "0 0",

    "0 2",

    "2 0",

    "1 0",

    "1 2",

    "1 1",

    "2 1",

    "2 2",

    "0 0"]);