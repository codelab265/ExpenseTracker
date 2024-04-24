import BarChartDashboard from "@/Components/BarChartDashboard";
import CardInfo from "@/Components/CardInfo";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import BudgetItem from "@/Components/dashboard/budget/BudgetItem";

export default function Dashboard({
    auth,
    totalBudget,
    totalSpend,
    numberOfBudgets,
    budgets,
}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="p-10">
                <div className="">
                    <h2 className="font-bold text-3xl">
                        Hi, {auth?.user.name}
                    </h2>
                    <p className="text-gray-500">
                        Here's what happening with your money. Lets manage your
                        expenses
                    </p>
                </div>

                <div className="mt-7">
                    <CardInfo
                        totalBudget={totalBudget}
                        totalSpend={totalSpend}
                        numberOfBudgets={numberOfBudgets}
                    />
                </div>
                <div className="mt-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="md:col-span-2">
                            <BarChartDashboard budgetList={budgets} />
                        </div>
                        <div className="flex flex-col gap-5">
                            {budgets.map((budget) => (
                                <BudgetItem
                                    budget={budget}
                                    key={budget.id}
                                    onclick={() => {
                                        router.visit(
                                            route("dashboard.expenses", {
                                                id: budget.id,
                                            })
                                        );
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
