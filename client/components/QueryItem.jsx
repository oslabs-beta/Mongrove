import React from 'react'

// create QueryItem to display each inputted query QueryPanel
// each QueryItem can be individually clicked to toggle display/hide that query's results
const QueryItem = (props) => {
  /* when clicked, QueryItem appearance changes to active and that query's results show in query panel */
  return (
    <div
      onClick={() => {
        return props.handleActivateQuery(props.id, props.activeStatus)
      }}
      id="queryItem"
      className={props.activeStatus ? 'active' : 'inactive'}
    >
      <span className="itemName">
        <p>{props.testQueryName}</p>
      </span>
    </div>
  )
}

export default QueryItem
