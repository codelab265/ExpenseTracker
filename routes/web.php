<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home')->middleware('guest');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
    Route::get('/dashboard/budget', [DashboardController::class, 'budget'])->name('dashboard.budget');
    Route::post('/dashboard/budget', [DashboardController::class, 'budgetCreate']);
    Route::get('/dashboard/expenses/{id}', [DashboardController::class, 'expenses'])->name('dashboard.expenses');
    Route::post('/dashboard/expenses/{id}', [DashboardController::class, 'expensesCreate']);
    Route::post('/dashboard/expenses/delete/{id}', [DashboardController::class, 'expensesDelete']);
    Route::post('/dashboard/budget/delete/{id}', [DashboardController::class, 'budgetDelete']);
    Route::patch('/dashboard/budget/update/{id}', [DashboardController::class, 'budgetUpdate']);
});

require __DIR__ . '/auth.php';
