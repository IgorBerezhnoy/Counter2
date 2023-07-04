import React from 'react';
import {Desk2} from './Desk2/Desk2';
import {Button2} from './Buttons2/Button2';

export const Counter2 = () => {
    return (
        <div className={"wrapper"}>
            <div className={"desk"}>
                <Desk2/>
            </div>
            <div className={"buttons"}>
            <Button2/>
            <Button2/>
            </div>
        </div>
    );
};

