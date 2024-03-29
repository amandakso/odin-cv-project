import React from 'react';

const GeneralInfo = (props) => {
    const {info} = props;
    return (
        <ul className="generalInfo">
            <li>{info.first} {info.last}</li>
            <li>{info.email}</li>
            <li>{info.phone}</li>
        </ul>
    );
}

export default GeneralInfo;