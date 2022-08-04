import React from 'react';

const Testing = (props) => {
    console.log(props);
    return (
        <div>
            <h4> {props.arr[0].country}</h4>
        </div>
    );
};

export default Testing;