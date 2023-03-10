import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {
    return (
        <Bar
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: true,
                categoryPercentage: 0.7,
                barPercentage: 0.95,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 30,
                            padding: 20,
                            font: {
                                size: 14,
                            }
                        }
                    }
                },
                scales: {
                    y: {
                      min: 0,
                      max: 10000,
                      ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return '$ ' + value;
                        }
                    }
                    }
                }
            }}
        />
    );
};
