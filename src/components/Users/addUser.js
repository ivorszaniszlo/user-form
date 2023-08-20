import React from 'react';

const AddUser = props => {
    const AddUSerHandler = (event) => {
        event.PreventDefault();
    };

    return (  
        <form onSubmit={AddUSerHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add USer</button>
        </form>
    );
};
export default AddUser;