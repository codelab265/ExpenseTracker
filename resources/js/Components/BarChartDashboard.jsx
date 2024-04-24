import React from "react";
import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function BarChartDashboard({ budgetList }) {
    return (
        <div className="border rounded-lg p-7">
            <h2 className="font-medium">Activities</h2>
            <ResponsiveContainer width={"100%"} height={400}>
                <BarChart data={budgetList}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalSpent" stackId="a" fill="#4845d2" />
                    <Bar dataKey="amount" stackId="a" fill="#c3c2ff" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartDashboard;
