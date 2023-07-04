import React, {useState} from 'react';
import {Desk2} from './Desk2/Desk2';
import {Button2} from './Buttons2/Button2';
import s from './counter.module.css';

export const Counter2 = () => {
    let minNum = 0;
    let maxNum = 5;

    const [num, setNum] = useState(minNum);


    const onclickInc = () => {
        if (maxNum > num) {
            setNum(num + 1);
        }
    };
    const onclickRest = () => {
        if (num !== minNum) {
            setNum(minNum);
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div className={s.desk}>
                    <Desk2 title={num.toString()}/>
                </div>
                <div className={s.buttons}>
                    <Button2 className={s.button} name={'inc'} onClick={onclickInc} disabled={maxNum <= num}/>
                    <Button2 className={s.button} name={'reset'} onClick={onclickRest} disabled={num == minNum}/>
                </div>
            </div>
        </div>
    );
};

