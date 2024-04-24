import BudgetList from "@/Components/dashboard/budget/BudgetList";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
function Budget({ auth, budgets }) {
    return (
        <Authenticated user={auth.user}>
            <Head title="My budgets" />
            <div className="p-10">
                <h2 className="text-3xl font-bold">My budgets</h2>
                <BudgetList budgets={budgets} />
            </div>
        </Authenticated>
    );
}

export default Budget;
