import React from 'react';
import TxtBase from '../../../../elements/text/TxtBase.tsx';

const tab = 'relative bg-primary-light-s1l1 hover:bg-primary-lightHighlight-s2l3 hover:font-bold w-full p-1 float-left rounded-2xl';

const SecondSplit = ({ a, b }) => {
    return (
        <div className='my-2 overflow-hidden grid grid-cols-2 grid-rows-1 gap-4'>
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