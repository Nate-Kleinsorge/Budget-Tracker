import React, { useState } from 'react';
import { BarChartData } from "../Data";
import { IncomeData } from "../Data";
import { ExpenseData } from "../Data";
import { BarChart } from "../components/BarChart";
import PieChart from "../components/PieChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import '../';

Chart.register(CategoryScale);

export default function Dashboard () {

    const [barData, setBarData] = useState({
        
        labels: BarChartData.map((data) => data.period),
        datasets: [
          {
            label: "  Income",
            data: BarChartData.map((data) => data.monthlyIncome),
            backgroundColor: [
                'rgba(54, 162, 235, 1)'
            ],
          },
          {
            label: "  Expenses",
            data: BarChartData.map((data) => data.monthlyExpenses),
            backgroundColor: [
                'rgba(255, 99, 132, 1)'
            ],
            }
        ]
    });

    const [incData, setIncData] = useState({
        
        labels: IncomeData.map((data) => data.incomeCategory),
        datasets: [{
            label: "  2023 YTD",
            data: IncomeData.map((data) => data.totalAmount),
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 2,
        }]
    });

    const [expData, setExpData] = useState({
        
        labels: ExpenseData.map((data) => data.expenseCategory),
        datasets: [{
            label: "  2023 YTD",
            data: ExpenseData.map((data) => data.totalAmount),
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(170, 222, 167)',
                'rgba(88, 80, 141)'
            ],
            borderWidth: 2,
        }]
    });
    
    return (
        <div className="charts-container py-5 d-flex justify-content-center">
            <div className="py-5 w-75">
                <div className="text-center col-12">
                    <h2>Monthly Income and Expense Totals</h2>
                    <h6 className="mb-4">Comparison of income and expnses by month for year 2023</h6>
                    <BarChart chartData={barData} />
                </div>
                <div className="d-flex flex-wrap mt-5 justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-5">
                        <h2>Income Details</h2>
                        <h6 className='pb-4'>Year to date income totals by category</h6>
                        <PieChart chartData={incData} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-5">
                        <h2>Expense Details</h2>
                        <h6 className='pb-4'>Year to date expense totals by category</h6>
                        <PieChart chartData={expData} />
                    </div>
                </div> 
            </div>
        </div>
    );

}