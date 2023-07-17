import React, {useEffect, useState} from 'react';
import {Desk2} from './Desk2/Desk2';
import {Button2} from './Buttons2/Button2';
import s from './counter.module.css';
import {SuperInput} from './SuperInput/SuperInput';
import { NavLink, Route, Routes} from 'react-router-dom';

export const CounterRouter = () => {
    let [minNum, setMinNum] = useState(0);
    let [maxNum, setMaxNum] = useState(5);
    let [minNumForSetting, setMinNumForSetting] = useState(minNum);
    let [maxNumForSetting, setMaxNumForSetting] = useState(maxNum);

    let [errorOnOf, setErrorOnOf] = useState<boolean>(false);

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
    const onclickSet = () => {
        if (minNumForSetting < maxNumForSetting && minNumForSetting >= 0) {
            setMinNum(minNumForSetting);
            setMaxNum(maxNumForSetting);
            setNum(minNumForSetting);


        }
    };
    useEffect(() => {
        let localNum = localStorage.getItem('numR');
        let localMaxNum = localStorage.getItem('maxNumR');
        let localMinNum = localStorage.getItem('minNumR');
        let localMinNumForSetting = localStorage.getItem('minNumForSettingR');
        let localMaxNumForSetting = localStorage.getItem('maxNumForSettingR');
        if (localNum && localMaxNum && localMinNum && localMaxNumForSetting && localMinNumForSetting) {
            setNum(JSON.parse(localNum));
            setMaxNum(JSON.parse(localMaxNum));
            setMinNum(JSON.parse(localMinNum));
            setMinNumForSetting(JSON.parse(localMinNumForSetting));
            setMaxNumForSetting(JSON.parse(localMaxNumForSetting));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('numR', JSON.stringify(num));
        localStorage.setItem('minNumR', JSON.stringify(minNum));
        localStorage.setItem('maxNumR', JSON.stringify(maxNum));
        localStorage.setItem('minNumForSettingR', JSON.stringify(minNumForSetting));
        localStorage.setItem('maxNumForSettingR', JSON.stringify(maxNumForSetting));
    }, [num, maxNum, minNum]);


    useEffect(() => {
        if (minNumForSetting < 0 || maxNumForSetting < 0 || minNumForSetting >= maxNumForSetting) {
            setErrorOnOf(true);
        } else {
            setErrorOnOf(false);
        }
    },[minNumForSetting,maxNumForSetting])


    return (
        <div className={s.wrapper}>
            <Routes>
                <Route path={"/setting"} element={<div className={s.settings}>
                    <div className={s.deskSettings}>
                        <SuperInput title={'max value'} startNum={maxNumForSetting}
                                    setStartNum={setMaxNumForSetting}
                                    error={errorOnOf}/>
                        <SuperInput title={'start value'} startNum={minNumForSetting}
                                    setStartNum={setMinNumForSetting}
                                    error={errorOnOf}/>

                    </div>
                    <div className={s.buttons}>
                        <NavLink to={"/"}><Button2 className={s.button} name={'set'} onClick={onclickSet}
                                    disabled={!(minNumForSetting < maxNumForSetting && minNumForSetting >= 0)}/></NavLink>
                    </div>
                </div>}>

                </Route>
                <Route path={"/"} element={<div className={s.counter}>
                    <div className={s.desk}>
                        <Desk2 title={ num.toString()}
                               className={s.deskText}/>
                    </div>
                    <div className={s.buttons}>
                        <Button2 className={s.button} name={'inc'} onClick={onclickInc} disabled={maxNum <= num}/>
                        <Button2 className={s.button} name={'reset'} onClick={onclickRest}
                                 disabled={num == minNum}/>
                        <NavLink to={"/setting"}><Button2 className={s.button} name={'set'} onClick={() => {
                        }} disabled={false}/></NavLink>
                    </div>
                </div>}>


                </Route>
            </Routes>
        </div>
    );
};

