// console.log('Hello World');

// var nameArray = ['kaium','jamal','Tomal','shanta'];
// for(let oneName of nameArray ){
//     console.log(oneName);
// }


// Object 
var billgetes= {
    shirt :{
         
    color : "black",
    swater : true,
    Quality: "good"

},
swatter:{
    color:"Gray",
    Quality:"Good",
    price:"230USD",
    warm:"best"

},
face:{
    similling:"yes",
    chasma:"yes",
    teeth :"White,Big"
}
}
// console.log(billgetes['face']['teeth']);

var billgatespre={
    shirt:true,
    shirtColor:"blue",
    snile:true,
    swatterColor:"gray"

}
for(let props in billgatespre){
    console.log(props +'='+billgatespre[props]);
}
 
// Decision making
if(billgatespre['shirtColor']==['red']){
    console.log("Shirt color is red")
}
else if(billgatespre['shirtColor']==['blue']){
    console.log("Shirt color is Blue")
}
else{
    console.log("Shirt colour not Found")
}


// ES6 Function Start

// Simple function
function myname() {
    var x=10;
    var y=20;
    var z=y-x;
    console.log(z); 
    
}
myname(20,5);


// Parameterized function
function myname2(y,x) {
   
    var z=y-x;
    console.log(z); 
    
}
myname2(20,5);


// Rest Parameters 
function name3(...x) {
    console.log(x[7])
    
}
name3(1,2,3,4,5,6,"A","B","C");

// function Return 
function name4() {
    return 300;
    
}
function name5() {
    return 200 + name4();
    
}
console.log(name5());


// anonymous function(without function name) 
var myfun= function(...x) {
    return x;
}
// console.log(myfun("Hello"));
// console.log(myfun(1,2,3,4,5,6,7,8));


// Arrow function 
var myfun1 =(...x)=>{
    console.log(x);
}
myfun1(1,2,3,4,5,6,"A","B","C","D");

// Arrow function return
var myfun2 =(...x)=>{
    return x;
}
console.log(myfun2(1,2,34,5));

