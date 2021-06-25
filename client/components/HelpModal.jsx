import React from 'react';
import * as ReactDOM from 'react-dom';

//new browser window opens when navbar help button is clicked

const HelpModal = () => {
  return (
    <div id="helpModal">
      <h3> INSTRUCTIONS </h3>

      {/* <div class="modal-media">

      </div> */}

      <div class="modal-content">
        <h4 class="modal-text-heading"> Schema Creation Zone </h4>
        <h6 class="modal-text-subheading">To input a schema:</h6>
        <p class="modal-text">
          1.  Name your schema in the <i>Enter Schema Name</i> field for quick referencing.
          2.  Type a schema into the code editor provided right under the label that says <i>Enter Schema here:</i>. Make sure the field name you are entering has no spaces or special characters like dashes <i>(ex: '-')</i>. Use camelCase instead. 
          3.  Click the <strong>Save Schema</strong> button to save your schema. Now, you can move on to the Test Database Configuration area.
        </p>

        <h4 class="modal-text-heading"> Test Database Configuration </h4>
        <h6 class="modal-text-subheading">To generate a test database:</h6>
        <p class="modal-text">
          1.  Enter a <i>Test Database Name</i> for the test database you want to generate. 
          2.  Choose a schema from the <i>Select Schema Name</i> drop down.
          3.  Specify the number of documents you want to generate test data for under the <i>Enter Number of Documents</i> label.
        </p>

        <h4 class="modal-text-header"> Query Creation Area </h4>
        <h6 class="modal-text-subheading">To run queries in a specific test database:</h6>
        <p class="modal-text"> 
          1.  Select a database that you want to run a query for using the <i>Select Database</i> drop down.
          2.  Enter a <strong>Query Name</strong> for the database you want to generate.
          3.  Enter your mongoose query in the code editor provided.
          4.  Click the <strong>'Run Query'</strong> button, and you should be able to see your query result pop up in the Results Area with data and metrics such as query runtime and query throughput.
        </p>
      </div>
    </div>
  )
}

ReactDOM.render( <HelpModal />, document.getElementById('helpModal'));
