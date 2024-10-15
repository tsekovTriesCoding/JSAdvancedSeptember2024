function solve(input) {
    let _list = [];
    let commands = {
        add: function (string) {
            _list.push(string);
        },
        remove: function (string) {
            _list = _list.filter(s => s != string);
        },
        print: function () {
            console.log(_list.join(','));
        },
    }

    input.forEach(line => {
        const [command, string] = line.split(' ');
        commands[command](string);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);