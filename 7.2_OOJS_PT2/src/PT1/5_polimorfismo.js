// Building enemy base //

function Enemy(atk, atkType, life){
    this.atk = atk
    this.atkType = atkType
    this.life = life
}

function EnemyBehavior(atk, atkType, life){
    Enemy.call(this, atk, atkType, life)

    this.getAtk = function(){
        console.log(this.atk)
    }
    this.getAtkType = function(){
        console.log(this.atkType)
    }
    this.getLife = function(){
        console.log(this.life)
    }
    this.hited = function(dmg){
        const newLife = life - dmg;
        this.life = newLife
        console.log("ENEMY has now " + newLife + " life points!")
    }
}

//                 //
// Types of Enemy //

function FireEnemy(atk, atkType, life,){
    EnemyBehavior.call(this, atk, atkType, life,)
}
function WaterEnemy(atk, atkType, life,){
    EnemyBehavior.call(this, atk, atkType, life,)
}
function LeafEnemy(atk, atkType, life,){
    EnemyBehavior.call(this, atk, atkType, life,)
}

//DarkenedEnemy have an different behavior
function DarkenedEnemy(atk, atkType, life,){
    EnemyBehavior.call(this, atk, atkType, life,)

    this.hited = function(dmg){
        const newLife = life + dmg;
        this.life = newLife
        console.log("ENEMY has now " + newLife + " life points!")
        console.log("This type of approach boost Darkness, try another thing.")
    }

    this.compliment = function(dmg){
        const newLife = life - (dmg*2);
        this.life = newLife
        console.log("ENEMY has now " + newLife + " life points!")
        console.log("To compliment is very effective!")
    }
}

const fireMinion = new FireEnemy(44, "Fire Punch", 120)
const fireBoss = new FireEnemy(66, "Fire Breath", 180)

const waterMinion = new WaterEnemy(32, "Water Shot", 200)
const waterBoss = new WaterEnemy(48, "Water Ratatatatatata", 300)

const leafMinion = new LeafEnemy(38, "Leaf Blade", 160)
const leafBoss = new LeafEnemy(57, "Leaf Storm", 240)

const darkenedMinion = new DarkenedEnemy(80, "Dark gaze", 300)
const darkenedBoss = new DarkenedEnemy(120, "Darkness Carnival", 450)

//          //
// Battles //

console.log("----------------------------------------------------------------")

//WaterEnemy (hited)
waterBoss.getAtkType()
console.log("Player defend")
console.log("Player attack")
console.log("Player hit it")
waterBoss.hited(34)

console.log("***************************************************************")

//DarkenedEnemy (hited)
darkenedBoss.getAtkType()
console.log("Player defend")
console.log("Player attack")
console.log("Player hit it")
darkenedBoss.hited(34)

console.log("***************************************************************")

//DarkenedEnemy (compliment)
darkenedBoss.getAtkType()
console.log("Player defend")
console.log("Player attack")
console.log("Player hit it")
darkenedBoss.compliment(34)


// Esse é outro exemplo de uso do polimorfismo, o que acontece aqui é praticamente
// o mesmo que ocorreu no arquivo anterior, a principal diferença é que aqui não 
// possuo atributos encapsulados, logo, mesmo nas abstrações "filhas", posso fazer
// o uso do polimorfismo sem a call de métodos internos da abstração "pai" e sim
// passando os atributos diretamente

// O polimorfismo aqui esta no DarkenedEnemy que, enquanto os outros inimigos levam
// dano ao serem acertados, este recupera a vida graças à reescrição do método
// "hited", além disso ele recebe o método "compliment" que o causa dano quando chamado.