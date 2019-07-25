// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
};

class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}.`;
    };
};


class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects(){
        // return `My favorite subjects are ${this.favSubjects}.`
        for(let i = 0; i < this.favSubjects.length; i++){
           console.log(this.favSubjects[i]);
        };
    };
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintchallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    };
};

class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    };
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times.`;
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    };
};

const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const Jane = new Instructor({
    name: 'Jane',
    location: 'YellowStone',
    age: 26,
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: `See you later`
});

const Jake = new Instructor({
    name: 'Jake',
    location: 'Dallas',
    age: 34,
    favLanguage: 'Java',
    specialty: 'hacker',
    catchPhrase: `Catch me if you can`
});

const Monica = new Student({
    name: 'Monica',
    age: 20,
    location: 'Fort Worth',
    previousBackground: 'laborer',
    className: 'CS 132',
    favSubjects: [
        'Html',
        'CSS',
        'JavaScript',
    ]
});

const Pablo = new Student({
    name: 'Pablo',
    age: 21,
    location: 'Montana',
    previousBackground: 'cook',
    className: 'CS 135',
    favSubjects: [
        'CSS',
        'Java',
        'Html',
    ]
});

const Mike = new Student({
    name: 'Mike',
    age: 21,
    location: 'San Francisco',
    previousBackground: 'pizza-delivery',
    className: 'CS 132',
    favSubjects: [
        'JavaScript',
        'CSS',
        'Java',
    ]
})

const George = new ProjectManager({
    name: 'George',
    age: 35,
    location: 'Phoenix',
    specialty: 'JavaScript',
    favLanguage: 'Java',
    catchPhrase: 'For Sure',
    gradClassName: 'CS1',
    favInstructor: 'James',
})

const Jesse = new ProjectManager({
    name: 'Jesse',
    age: 28,
    location: 'LA',
    specialty: 'JavaScript',
    favLanguage: 'Ruby',
    catchPhrase: 'I like that',
    gradClassName: 'CS1',
    favInstructor: 'Dan',
})

const Josh = new ProjectManager({
    name: 'Josh',
    age: 30,
    location: 'London',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: 'Will do',
    gradClassName: 'CS1',
    favInstructor: 'Michael',
});

console.log(Monica.speak());
console.log(Fred.demo('Java'));
console.log(Jake.grade('CSS'));
Pablo.listsSubjects();
console.log(Mike.PRAssignments('IDK'));
console.log(Monica.sprintchallenge('JavaScript'));
console.log(George.standUp('Web 22'));
console.log(Jesse.debugsCode(Monica, 'HTML'));
