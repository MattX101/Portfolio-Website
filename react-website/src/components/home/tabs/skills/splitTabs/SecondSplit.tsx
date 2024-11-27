import React from 'react';
import TxtBase from '../../../../elements/text/TxtBase.tsx';

const tab = 'p-1 w-full rounded-2xl relative float-left bg-primary-light-s1l1 hover:font-bold hover:bg-primary-lightHighlight-s2l3';

const SecondSplit = ({ a, b }) => {
    return (
        <div className='gap-4 grid grid-cols-2 grid-rows-1 my-2 overflow-hidden'>
            <TxtBase>
                <div className={tab}>{a}</div>
            </TxtBase>
            <TxtBase>
                <div className={tab}>{b}</div>
            </TxtBase>
        </div>
    )
}

export default SecondSplit