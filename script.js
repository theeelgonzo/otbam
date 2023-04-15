//A door class. Use for generating doors in rooms & halls.
//hp for breakability, not yet in use. Use small integer value. Name for clarity, ie. 'North Door' or 'South Door'. Description populates describe method for PC examine method. isLocked is a boolean value. Does exactly what it says on the tin.
class Door {
    constructor(name, hp, isLocked, description, destination) {
        this.hp = hp;
        this.isLocked = isLocked;
        this.name = name;
        this.description = description;
        this.destination = destination;
    }
    goThru() {
        boxPrint(`You went through the ${this.name}`);
        dungeon.pcLocation = this.destination;
        return dungeon.pcLocation;
    }
    describe() {
        boxPrint(description);
    }
}

class Room {
    constructor(appearance, exam) {
        this.appearance = appearance;
        this.exam = exam;
    }
    describe() {
        boxPrint(this.appearance);
    }
    examine() {
        boxPrint(this.exam);
    }
}

roomOne = new Room('very nice', 'a nice room');
roomTwo = new Room('super spooky', 'is that bones over there?');

const dungeon = {
    pcLocation: roomOne,
    roomOne: {
        doorNorth: new Door('North Door', 2, false, 'a solid door', roomTwo),
    },
    roomTwo: {
        doorNorth: new Door('South Door', 2, false, 'a solid door', roomOne),
    },
};

document.getElementById('subBut').addEventListener('click', function () {
    let command = document.getElementById('textBox').value;
    //Add switch bank here to interpret command
    switch (command) {
        case 'look':
            boxPrint('What are you looking at, G?');
            console.log('You executed the look command.');
            break;
        case 'fight':
            document.getElementById('outBox').textContent =
                'Are you looking to tussle?';
            console.log('You executed the fight command.');
            break;
        case 'go':
            document.getElementById('outBox').textContent =
                'Get your walking boots on, pal.';
            console.log('You executed the go command.');
            break;
        case 'talk':
            document.getElementById('outBox').textContent =
                'What would you like to chat about?';
            console.log('You executed the talk command.');
            break;
        case 'use':
            document.getElementById('outBox').textContent =
                'You cannot use that for what you think you can';
            console.log('You executed the use command.');
            break;
        default:
            console.log("That's not a command. Try something else.");
            break;
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
    constructor(name, race, gender, pcLocation, hasKey) {
        super(name, race, gender);
        {
            this.pcLocation = dungeon.roomOne;
            this.hasKey = false;
        }
    } //{
    //super(name, race, gender);
    //}

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
