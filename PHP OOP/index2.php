<?php
class Books{
    public $price;
    public $title;
    function setPrice($p){
        $this->price=$p;
    }
    function getPrice(){
        echo "{$this->price}.\n";
    }
    function setTitle($t){
        $this->title=$t;
    }
    function getTitle(){
        echo "{$this->title}. I love this Book.This book Price is {$this->price} \n";
    }
}
$bangla=new Books;
$eng = New Books;
$math = New Books;
$bangla->setTitle("This is bangla book");
$eng->setTitle("This is english book");
$math->setTitle("This is math book");
$bangla->setPrice(20);
$eng->setPrice(50);
$math->setPrice(100);

$math->getTitle();
// $math->getPrice();

