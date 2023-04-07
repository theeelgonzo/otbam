console.log('Welcome to the electro jungle.')
class Meatbag {
    constructor(name, race, gender) {
        this.name = name;
        this.race = race;
        this.gender = gender;
    }
    introduceSelf() {
        console.log(`My name is ${this.name}. I am a ${this.race} ${this.gender}`);
    }
}
john = new Meatbag('John', 'Elven', 'Male')
john.introduceSelf()
