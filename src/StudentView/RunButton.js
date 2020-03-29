import React from 'react';

function RunButton(props) {

    function handleClick(e) {
        e.preventDefault();
        const script = props.content;
        let main = Function("return " + script)(); // Could be risky to do this, but let's assume no one is malicious.
        test(main); // Eventually should make sure the user has not changed the function name.
    }

    function test(main) {
        let input = [1, 5, 4, 3, 2];
        let output = 5; //CHANGE THIS LATER
        console.log(main(input));
        if(main(input) === output) {
            console.log("It works");
            props.setCorrect(true);
            
            //.then(result=>result.json()).then(res=>console.log(res));
        } else {
            props.setCorrect(false);
            console.log("It doesn't work.")
        }
        props.togglePopup();
    }

    return (
    <button id="run-button" className="pure-material-button-contained" onClick={handleClick}>
        Run
        </button>
    );
}

export default RunButton;
