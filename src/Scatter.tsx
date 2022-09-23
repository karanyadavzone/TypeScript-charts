import ReactECharts from "echarts-for-react";
import data from "./data";

export default function Scatter() {
  // To get colour intensity object from the data provided , we are using map function to return the values required
  const colourIntensity = data.map((item) => {
    return item["Color intensity"];
  });
  // To get hue object from the data provided , we are using map function to return the values required
  const hue = data.map((item) => {
    return item.Hue;
  });

  const options = {
    grid: { top: 8, right: 10, bottom: 46, left: 36 },
    xAxis: {
      type: "category",
      data: colourIntensity,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: hue,
        type: "scatter",
        smooth: true,
        itemStyle: {
          color: '#3953FF'
        }
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <>
      <h1>A SCATTER PLOT</h1>
      <ReactECharts option={options} />
    </>
  );
}
