let userName;

let askName = () => {
    userName = prompt('What is your name?','');
    return userName;
};

let greeting = () => console.log('Hello ' + userName + '!');


