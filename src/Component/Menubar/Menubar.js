import React from 'react';

const Menubar = ({person}) => {
    // let {person} = props
    // console.log(props);
    return (
        <div>
            <div className="container">
                <ul className='menu'>
                    {/* <li>{props.person}</li> */}
                    <li>Home {person}</li>
                    <li>About </li>
                    <li>Cart </li>
                    <li>Login </li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;