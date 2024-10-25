(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return !this.toString();
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (!this.includes(' ')) {
            return this.substring(0, n - 3) + '...';
        }

        let res = this.split(' ');
        let result = res.join(' ') + '...';

        while (result.length > n) {
            res.pop();
            result = res.join(' ') + '...';
        }

        return result;

        /* let words = this.split(' ');
        let result = [];

        for (const word of words) {
            if (result.join(' ').length + word.length + 3 <= n) {
                result.push(word);
            } else {
                break;
            }
        }

        return result.join(' ') + '...';*/
    }

    String.format = function (string, ...params) {
        params.forEach(param => {
            string = string.replace(/{\d+}/, param);
        });

        return string;
    }

    // let str = 'my string';
    // str = str.ensureStart('my');
    // str = str.ensureStart('hello ');
    // str = str.truncate(16);
    // str = str.truncate(14);
    // str = str.truncate(8);
    // str = str.truncate(4);
    // str = str.truncate(2);
    // str = String.format('The {0} {1} fox',
    //     'quick', 'brown');
    // str = String.format('jumps {0} {1}',
    //     'dog');
})()

