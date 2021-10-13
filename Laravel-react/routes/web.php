<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/get/all','HomeController@view');
Route::post('/api/insert','HomeController@store');
Route::put('/api/update/{id}','HomeController@update');
Route::delete('/api/delete/{id}','HomeController@destroy');

Route::get('/api/news/','HomeController@show');
Route::post('/api/news/add','HomeController@add_news');
