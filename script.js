class Hero
{
    constructor(name, age, type)
    {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    Getattack()
    {
        const attackTypes = {
            "mago": "Mágia",
            "guerreiro": "Espada",
            "monge": "Artes Marciais",
            "ninja": "Shuriken",
        }

        const attackType = attackTypes[this.type] || "Sem ataque definido";
        return `O ${this.type} atacaou usando ${attackType}`;
    }
}

const mago = new Hero("Gandalf", 2019, "mago");
const guerreiro = new Hero("Aragorn", 87, "guerreiro");
const monge = new Hero("Pai Mei", 80, "Monge");
const ninja = new Hero("Hanzo", 35, "Ninja");

console.log(mago.Getattack());
console.log(guerreiro.Getattack());
console.log(monge.Getattack());
console.log(ninja.Getattack());