import React from 'react';

const GeneralInfo = (props) => {
    const {info} = props;
    console.log(info);
    return (
        <ul>
            <li>{info.first} {info.last}</li>
            <li>{info.email}</li>
            <li>{info.phone}</li>
        </ul>
    );
}

export default GeneralInfo;