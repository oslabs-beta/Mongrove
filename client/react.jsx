import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Index = () => {
    return (
     <div> Hello Reacts!
         <button onClick={() => console.log('hello')}>Test</button>
     </div>
    )
};

ReactDOM.render(<Index />, document.getElementById('app'));