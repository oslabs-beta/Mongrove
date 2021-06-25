import React, { useEffect } from 'react';
const d3 = require('d3');

const Chart = props => {
  let data = [];
  useEffect(() => {
    data = [];
    let maxTime = 0;
    for (let i = 0; i < props.testQueriesList.length; i++) {
      maxTime = Math.max(maxTime, props.testQueriesList[i].time);
      data.push({
        name: props.testQueriesList[i].name,
        time: props.testQueriesList[i].time
      });
    }
    d3.select('#chart').selectAll('*').remove()

    const svg = d3.select("#chart")
                  .append("svg")
                  .attr("width", 700)
                  .attr("height", 400)
                  .style("margin-left", 30);

                  
    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", (element, index) => index * 70)
       .attr("y", (element, index) => 400 - (element.time/maxTime) * 400)
       .attr("width", 65)
       .attr("height", (element, index) =>`${((element.time/maxTime) * 100)}%`)
       .attr("fill", "green")
  }) 
    
  return (
    <div id="chart" className="mainAreaComponents">This is the chart</div>
  )
}

export default Chart;