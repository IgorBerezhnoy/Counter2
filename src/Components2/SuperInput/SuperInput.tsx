import React, {ChangeEvent} from 'react';
import s from './../counter.module.css';
type PropsType = {
    title: string
    startNum: number
error:boolean
    setStartNum: (num: number) => void
}

export const SuperInput: React.FC<PropsType> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartNum(Number(e.currentTarget.value));
    };
    return (
        <div>{props.title} <input className={props.error?s.errorInput:s.inputDefault} value={props.startNum.toString()} type={'number'} onChange={onChangeHandler}/></div>
    );
};

