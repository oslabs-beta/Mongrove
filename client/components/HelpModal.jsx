import React from 'react'
import * as ReactDOM from 'react-dom'
import '../stylesheets/styles.scss'

// this component renders in a new browser window when NavBar help button is clicked
const HelpModal = () => {
  return (
    <div id="helpModalwindow">
      <h3> INSTRUCTIONS </h3>

      <div class="modal-content">
        <h4 class="modal-text-heading"> Schema Creation </h4>
          <lh class="modal-text-subheading">To input a schema:</lh>
        <ol class="modal-text">
          <li> Name your schema in the <i>Enter Schema Name</i> field for quick referencing.</li>
          <li> Type a schema into the code editor provided right under the label that says <i>Enter Schema here:</i>. Make sure the field name you are entering has no spaces or special characters like dashes <i>(ex: '-')</i>. Use camelCase instead. </li>
          <li>Currently supported data types are: <strong>String</strong>, <strong>Number</strong>, <strong>Boolean</strong>, <strong>Date</strong>, <strong>Array</strong> and <strong>Decimal128</strong></li>
          <li> Click the <strong>Save Schema</strong> button to save your schema. Now, you can move on to the Test Database Configuration area.</li>
        </ol>

        <h4 class="modal-text-heading"> Test Database Configuration </h4>
          <lh class="modal-text-subheading">To generate a test database:</lh>
        <ol class="modal-text">
          <li> Enter a <i>Test Database Name</i> for the test database you want to generate. </li>
          <li>Choose a schema from the <i>Select Schema Name</i> drop down.</li>
          <li>Specify the number of documents you want to generate test data for under the <i>Enter Number of Documents</i> label.</li>
        </ol>

        <h4 class="modal-text-heading"> Query Creation </h4>
          <lh class="modal-text-subheading">To run queries in a specific test database:</lh>
        <ol class="modal-text">
          <li>Select a database that you want to run a query for using the <i>Select Database</i> drop down.</li>
          <li>Enter a <strong>Query Name</strong> for the database you want to generate.</li>
          <li>Enter your mongoose query in the code editor provided.</li>
          <li>Click the <strong>'Run Query'</strong> button, and you should be able to see your query result pop up in the Results Area with data and metrics such as query runtime and query throughput.</li>
        </ol>
      </div>
    </div>
  )
}

ReactDOM.render(<HelpModal />, document.getElementById('helpModal'))
