<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProjectController;
use App\Models\Client;
use App\Models\Employee;
use App\Models\Project;
use Illuminate\Foundation\Application;
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
        'client' => Client::all(),
        'project' => Project::with(['Category', 'Client'])->get()
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About', ['data' => Employee::all()]);
});

Route::get('/projects', function () {
    return Inertia::render('Projects', ['project' => Project::with(['Category', 'Client'])->get()]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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
        Route::delete('/project/delete', 'destroy')->name('project.destroy');
    });
    Route::controller(CategoryController::class)->group(function () {
    });
    Route::controller(EmployeeController::class)->group(function () {
    });
});

require __DIR__ . '/auth.php';
