import ReactECharts from "echarts-for-react";
import data from "./data";

export default function Bar() {
  // To get the Alcohol object from the dataset provided we are using map function.
  const alcohol = data.map((item) => {
    return item.Alcohol;
  });
  // To get the Malic Acid from the dataset provided we are using map function.

  const malicAcid = data.map((item) => {
    return item["Malic Acid"];
  });
  const options = {
    grid: { top: 8, right: 10, bottom: 46, left: 36 },
    xAxis: {
      type: "category",
      data: alcohol
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: malicAcid,
        type: "bar",
        smooth: true,
        itemStyle: {
          color: '#A99EFF'
        }
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  };
  return(
    <> 
    <h1>BAR CHART</h1>
    <ReactECharts option={options} />
    </>
    );
}
