class Engineer {
    constructor(name, id, gitHub) {
    this.name = name;
    this.id = id;
    this.gitHub = gitHub;
    this.person = () => {
      console.log(`Hi, my name is ${this.name}, my ID# is ${this.id}and github username is ${this.gitHub}!`);
    }}};

    const engineer = [
        new Engineer(name,id,gitHub)
    ];
    module.exports = {
        engineer
    }