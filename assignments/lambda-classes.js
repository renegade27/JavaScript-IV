// CODE here for your Lambda Classes

class Person {
    constructor(object) {
        this.name = object.name;
        this.gender = object.gender;
        this.location = object.location;
        this.age = object.age;
    }
    speak() {
        return `Hi, my name is ${this.name} and I'm from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(object) {
        super(object);
        this.specialty = object.specialty;
        this.favLanguage = object.favLanguage;
        this.catchPhrase = object.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`
    }
}

class Student extends Person {
    constructor(object) {
        super(object);
        this.previousBackground = object.previousBackground;
        this.className = object.className;
        this.favSubjects = object.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects.forEach((subject) => console.log(subject));
    }
    PRassignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(object) {
        super(object);
        this.gradClassName = object.gradClassName;
        this.favInstructor = object.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel it's standup time!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const jacob = new Student({
    name : 'Jacob',
    gender : 'Male',
    location : 'Louisiana, USA',
    age : 19,
    previousBackground : 'phone repair',
    className : 'WebPT4',
    favSubjects : ['Cyber security', 'OO-Programming', 'LESS']
});

const cam = new Instructor ({
    name : 'Cam',
    gender : 'Male',
    location : 'Somewhere, USA',
    age : 34,
    specialty : 'Front-end',
    favLanguage : 'Javascript',
    catchPhrase : 'Gotcha buddy.'
});

const gabe = new ProjectManager ({
    name : 'Gabe',
    gender : 'Male',
    location : 'California, USA',
    age : 1337,
    specialty : 'Finessing some React',
    favLanguage : 'C because I\'m boring',
    catchPhrase : 'I\'m Gabe and I\'m a loser.',
    gradClassName : 'Web16',
    favInstructor : 'Josh Knell'
});

console.log(jacob.speak());
console.log(cam.demo(`Javascript IV`));
console.log(cam.grade(jacob, "Javascript IV"));
jacob.listsSubjects();
console.log(jacob.PRassignment('Javascript IV'));
console.log(jacob.sprintChallenge('Javascript IV'));
console.log(gabe.standUp('Main'));
console.log(gabe.debugsCode(jacob, 'Javascript IV'));