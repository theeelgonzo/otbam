document.getElementById('subBut').addEventListener('click', function () {
    const command = document.getElementById('textBox').value;
//    const output = document.getElementById('outBox').textContent
   // console.log(command);
    //document.getElementById('outBox').textContent = command;
    //Add switch bank here to interpret command
    switch(command) {
        case 'look':
            document.getElementById('outBox').textContent = 'What are you looking at, G?'

    }
});

function boxPrint(message) {
    document.getElementById('outBox').textContent = message;
}

console.log('Welcome to the electro jungle.');
class Meatbag {
    constructor(name, race, gender) {
        this.name = name;
        this.race = race;
        this.gender = gender;
        this.hp = 2;
        this.likesPc = false;
        this.isMeatbag = true;
    }
    introduceSelf() {
        console.log(
            `My name is ${this.name}. I am a ${this.race} ${this.gender}. I have ${this.hp} health points.`
        );
    }

    descAffinity() {
        if (!this.likePC) {
            console.log(
                "The state of man's life is nasty, brutish, and short. I do not trust anyone."
            );
        } else {
            console.log('I have never met a man I did not like!');
        }
    }
    fight(target) {
        console.log(`${this.name} attacks ${target.name}`);
        console.log(target);
    }
}

class PlayerCharacter extends Meatbag {
    constructor(name, race, gender) {
        super(name, race, gender);
    }
    talk(target, quote) {
        if (typeof target == 'undefined') {
            console.log(typeof target);
            console.log(`You cannot speak to ${target} right now.`);
        } else {
            console.log(typeof target);
            console.log(`${target.name} would love to talk to you.`);
        }
    }
    walk() {
        console.log('There you go, walking again.');
    }
    look() {
        const tar = prompt('What are you looking at?');
        console.log(`That is a rather nice ${tar}.`);
    }
}

john = new Meatbag('John', 'Elven', 'Male');
john.introduceSelf();
john.descAffinity();

jordan = new PlayerCharacter('Jordan', 'Human', 'Male');
jordan.introduceSelf;
john.fight(jordan);
//jordan.talk(darius);
jordan.talk(john);
