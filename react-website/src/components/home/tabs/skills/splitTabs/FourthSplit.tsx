import React from 'react';
import TxtBase from '../../../../elements/text/TxtBase.tsx';

const tab = 'relative bg-primary-light-s1l1 hover:bg-primary-lightHighlight-s2l3 hover:font-bold w-full p-1 float-left rounded-2xl';

const FourthSplit = ({ a, b, c, d }) => {
    return (
        <div className='mx-8 my-2 overflow-hidden grid grid-cols-4 grid-rows-1 gap-4'>
            <TxtBase>
                <div className={tab}>{a}</div>
            </TxtBase>
            <TxtBase>
                <div className={tab}>{b}</div>
            </TxtBase>
            <TxtBase>
                <div className={tab}>{c}</div>
            </TxtBase>
            <TxtBase>
                <div className={tab}>{d}</div>
            </TxtBase>
        </div>
    )
}

export default FourthSplit