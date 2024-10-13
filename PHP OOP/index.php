<?php 
// OOP Video 1
class Human{
    public $name;
    public $age;
    function sayHi(){
        echo "salam\n";

    }
    function sayName(){
        echo "My name is {$this->name}, I'm {$this->age} years old\n";

    }
    
}
$h1=new Human();
$h1->name="Kaium\n";
$h1->age="20";
$h1->sayName();

// echo $h1->name;
// $h1->sayHi();

$h2=new Human();
$h2->name="Kamal\n";
$h2->age=50;
$h2->sayName();

