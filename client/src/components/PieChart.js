import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <Pie
            data={chartData}
            options={{
                responsive: true,
                aintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 20,
                            padding: 10,
                            font: {
                                size: 14,
                            }
                        }
                    }
                }
            }}
        />
    );
}

export default PieChart;