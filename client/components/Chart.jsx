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
        time: props.testQueriesList[i].time,
        order: i
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
    
    d3.select("#checkSort").on("change", function() {
      const sortByTime = (a, b) => b.time - a.time;
      const sortByOrder = (a, b) => a.order - b.order;
      
      this.checked ? data.sort(sortByTime) : data.sort(sortByOrder);

      let queryOrder = data.map(el => el.name);
      console.log('queryOrder: ', queryOrder);

      bandScale.domain(queryOrder)
      svg.transition()
         .duration(500)
         .selectAll("rect,text")
         .attr("x", (element, index) => bandScale(element.name))
         .delay((element, index) => index * 50)
         
    })
  }) 
    
  return (
    <div className="mainAreaComponents">
      <div id="chart"  ref={div}>
      </div>
      <label><input id="checkSort" type="checkbox"/>Sort by time</label>
    </div>
  )
}

export default Chart;