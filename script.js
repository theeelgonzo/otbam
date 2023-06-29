//this function effectively does nothing
//but it took two whole mornings of my time
//to try to automate something that might have only taken
//just ten minutes
const commandButtons = document.querySelectorAll('.gridRow > *');
commandButtons.forEach((name) => {
    console.log(name);
    textVal = name.getAttribute('name');
    console.log(textVal);
    const jerry = document.getElementById(`${textVal}`);
    jerry.addEventListener(onclick, function () {
        console.log(`You clicked the ${name} command!`);
    });
});

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
    speak() {
        boxPrint('What may I do for you?');
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
        if (dungeon.pcLocation.hasOwnProperty('monster')) {
            console.log('You can talk to the monster');
        } else {
            console.log('There is no one here to talk to!');
        }
        //if (typeof target == 'undefined') {
        //    console.log(typeof target);
        //    console.log(`You cannot speak to ${target} right now.`);
        //} else {
        //    console.log(typeof target);
        //    console.log(`${target.name} would love to talk to you.`);
        //}
    }
    walk() {
        console.log('There you go, walking again.');
    }
    look() {
        const tar = prompt('What are you looking at?');
        console.log(`That is a rather nice ${tar}.`);
    }
}
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
        if (!this.isLocked) {
            boxPrint(`You went through the ${this.name}`);
            dungeon.pcLocation = this.destination;
            return dungeon.pcLocation;
        } else {
            boxPrint('This door is locked!');
        }
    }
    describe() {
        boxPrint(this.description);
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

class Chest {
    constructor(appearance, exam, isLocked, contents) {
        this.appearance = appearance;
        this.exam = exam;
        this.isLocked = isLocked;
        this.contents = contents;
    }
    openChest() {
        if (!islocked) {
            boxPrint(this.contents);
        } else {
            boxPrint('The chest is locked!');
        }
    }
}

roomOne = new Room('very nice', 'a nice room');
roomTwo = new Room('super spooky', 'is that bones over there?');
roomThree = new Room(
    'do these rooms just get spookier and spookier?',
    'someone should call OSHA'
);
roomFour = new Room(
    'actually a pretty pleasant room',
    "oh wait, it's more bones."
);
roomFive = new Room(
    'a room with an orc',
    'is he a nice orc? is there any such thing?'
);
roomSix = new Room(
    'a room with twinkling treasure',
    'maybe if i just took a few pockets full of treasure...'
);

const dungeon = {
    pcLocation: roomOne,
    roomOne: {
        doorNorth: new Door('North Door', 2, false, 'a solid door', roomTwo),
    },
    roomTwo: {
        doorSouth: new Door('South Door', 2, false, 'a solid door', roomOne),
        doorEast: new Door(
            'East Door',
            2,
            false,
            'a rickety old door',
            roomThree
        ),
        doorNorth: new Door(
            'North Door',
            2,
            true,
            'a sturdy door with a solid lock',
            roomFour
        ),
    },
    roomThree: {
        doorWest: new Door(
            'West Door',
            2,
            false,
            'a typical wooden door...not much to look at',
            roomTwo
        ),
        monster: (phil = new Meatbag('Phillip', 'orc', 'male')),
        chest: new Chest(
            'a well-worn old chest',
            'it might have some dustbunnies in it',
            false,
            ['key', 'dustbunnies']
        ),
    },
    roomFour: {
        doorSouth: new Door(
            'South Door',
            2,
            false,
            'a door behind you',
            roomTwo
        ),
        doorWest: new Door(
            'West Door',
            2,
            false,
            'a handsomely crafted door',
            roomFive
        ),
        doorNorth: new Door(
            'North Door',
            2,
            true,
            'a soundly locked oaken door',
            roomSix
        ),
        puzzle: {
            appearance: 'a tricksy puzzle',
            solved: (isSolved = false),
            fixThis:
                'this puzzle needs a class and methods to unlock doorNorth',
        },
    },
    roomFive: {
        doorEast: new Door(
            'East Door',
            2,
            false,
            'a ratherly easterly door',
            roomFour
        ),
        monster: new Meatbag('Hank', 'orc', 'male'),
        clue: 'the puzzle in room four can only be solved through DM-Magic',
    },
    roomSix: {
        doorSouth: new Door('South Door', 2, false, roomFour),
        treasure: 'fat stacks of gold',
        aWayOut: 'ends game',
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

john = new Meatbag('John', 'Elven', 'Male');
john.introduceSelf();
john.descAffinity();

jordan = new PlayerCharacter('Jordan', 'Human', 'Male');
jordan.introduceSelf();
john.fight(jordan);
//jordan.talk(darius);
jordan.talk(john);
// I can't do a commit today. 6/29/23
// RIP buddha. Today was too hard to do the work
// I know it's not right, and I don't want to let the streak die
// But there is just not a line of code in me today.
// I am sorry.
