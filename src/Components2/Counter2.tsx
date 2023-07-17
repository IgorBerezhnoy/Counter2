import React, {JSX, useEffect, useState} from 'react';
import {Desk2} from './Desk2/Desk2';
import {Button2} from './Buttons2/Button2';
import s from './counter.module.css';
import {SuperInput} from './SuperInput/SuperInput';

export const Counter2 = () => {
    let [minNum, setMinNum] = useState(0);
    let [maxNum, setMaxNum] = useState(5);
    let [minNumForSetting, setMinNumForSetting] = useState(minNum);
    let [maxNumForSetting, setMaxNumForSetting] = useState(maxNum);
    const [num, setNum] = useState(minNum);

    let [messageOnOff, setMessageOnOff] = useState<boolean>(false);
    let [errorOnOf, setErrorOnOf] = useState<boolean>(false);


    let message = 'event values and press \'set\'';
    let error = 'Incorrect value!';

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
    const onclickSet = () => {
        if (minNumForSetting < maxNumForSetting && minNumForSetting >= 0) {
            setMinNum(minNumForSetting);
            setMaxNum(maxNumForSetting);
            setNum(minNumForSetting);
            setMessageOnOff(false);
        }
    };


    useEffect(() => {
        let localNum = localStorage.getItem('num');
        let localMaxNum = localStorage.getItem('maxNum');
        let localMinNum = localStorage.getItem('minNum');
        let localMinNumForSetting = localStorage.getItem('minNumForSetting');
        let localMaxNumForSetting = localStorage.getItem('maxNumForSetting');
        if (localNum && localMaxNum && localMinNum && localMaxNumForSetting && localMinNumForSetting) {
            setNum(JSON.parse(localNum));
            setMaxNum(JSON.parse(localMaxNum));
            setMinNum(JSON.parse(localMinNum));
            setMinNumForSetting(JSON.parse(localMinNumForSetting));
            setMaxNumForSetting(JSON.parse(localMaxNumForSetting));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('num', JSON.stringify(num));
        localStorage.setItem('minNum', JSON.stringify(minNum));
        localStorage.setItem('maxNum', JSON.stringify(maxNum));
        localStorage.setItem('minNumForSetting', JSON.stringify(minNumForSetting));
        localStorage.setItem('maxNumForSetting', JSON.stringify(maxNumForSetting));
    }, [num, maxNum, minNum,]);


    useEffect(() => {
        if (minNumForSetting < 0 || maxNumForSetting < 0 || minNumForSetting >= maxNumForSetting) {
            setErrorOnOf(true);
            setMessageOnOff(false);
        } else {
            setErrorOnOf(false);
            setMessageOnOff(true);
        }
    }, [minNumForSetting, maxNumForSetting]);


    return (
        <div className={s.wrapper}>

            <div className={s.settings}>
                <div className={s.deskSettings}>
                    <SuperInput title={'max value'} startNum={maxNumForSetting} setStartNum={setMaxNumForSetting}
                                error={errorOnOf}/>
                    <SuperInput title={'start value'} startNum={minNumForSetting} setStartNum={setMinNumForSetting}
                                error={errorOnOf}/>

                </div>
                <div className={s.buttons}>
                    <Button2 className={s.button} name={'set'} onClick={onclickSet}
                             disabled={!(minNumForSetting < maxNumForSetting && minNumForSetting >= 0)}/>
                </div>
            </div>
            <div className={s.counter}>
                <div className={s.desk}>
                    <Desk2 title={errorOnOf ? error : messageOnOff ? message : num.toString()}
                           className={errorOnOf ? s.errorMessage : messageOnOff ? s.messageOn : num == maxNum ? s.deskTextError : s.deskText}/>
                </div>
                <div className={s.buttons}>
                    <Button2 className={s.button} name={'inc'} onClick={onclickInc} disabled={maxNum <= num}/>
                    <Button2 className={s.button} name={'reset'} onClick={onclickRest} disabled={num == minNum}/>
                </div>
            </div>
        </div>
    );
};

