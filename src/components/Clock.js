import React from 'react';




  function Clock() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    //ReactDOM.render(element, document.getElementById('root'));
}

//how do we get this clock to update? ?
export default Clock;