import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

interface MethodComplexity {
  methodName: string;
  timeComplexity: string;
  spaceComplexity: string;
  cyclomaticComplexity: number;
}

interface AnalysisData {
  methodComplexities: MethodComplexity[];
}

// Function to convert Big O to numeric for chart scaling
const complexityToValue = (notation: string): number => {
  switch (notation.toLowerCase()) {
    case "o(1)": return 1;
    case "o(log n)": return 2;
    case "o(n)": return 3;
    case "o(n log n)": return 4;
    case "o(n^2)": return 5;
    case "o(2^n)": return 6;
    case "o(n!)": return 7;
    default: return 0;
  }
};

const ComplexityCharts: React.FC<{ data: AnalysisData }> = ({ data }) => {
  const chartSettings = {
    margin: { top: 20, right: 30, left: 20, bottom: 5 },
    barSize: 40,
  };

  const timeData = data.methodComplexities.map((method) => ({
    name: method.methodName,
    Complexity: complexityToValue(method.timeComplexity),
    Label: method.timeComplexity,
  }));

  const spaceData = data.methodComplexities.map((method) => ({
    name: method.methodName,
    Complexity: complexityToValue(method.spaceComplexity),
    Label: method.spaceComplexity,
  }));

  const cyclomaticData = data.methodComplexities.map((method) => ({
    name: method.methodName,
    Complexity: method.cyclomaticComplexity,
  }));

  return (
    <div className="space-y-12 p-6">

      {/* Time Complexity Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🕒 Method-wise Time Complexity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={timeData} {...chartSettings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(_, __, props) => [props.payload.Label, "Time Complexity"]} />
            <Bar dataKey="Complexity" fill="#8884d8">
              <LabelList dataKey="Label" position="top" style={{ fontWeight: "bold" }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Space Complexity Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🧠 Method-wise Space Complexity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={spaceData} {...chartSettings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(_, __, props) => [props.payload.Label, "Space Complexity"]} />
            <Bar dataKey="Complexity" fill="#82ca9d">
              <LabelList dataKey="Label" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Cyclomatic Complexity Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-4"> Method-wise Cyclomatic Complexity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cyclomaticData} {...chartSettings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Complexity" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplexityCharts;
