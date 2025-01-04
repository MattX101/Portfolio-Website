import React from 'react';
import TxtBase from '../../../../elements/text/TxtBase.tsx';

const tab = 'p-2 w-full rounded-2xl relative float-left ';
const colors = 'bg-primary-lightHighlight-s2l3 dark:bg-primary-darkHighlight-s2l3 ';
const hover = 'hover:bg-primary-lightHighlight-s1l6 dark:hover:bg-primary-darkHighlight-s1l1 ';
const skillStyle = tab + colors + hover;

const ThirdSplit = ({ a, b, c }) => {
    return (
        <div className='gap-4 grid grid-cols-3 grid-rows-1 mx-8 my-2 overflow-hidden'>
            <TxtBase>
                <div className={skillStyle}>{a}</div>
            </TxtBase>
            <TxtBase>
                <div className={skillStyle}>{b}</div>
            </TxtBase>
            <TxtBase>
                <div className={skillStyle}>{c}</div>
            </TxtBase>
        </div>
    )
}

export default ThirdSplit