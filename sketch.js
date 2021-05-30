var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;
var Food
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database()

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(addfood)

  foodObj= new food()

  add=createButton("Add Food")
  add.position(800,95)
  add.mousePressed(feedDog)

  name1= createInput("Enter Name")
  name1.position(200,95)

var greeting = createElement('h3')

  submit= createButton("Submit")
  submit.position(300,95)
  submit.mousePressed(function(){
    var name= name1.value();
greeting.html("hello, I am RBot, your personal manager who will help you feed your dog,"+name+" in time.")

  }
  )
}

function draw() {
  background(46,139,87);
 foodObj.display();
  drawSprites();
}
function feedDog(){
  dog.addImage(sadDog)
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}
function addfood(){
  dog.addImage(happyDog)
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}
function readStock (data){
  foodS:data.val()
  foodObj.updateFoodStock(foodS)
}
//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
