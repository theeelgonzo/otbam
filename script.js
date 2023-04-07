console.log('Welcome to the electro jungle.')
class Meatbag {
    constructor(name, race, gender) {
        this.name = name;
        this.race = race;
        this.gender = gender;
        this.hp = 2;
        this.likesPc = false;
    }
    introduceSelf() {
        console.log(`My name is ${this.name}. I am a ${this.race} ${this.gender}. I have ${this.hp} health points.`);
    }

    descAffinity() {
        if(!this.likePC){
            console.log('The state of man\'s life is nasty, brutish, and short. I do not trust anyone.')
        }
        else {
            console.log('I have never met a man I did not like!')
        }
    }
}
john = new Meatbag('John', 'Elven', 'Male')
john.introduceSelf()
john.descAffinity()
