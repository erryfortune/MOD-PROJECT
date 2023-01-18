let startButton = document.querySelector(".start-button")

let reset = document.querySelector(".reset")
let resultMessage = document.getElementById('result-message')
let reReset = document.getElementById('re-reset')


const updateStat = () =>{
    myhull.textContent = "Hull: " + myShip.hull;
    myfire.textContent = "Firepower: " + myShip.firepower;
    myAccuracy.textContent = "Accuracy: " + myShip.accuracy;


    
    enemyShips.ships.forEach((ship,i) => {
        enemyhull[i].textContent = "Hull: " + ship.hull
        enemyfire[i].textContent = "Firepower: " + ship.firepower
        enemyaccuracy[i].textContent = "Accuracy: " + ship.accuracy
    });
    
    
}

class Ship{
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
//make an attack method    
    attackShip(){
        
        if(myShip.accuracy >= this.accuracy){
            console.log(myShip);
            updateStat()
            // deduct points from alienship

            this.hull -= myShip.firepower
            //update stats
            updateStat()
            console.log(this.name + " Has been hit");
            console.log(this.hull + " is the hull for " + this.name);
            
        } else if ((Math.random() * 0.2 + 0.6).toFixed(1) < this.accuracy){
            //deduct points from my hull
            myShip.hull -= this.firepower
            this.accuracy -= 0.025
            // update stats
            updateStat()
            console.log("USS Ship has been hit");
            console.log(myShip);
            
            console.log(this.hull + " is the hull for " + this.name);
        }  
        
    }
}

let myShip = new Ship("USS HelloWorld", 20, 5,0.7)
console.log(myShip);



////create a factory for alien ships
class Fleet{
    constructor(className){
        this.className = className;
        this.ships = [];
    }
//  method  to add ships within the factory array
    addShip(name){
        let hull = Math.floor(Math.random()*4 + 3)
        let firepower = Math.floor(Math.random()*3 + 2)
        let accuracy = (Math.random()*0.2 + 0.6).toFixed(1)

        let newShip = new Ship(name, hull, firepower, accuracy)
        this.ships.push(newShip);
    }
}

const startGame = () =>{
    startButton.classList.add("hidden")
    reReset.classList.remove('hidden')
    reReset.style.margin = "0 auto"
    reReset.style.padding = "auto"
    
    setTimeout(() => {
        let value = prompt("Press any lettered key to start")
    if(!value ==""){
        
        battle()
    } else (
        alert("Invalid text. Kindly Reset")
    )
    }, 2000);
    updateStat()
 }
const reload = () =>{
    location.reload()
 }

const gameReset = () =>{
    reset.classList.remove('hidden')
  
  let enemyShips = new Fleet("Enemy Ships");
enemyShips.addShip("Ship 1")
enemyShips.addShip("Ship 2")
enemyShips.addShip("Ship 3")
enemyShips.addShip("Ship 4")
enemyShips.addShip("Ship 5")
enemyShips.addShip("Ship 6")

console.log(enemyShips);
  
//   create start game method
  
let enemyhull = document.querySelectorAll('.hull')
let enemyfire = document.querySelectorAll('.fire')
let enemyaccuracy = document.querySelectorAll('.accuracy')

let myhull = document.getElementById('myHull')
let myfire = document.getElementById('myfire')
let myAccuracy = document.getElementById('myAccuracy')

let enemyShipImg = document.querySelectorAll('.enemy_img')



console.log(enemyhull);

  
  
 const timer = ms => new Promise(res => setTimeout(res, ms))

const battle =  async () => {
    // set each ship's properties
    let lose = 0
    let alienShip = enemyShips.ships
    
    

    for (let i = 0; 0 < alienShip.length - 1; i++) {
        

        await timer(2000);

        console.log("LOSE : "+lose)
        
        if(!lose ){
            let value = prompt("Do you wish to battle the next ship?","Press Enter to begin")
            if(!value){
                reload()
            }
          }
         
        
        while(alienShip[i].hull > 0){
            if (enemyShips.ships[5] < 0){
                
            }
                if (myShip.hull <= 0) {
                  console.log(" The USS Has Been DESTROYED")
                  lose += 1
                  gameReset()
                console.log("you lost");
                  break;
                } 
                    // attack ship
                  alienShip[i].attackShip()
                  console.log(alienShip[i])


                  // change enemy ship image
                  if(myShip.hull <= 0){break}
                  enemyShipImg[i].src = "./images/enemy_ship_dead.png"
                  if (enemyShips.ships[5] < 0){
                    gameReset()
                    resultMessage.textContent = "You Win!"
                }
                  
              }
              if (enemyShips.ships[5].hull <= 0  ){
                gameReset()
                resultMessage.textContent = "You Win!"
            }
    }
}
















