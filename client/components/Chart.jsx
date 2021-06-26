import React, { useEffect, useRef } from 'react';
const d3 = require('d3');

const Chart = props => {
  let div = useRef(null);
  let data = [];
  useEffect(() => {
    data = [];
    let maxTime = 0;
    for (let i = 0; i < props.testQueriesList.length; i++) {
      maxTime = Math.max(maxTime, props.testQueriesList[i].time);
      data.push({
        name: props.testQueriesList[i].queryName,
        time: props.testQueriesList[i].time
      });
    }
    d3.select('#chart').selectAll('*').remove()
    let h = 400;
    let w = div.current.offsetWidth;
    console.log('width', div.current.offsetWidth);
    const svg = d3.select("#chart")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .style("margin-left", -15);

    const names = data.map(el => el.name);

    let bandScale = d3.scaleBand()
                      .domain(names)
                      .range([0, w])
                      .padding(0.1)

    let heightScale = d3.scaleLinear()
                        .domain([0,maxTime])
                        .range([0, 0.9 * h])
    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", (element, index) => bandScale(element.name))
       .attr("y", (element, index) => h - heightScale(element.time))
       .attr("width", (element, index) => bandScale.bandwidth())
       .attr("height", (element, index) => heightScale(element.time))
       .attr("fill", "green")
  
    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .text(element => element.time)
       .attr("x", (element, index) => bandScale(element.name))
       .attr("y", (element, index) => h - heightScale(element.time) - 3)
    
       
  }) 
    
  return (
    <div id="chart" className="mainAreaComponents" ref={div}></div>
  )
}

export default Chart;