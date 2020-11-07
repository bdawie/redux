const add = a => b => a + b;

const add3 = add(3);

console.log(add3(5));

const wrap = element => text => `<${element}>${text}</${element}>`;

console.log(wrap('div')('Hello World!'));
