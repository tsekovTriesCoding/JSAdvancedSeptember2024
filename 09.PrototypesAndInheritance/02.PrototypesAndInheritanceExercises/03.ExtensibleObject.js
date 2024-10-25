
function extensibleObject() {
    let parentObject = {}
    let childObject = Object.create(parentObject);

    childObject.extend = function (template) {
        const entries = Object.entries(template);

        for (const [key, value] of entries) {
            if (typeof value === 'function') {
                parentObject[key] = value;
            } else {
                childObject[key] = value;
            }
        }
    }

    return childObject;
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}

myObj.extend(template);
console.log(myObj);



