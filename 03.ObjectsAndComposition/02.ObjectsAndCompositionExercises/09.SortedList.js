function createSortedList() {
    return {
        _list: [],
        size: 0,
        add: function (element) {
            this._list.push(element);
            this._list.sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            if (index < 0 || index >= this.size) {
                return;
            }

            this._list.splice(index, 1);
            this._list.sort((a, b) => a - b);
            this.size--;
        },
        get: function (index) {
            if (index < 0 || index >= this.size) {
                return;
            }

            return this._list[index];
        },

    }
}

let list = createSortedList(); 

list.add(5); 

list.add(6); 

list.add(7); 

console.log(list.get(1));  

list.remove(1); 

console.log(list.get(1)); 