//create a ship class
class Ship{
  constructor(name, hull, firepower, accuracy){
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
  }
//create attack method    
  attackShip(){
 
      //if the accuracy  of the USS ship is greater than the accuracy of the enemy ship, 
  // it is a hit and hull is deducted
     
  if(myShip.accuracy >= this.accuracy){
          console.log(myShip);
          this.hull -= myShip.firepower
          console.log(this.name + " is the item");
          console.log("The ship has been hit");
          console.log(this.hull + " is the hull for " + this.name);

      } else if (myShip.accuracy < this.accuracy){
          console.log("This ship survives");
          myShip.hull -= this.firepower
          console.log(this.hull + " is the hull of " + this.name);
      }
  }
}

let myShip = new Ship("USS HelloWorld", 20, 5,0.7)
console.log(myShip);

//create a factory for alien ships
class Fleet{
  constructor(className){
      this.className = className;
      this.ships = [];
  }
// create a method to add ships in the factory array
  addShip(name){
      let hull = Math.floor(Math.random()*4 + 3)
      let firepower = Math.floor(Math.random()*3 + 2)
      let accuracy = (Math.random()*0.2 + 0.6).toFixed(1)

      let newShip = new Ship(name, hull, firepower, accuracy)
      this.ships.push(newShip);
  }
}

let enemyShips = new Fleet("Enemy Ships");
enemyShips.addShip("Ship 1")
enemyShips.addShip("Ship 2")
enemyShips.addShip("Ship 3")
enemyShips.addShip("Ship 4")
enemyShips.addShip("Ship 5")
enemyShips.addShip("Ship 6")

console.log(enemyShips);
enemyShips.ships[0].attackShip();
console.log(enemyShips.ships[0]);

