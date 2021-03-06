import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join( ' ' );
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classses = ['red'];
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold'];
    }

    return (
        <>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </>
    );
};

export default React.memo(cockpit);