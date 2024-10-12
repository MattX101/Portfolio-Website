import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const FourthSplit = ({ a, b, c, d }) => {
    return (
        <>
            <div id="split">
                <TxtBase>
                    <div id="splitBy4">{a}</div>
                </TxtBase>
                <TxtBase>
                    <div id="splitBy4">{b}</div>
                </TxtBase>
                <TxtBase>
                    <div id="splitBy4">{c}</div>
                </TxtBase>
                <TxtBase>
                    <div id="splitBy4">{d}</div>
                </TxtBase>
            </div>
        </>
    )
}

export default FourthSplit