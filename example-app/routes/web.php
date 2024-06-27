<?php

use Illuminate\Support\Facades\Route;

Route::get('/',function(){
    return view('HomePage');
});

Route::get('/contact',function(){
    return view('ContactPage');
});

Route::get('/about',function(){
    return view('AboutPage');
});
