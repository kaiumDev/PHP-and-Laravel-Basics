<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/xubayer',function(){
    return "I'm Sabbir";
});
