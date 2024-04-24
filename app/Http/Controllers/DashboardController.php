<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Models\Expense;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $budgets = Budget::where('user_id', auth()->id())->with('expenses')->withSum('expenses', 'amount')->get()->map(function ($budget) {
            $budget['totalSpent'] = $budget->expenses()->sum('amount');
            return $budget;
        });
        $totalBudget = Budget::where('user_id', auth()->id())->sum('amount');
        $totalSpend = Expense::where('user_id', auth()->user()->id)->sum('amount');
        $numberOfBudgets = Budget::where('user_id', auth()->id())->count();

        if ($budgets->count() == 0) {
            return to_route('dashboard.budget');
        }

        return Inertia::render('Dashboard', compact('totalBudget', 'totalSpend', 'numberOfBudgets', 'budgets'));
    }

    public function budget()
    {
        $budgets = Budget::where('user_id', auth()->id())->with('expenses')->withSum('expenses', 'amount')->get();
        return Inertia::render('Dashboard/Budget', compact('budgets'));
    }

    public function budgetCreate(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'amount' => ['required', 'numeric'],
        ]);

        Budget::create([
            'name' => $request->name,
            'amount' => $request->amount,
            'user_id' => auth()->id(),
            'icon' => $request->icon
        ]);
    }

    public function expenses($budgetID)
    {

        $budget = Budget::where('id', $budgetID)->with('expenses')->withSum('expenses', 'amount')->first();
        return Inertia::render('Dashboard/Expenses', compact('budget'));
    }

    public function expensesCreate(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'amount' => ['required', 'numeric'],
        ]);

        Expense::create([
            'name' => $request->name,
            'amount' => $request->amount,
            'budget_id' => $request->budget_id,
            'user_id' => auth()->id(),
        ]);
    }

    public function budgetUpdate(Request $request, $id)
    {
        Budget::find($id)->update($request->only('name', 'amount', 'icon'));
    }

    public function expensesDelete($id)
    {
        Expense::find($id)->delete();
    }

    public function budgetDelete($id)
    {
        Budget::find($id)->delete();

        $budgets = Budget::where('user_id', auth()->id())->with('expenses')->withSum('expenses', 'amount')->get();
        return to_route('dashboard.budget');
    }
}
