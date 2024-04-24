import { router } from "@inertiajs/react";
import React from "react";

function budgetItem({ budget, onclick }) {
    const { name, amount, icon, expenses_sum_amount, expenses } = budget;
    const usedAmount = expenses_sum_amount ? expenses_sum_amount : 0;
    const remainingAmount = amount - expenses_sum_amount;
    const totalExpenses = expenses.length;
    const percentage = () => {
        const perc = Math.round((usedAmount / amount) * 100);
        return perc.toFixed(2);
    };
    return (
        <div
            className="p-5 border rounded-lg cursor-pointer hover:bg-violet-50 transition-all duration-300 h-[170px]"
            onClick={onclick}
        >
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="text-2xl p-3 bg-violet-100 rounded-full">
                        {icon}
                    </div>
                    <div className="">
                        <h2 className="font-bold">{name}</h2>
                        <h2 className="text-sm text-gray-500">
                            {totalExpenses} items
                        </h2>
                    </div>
                </div>
                <div className="text-lg font-bold text-primary">${amount}</div>
            </div>
            <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xs text-violet-400">
                        ${usedAmount} Spent
                    </h2>
                    <h2 className="text-xs text-violet-400">
                        ${remainingAmount} Remaining
                    </h2>
                </div>
                <div className="w-full bg-violet-300 h-2 rounded-full">
                    <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                            width: `${percentage()}%`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default budgetItem;
