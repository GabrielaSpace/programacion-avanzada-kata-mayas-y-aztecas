class Warrior{
    constructor(life, power){
        this.life=life;
        this.power=power;
    }

    attack(){
        return (` ${this.power}`);
    }

    defend(damage){
        this.life -= damage
        console.log(`vida restante: ${this.life}`)
    }

}

class Maya extends Warrior{
    constructor(life, power){
        super(life, power)
    }

    drinkColaCao(){
        this.power += 10;
    }
}

class Aztec extends Warrior{
    constructor(life, power){
        super(life, power)
    }
    drinkNesquik(){
        this.life += 10;
    }

}

const azteca = new Aztec (100,30)
azteca.drinkNesquik()

const maya = new Maya(50,70)
maya.drinkColaCao()


azteca.defend(maya.attack())
maya.defend(azteca.attack())
/* maya.attack(azteca.defend())
azteca.attack(maya.defend()) */
