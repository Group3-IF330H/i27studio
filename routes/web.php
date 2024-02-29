<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProjectController;
use App\Mail\ContactMail;
use App\Models\Category;
use App\Models\Client;
use App\Models\Employee;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Homepage', [
        'project' => Project::with(['Category', 'Client'])->get()->where("is_highlight", true)->values(),
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About', ['data' => Employee::all(), "project" => Project::all()->take(50)]);
})->name("about");

Route::controller(ProjectController::class)->group(function () {
    Route::get('/projects/{category}', 'category')->name("project.category");
    Route::get('/projects/client/{client}', 'show')->name('project.show');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/clients', function () {
    return Inertia::render('Client', ['client' => Client::all()]);
})->name('clients');

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::post('/test', [MailController::class, 'MakeMail'])->name('contact.mail');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::controller(ClientController::class)->group(function () {
        Route::get('/client', 'index')->name('client.index');
        Route::post('/client/create', 'store')->name('client.create');
        Route::get('/client/edit', 'edit')->name('client.edit');
        Route::post('/client/update', 'update')->name('client.update');
        Route::delete('/client/delete', 'destroy')->name('client.destroy');
    });
    Route::controller(ProjectController::class)->group(function () {
        Route::get('/project', 'index')->name('project.index');
        Route::post('/project/create', 'store')->name('project.create');
        Route::get('/project/edit', 'edit')->name('project.edit');
        Route::post('/project/update', 'update')->name('project.update');
        Route::post('/project/{id}/checked', 'checked')->name('project.checked');
        Route::delete('/project/delete', 'destroy')->name('project.destroy');
    });
    Route::controller(CategoryController::class)->group(function () {
        Route::get('/category', 'index')->name('category.index');
        Route::post('/category/create', 'store')->name('category.create');
        Route::get('/category/edit', 'edit')->name('category.edit');
        Route::post('/category/update', 'update')->name('category.update');
        Route::delete('/category/delete', 'destroy')->name('category.destroy');
    });
    Route::controller(EmployeeController::class)->group(function () {
        Route::get('/team', 'index')->name('team.index');
        Route::post('/team/create', 'store')->name('team.create');
        Route::get('/team/edit', 'edit')->name('team.edit');
        Route::post('/team/update', 'update')->name('team.update');
        Route::delete('/team/delete', 'destroy')->name('team.destroy');
    });
});

require __DIR__ . '/auth.php';
