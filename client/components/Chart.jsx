import React, { useEffect, useRef } from 'react'
const d3 = require('d3')

// create Chart component to display results as a chart using D3
const Chart = props => {
  const div = useRef(null)
  let data = []
  useEffect(() => {
    data = []
    let maxTime = 0
    for (let i = 0; i < props.testQueriesList.length; i++) {
      maxTime = Math.max(maxTime, props.testQueriesList[i].time)
      if (props.testQueriesList[i].activeStatus) {
        data.push({
          name: props.testQueriesList[i].queryName,
          time: props.testQueriesList[i].time,
          order: i
        })
      }
    }
    d3.select('#chart').selectAll('*').remove()
    const h = 400
    const w = div.current.offsetWidth
    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('margin-left', -15)

    const names = data.map(el => el.name)

    const bandScale = d3.scaleBand()
      .domain(names)
      .range([0, w])
      .padding(0.1)

    const heightScale = d3.scaleLinear()
      .domain([0, maxTime])
      .range([0, 0.9 * h])

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (element, index) => bandScale(element.name))
      .attr('y', (element, index) => h - heightScale(element.time) - 20)
      .attr('width', (element, index) => bandScale.bandwidth())
      .attr('height', (element, index) => heightScale(element.time))
      .attr('fill', '#C15C2A')
      .append('title')
      .text((element) => element.name)

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(element => element.time)
      .attr('x', (element, index) => bandScale(element.name))
      .attr('y', (element, index) => h - heightScale(element.time) - 23)

    const xAxis = d3.axisBottom().scale(bandScale)
    const xAxisTranslate = h - 20
    svg.append('g')
      .attr('transform', `translate(0, ${xAxisTranslate})`)
      .style('margin-left', -30)
      .attr('id', 'x-axis')
      .call(xAxis)

    d3.select('#checkSort').on('change', function () {
      const sortByTime = (a, b) => a.time - b.time
      const sortByOrder = (a, b) => a.order - b.order

      this.checked ? data.sort(sortByTime) : data.sort(sortByOrder)

      const queryOrder = data.map(el => el.name)

      bandScale.domain(queryOrder)
      svg.transition()
        .duration(500)
        .selectAll('rect,text')
        .attr('x', (element, index) => bandScale(element.name))
        .delay((element, index) => index * 50)

      svg.select('#x-axis')
        .transition()
        .call(xAxis)
    })
  })

  return (
    <div className="mainAreaComponents">
      <h2>Query Data Visualization</h2>
      <div id="chart" ref={div}>
      </div>
      <label><input id="checkSort" type="checkbox"/>Sort by time</label>
    </div>
  )
}

export default Chart
