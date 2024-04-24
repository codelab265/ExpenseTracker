import { Button } from "@/Components/ui/button";
import { useForm } from "@inertiajs/react";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";
import { Input } from "@/Components/ui/input";

function AddExpense({ budget }) {
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            amount: "",
            budget_id: budget.id,
        });

    const createExpense = (e) => {
        e.preventDefault();
        clearErrors();
        post(`/dashboard/expenses/${budget.id}`, {
            onSuccess: () => {
                reset();
                toast("expense created successfully");
            },
        });
    };
    return (
        <div>
            <h2 className="font-bold text-lg">Add Epense</h2>
            <form onSubmit={createExpense}>
                <div className="mt-5">
                    <div className="mt-5">
                        <label className="font-medium text-black">Name</label>
                        <Input
                            placeholder="e.g shoes"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="mt-5">
                        <label className="font-medium text-black">Amount</label>
                        <Input
                            placeholder="e.g 5000"
                            type="number"
                            value={data.amount}
                            onChange={(e) => setData("amount", e.target.value)}
                        />
                        {errors.amount && (
                            <div className="text-red-500 text-sm">
                                {errors.amount}
                            </div>
                        )}
                    </div>
                    <div className="mt-5">
                        <Button
                            size="lg"
                            className="w-full"
                            type="submit"
                            disabled={processing}
                        >
                            Create
                        </Button>
                    </div>
                </div>
            </form>
            <Toaster />
        </div>
    );
}

export default AddExpense;
