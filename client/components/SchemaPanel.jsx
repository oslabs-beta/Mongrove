import React, { useState } from 'react';
import SchemaItem from './SchemaItem.jsx';

const SchemaPanel = (props) => {
  // // use state to populate schemas to display here
  // const state = {
  //     schemaNameList: [], 
  // }
  // const [currentState, setState] = useState(state);

  // array to hold saved schema items
  const schemaItemsList = [];
  for (let i = 0; i < props.schemaList.length; i++) {
    schemaItemsList.push(
      <SchemaItem 
        schemaName={props.schemaList[i].name}
        key={i}
        id={i}
      />
    )
  }

  return (
    <div id="schemaPanel" className="sidePanel">
      <h3> SCHEMAS </h3>

      <div id="schemaList">
        {schemaItemsList}
      </div>
    </div>
  )
}

export default SchemaPanel;