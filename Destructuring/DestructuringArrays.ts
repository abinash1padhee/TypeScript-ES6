const names = ['Alice', 'Bob', 'Charlie', 'Dana', 'Elvis', 'Fran', 'George', 'Hope'];

const firstTrad = names[0];

const [firstDest, secondDest, ...more] = names || [];

const [firstDestr = 'Steve', secondDestr, ...rest] = names || [];

multiParam("alice","bob","david");
multiParam(names);
multipleParam(...names);

function multiParam(...items) {
    debugger;
    items.forEach(item => {
        console.log("Hello, "+ item);
    })
}

function multipleParam(...items : string[]) {
    debugger;
    items.forEach(item => {
        console.log(`Hello, ${item}`);
    })
}
