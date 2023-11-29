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

    for (let i=0;i<10;i++){
        const randomIndex=Math.floor(Math.random() * greetMessages.length);
        console.log(greetMessages[randomIndex]);
    }
}
randomGreetMessages();