import { router, useForm } from "@inertiajs/react";
import { Trash } from "lucide-react";
import moment from "moment";
import React from "react";
import { Toaster, toast } from "sonner";

function ExpenseList({ budget }) {
    const Expenses = budget.expenses;

    const { post } = useForm();

    const DeleteExpense = ($id, e) => {
        e.preventDefault();
        post(`/dashboard/expenses/delete/${$id}`, {
            onSuccess: () => {
                toast("Expense deleted successfully");
            },
        });
    };

    return (
        <div className="mt-3">
            <div className="grid grid-cols-4 bg-violet-200 p-2">
                <div className="font-bold">Name</div>
                <div className="font-bold">Amount</div>
                <div className="font-bold">Date</div>
                <div className="font-bold">Action</div>
            </div>

            {Expenses.map((expense) => (
                <div className="grid grid-cols-4 border-b border-violet-200 p-2">
                    <div className="">{expense.name}</div>
                    <div className="">${expense.amount}</div>
                    <div className="">
                        {moment(expense.created_at).format("L")}
                    </div>
                    <div className="">
                        <Trash
                            className="text-red-500 cursor-pointer"
                            onClick={(e) => DeleteExpense(expense.id, e)}
                        />
                    </div>
                </div>
            ))}
            <Toaster />
        </div>
    );
}

export default ExpenseList;
