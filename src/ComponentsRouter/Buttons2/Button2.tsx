import React from 'react';

type PropsType={
    name:string
    onClick:()=>void
    disabled:boolean
    className:string
}

export const Button2:React.FC<PropsType> = (props) => {
    const onClickHandler = () => {
      props.onClick()
    }

    return (
        <button className={props.className} onClick={onClickHandler} disabled={props.disabled}>
            {props.name}
        </button>
    );
};

