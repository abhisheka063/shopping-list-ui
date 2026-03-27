import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { columnCurrencyFormatter } from "../../utils/ShoppingItemUtils";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

type BarChartProps = {
  labels: string[];
  data: number[];
  colors?: string;
  title?: string;
};

export const BarChart = ({
  labels,
  data,
  colors = "#36A2EB",
  title,
}: BarChartProps) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: colors,
      },
    ],
  };
  // Here used columnCurrencyFormatter to convert to indian currency
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      title: {
        display: !!title,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: (ctx: { raw: unknown }) =>
            columnCurrencyFormatter(ctx.raw as number),
        },
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        ticks: {
          callback: (value: unknown) =>
            columnCurrencyFormatter(Number(value)).toString(),
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};
