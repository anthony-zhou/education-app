import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function FindMax () {
    return (<div className="problem-statement">
    <h1>Maximum Practice</h1>
    <i><b>Skills practiced:</b> Array, Looping</i>
    <p>Find the maximum value in an array of integers using a <code>for</code> loop.</p>

    <h2>Input</h2>
    <p>An array of integers.</p>

    <h2>Output</h2>
    <p>The largest integer in the array.</p>

    <h2>Example</h2>
    <i>Input</i><br></br>
    <SyntaxHighlighter language="javascript" style={monokai}>[5, -4, 3, 1, 7]</SyntaxHighlighter><br/><br/>

    <i>Output</i><br></br>
    <SyntaxHighlighter language="javascript" style={monokai}>5</SyntaxHighlighter>

    <h2>Instructions:</h2>
    <p>Modify the main function to return the correct output.</p>
    <div className="tooltip">Hover here for a hint
        <span className="tooltiptext">Try storing the maximum value in a variable and updating it as you go along.</span>
    </div>
    </div>);
};

export default FindMax;

