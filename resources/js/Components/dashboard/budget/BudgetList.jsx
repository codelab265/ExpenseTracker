import React from "react";
import CreateBudget from "./CreateBudget";
import BudgetItem from "./BudgetItem";
import { router } from "@inertiajs/react";

function BudgetList({ budgets }) {
    return (
        <div className="mt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <CreateBudget />

                {budgets.map((budget) => (
                    <BudgetItem
                        budget={budget}
                        key={budget.id}
                        onclick={() => {
                            router.visit(
                                route("dashboard.expenses", { id: budget.id })
                            );
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default BudgetList;
