import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import React from "react";

function CardInfo({ totalBudget, totalSpend, numberOfBudgets }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex items-center justify-between rounded-lg border p-7 bg-violet-50">
                <div className="">
                    <h2 className="text-sm">Total Budget</h2>
                    <h2 className="text-2xl font-bold">${totalBudget}</h2>
                </div>
                <div className="p-2 bg-primary w-10 h-10 rounded-full ">
                    <PiggyBank className="text-violet-100" />
                </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-7 bg-violet-50">
                <div className="">
                    <h2 className="text-sm">Total Spent</h2>
                    <h2 className="text-2xl font-bold">${totalSpend}</h2>
                </div>
                <div className="p-2 bg-primary w-10 h-10 rounded-full ">
                    <ReceiptText className="text-violet-100" />
                </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-7 bg-violet-50">
                <div className="">
                    <h2 className="text-sm">No. of Budget</h2>
                    <h2 className="text-2xl font-bold">{numberOfBudgets}</h2>
                </div>
                <div className="p-2 bg-primary w-10 h-10 rounded-full ">
                    <Wallet className="text-violet-100" />
                </div>
            </div>
        </div>
    );
}

export default CardInfo;
