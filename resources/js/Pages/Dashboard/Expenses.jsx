import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import BudgetItem from "@/Components/dashboard/budget/BudgetItem";
import { Head, router, useForm } from "@inertiajs/react";
import AddExpense from "@/Components/dashboard/expenses/AddExpense";
import ExpenseList from "@/Components/dashboard/expenses/ExpenseList";
import { Button } from "@/Components/ui/button";
import { Delete, Trash } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Toaster, toast } from "sonner";
import EditBudget from "@/Components/dashboard/budget/EditBudget";

function Expenses({ auth, budget }) {
    const { post } = useForm();
    const DeleteBudget = (e) => {
        e.preventDefault();
        post(`/dashboard/budget/delete/${budget.id}`, {
            onSuccess: () => {
                toast("Budget deleted successfully");
            },
        });
    };
    return (
        <Authenticated user={auth.user}>
            <Head title="My expenses" />
            <div className="p-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold">My expenses</h2>

                    <div className="flex gap-2 items-center">
                        <EditBudget budget={budget} />
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" className="gap-1">
                                    <Trash size={16} />
                                    Delete Budget
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you absolutely sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete budget and its
                                        expenses
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={(e) => DeleteBudget(e)}
                                    >
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-10">
                    <BudgetItem budget={budget} />
                    <AddExpense budget={budget} />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Latest Expenses</h2>
                    <ExpenseList budget={budget} />
                </div>
            </div>
            <Toaster />
        </Authenticated>
    );
}

export default Expenses;
