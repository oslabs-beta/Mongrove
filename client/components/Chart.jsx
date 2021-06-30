import React, { useEffect, useRef } from 'react';
const d3 = require('d3');

const Chart = props => {
  let div = useRef(null);
  let data = [];
  useEffect(() => {
    data = [];
    // maxTime variable is declared to store the highest bar height and is used to scale other the bars in heightScale
    let maxTime = 0;
    // For each item in testQueriesList, populate the data array with its name, time and order
    for (let i = 0; i < props.testQueriesList.length; i++) {
      maxTime = Math.max(maxTime, props.testQueriesList[i].time);
      if (props.testQueriesList[i].activeStatus){
        data.push({
          name: props.testQueriesList[i].queryName,
          time: props.testQueriesList[i].time,
          // The order property stores the item's original position for sorting and unsorting
          order: i
        });
      }
    }
    // For each rerendering, delete the previous chart by selecting the element with the id 'chart' and invoking .remove()
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

    // Max value in height range is multiplied by 0.9 to account for text on top of each bar
    let heightScale = d3.scaleLinear()
                        .domain([0,maxTime])
                        .range([0, 0.9 * h])

    // Positions and styles each bar (rect) object in svg
    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", (element, index) => bandScale(element.name))
       .attr("y", (element, index) => h - heightScale(element.time) - 25)
       .attr("width", (element, index) => bandScale.bandwidth())
       .attr("height", (element, index) => heightScale(element.time))
       .attr("fill", "green")
       .append("title")
       .text((element) => element.name)
    
    // Adds response time text on top of each bar
    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .text(element => `${element.time} ms`)
       .attr("x", (element, index) => bandScale(element.name))
       .attr("y", (element, index) => h - heightScale(element.time) - 28)
       .style("font-weight", "bold")

    // Adds and positions the x-axis on the svg
    let xAxis = d3.axisBottom().scale(bandScale);
    let xAxisTranslate =  h - 25;
    svg.append("g")
       .attr("transform", `translate(0, ${xAxisTranslate})`)
       .style("margin-left", -30)
       .attr("id", "x-axis")
       .call(xAxis);
       
    // Adds style to the axis and text
    svg.selectAll("g")
       .select("path")
       .attr("stroke-width", "2px")
    svg.selectAll("#x-axis")
       .select("text")
       .style("font-size", "16px")
       .style("font-weight", "bold")

       
    // Selects the element id checkSort and changes the sorting callback function when checkbox is checked/unchecked
    d3.select("#checkSort").on("change", function() {
      const sortByTime = (a, b) => a.time - b.time;
      const sortByOrder = (a, b) => a.order - b.order;
      
      this.checked ? data.sort(sortByTime) : data.sort(sortByOrder);

      let queryOrder = data.map(el => el.name);

      bandScale.domain(queryOrder)
      // Adds sorting animation when checkbox is selected
      svg.transition()
         .duration(500)
         .selectAll("rect,text")
         .attr("x", (element, index) => bandScale(element.name))
         .delay((element, index) => index * 50)
      
      svg.select("#x-axis")
         .transition()
         .call(xAxis)
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