/**
 * create a function that generates 10 randm greets
 * messages and prints them to console with a line break between each message
 */
function randomGreetMessages(){
    const greetMessages=[
        'Hello',
        'Hi',
        'Hey',
        'Howdy',
        'Hola',
        'Bonjour',
        'Ciao',
        'Guten Taj',
        'Namaste',
        'Salam'
    ];

       // Array that stores random names to be used in the greet messages
       const names = [
        'Bob',
        'Alice',
        'John',
        'Jane',
        'Jack',
        'Jill',
        'James',
        'Judy',
        'Joe',
        'Jenny'
    ];

    let set= new Set();
    for (let i=0;i<10;i++){
        const randomIndex=Math.floor(Math.random() * greetMessages.length);
        // Append random name along with the greet message
        set.add(greetMessages[randomIndex] + " " + names[randomIndex]);
    }
    console.log(Array.from(set));
}
randomGreetMessages();

function randomGreetMessageGenerator2() {
    const greetMessages = [
        'Hello',
        'Hi',
        'Hey',
        'Howdy',
        'Hola',
        'Bonjour',
        'Ciao',
        'Guten Tag',
        'Namaste',
        'Salaam'
    ];

    let set = new Set();
    while (set.size < 10) {
        const randomIndex = Math.floor(Math.random() * greetMessages.length);
        set.add(greetMessages[randomIndex] + ' ' + (set.size + 1));
    }
    console.log(Array.from(set));
}

randomGreetMessageGenerator2();