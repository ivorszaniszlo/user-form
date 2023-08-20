import React from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
    const AddUSerHandler = (event) => {
        event.PreventDefault();
    };

    return (  
        <Card className={classes.input}>
            <form onSubmit={AddUSerHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <button type="submit">Add USer</button>
            </form>
        </Card>
    );
};
export default AddUser;