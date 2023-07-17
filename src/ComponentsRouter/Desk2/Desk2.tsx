import React from 'react';
import s from './../counter.module.css';

type PropsType={
    title:string
    className:string
}

export const Desk2:React.FC<PropsType> = (props) => {

    return (
        <div className={props.className}>
            {props.title}
        </div>
    );
};

