// ES6 Class 
class Myclass{
    MyFun(){
        console.log('Hi.Function')
    }
}
var obj =new Myclass();
obj.MyFun(); 



// Constructor class
 class MyClass2{

    constructor(a,b){
        this.firstNum=a 
        this.secondNum=b 
        
    }
    add(){
        let result=this.firstNum + this.secondNum
        console.log(result)
    }
 }
 var obj = new MyClass2(10,20)
 obj.add()

//  Static Keyword
class MyClass3{
    static hello(){
        console.log("Hi, I'm Static With out Obj")
    }
}
MyClass3.hello()