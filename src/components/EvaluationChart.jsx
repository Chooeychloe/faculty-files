import React from "react";
import { Bar } from "react-chartjs-2";
import { TrendingUp } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function EvaluationChart({ name, evaluationScores, evaluationLabels }) {
  const evaluationData = {
    labels: evaluationLabels || [],
    datasets: [
      {
        label: "Student Evaluation Score",
        data: evaluationScores || [],
        backgroundColor: "rgba(160, 0, 0,1)",
        borderColor: "rgba(255, 255,255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const evaluationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          generateLabels: (chart) => {
            const scoreMeanings = {
              5: "5 - Very Satisfactory",
              4: "4 - Satisfactory",
              3: "3 - Fair",
              2: "2 - Unsatisfactory",
              1: "1 - Very Unsatisfactory",
            };
            const dataset = chart.data.datasets[0];
            return [
              {
                text: "Student Evaluation Score:",
                fillStyle: dataset.backgroundColor,
                strokeStyle: dataset.borderColor,
                lineWidth: dataset.borderWidth,
                hidden: false,
                fontColor: ChartJS.defaults.color,
              },
              ...Object.entries(scoreMeanings).map(([score, meaning]) => ({
                text: meaning,
                fillStyle: "transparent",
                strokeStyle: "transparent",
                fontColor: ChartJS.defaults.color,
                index: parseInt(score),
              })),
            ];
          },
          font: {
            size: 10,
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: "Student Evaluation for Teachers",
        color: "#333",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: "Score",
        },
      },
      x: {
        title: {
          display: true,
          text: "Evaluation Period",
        },
      },
    },
  };

  return (
    <div className="p-6 bg-amber-50 rounded shadow font-funnel">
      <Bar data={evaluationData} options={evaluationOptions} />
      <h1 className="text-red-900 font-bold text-xl mt-4 flex justify-center items-center gap-2">
        <TrendingUp className="h-6 w-6 text-red-900" />
        Student Evaluation for {name}
      </h1>
    </div>
  );
}

export default EvaluationChart;