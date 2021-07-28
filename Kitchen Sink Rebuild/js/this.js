let addValue;

let promptForValue = () => {
    addValue = Number(prompt("What value would you like to add?",""))
    return addValue;
}

const test = {
    prop: 42,
    func: function() {
        return this.prop + addValue;
    },
};

let addition = () => console.log(test.func());