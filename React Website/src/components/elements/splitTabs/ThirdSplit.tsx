import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const ThirdSplit = ({ a, b, c }) => {
    return (
        <>
            <div id="split">
                <TxtBase>
                    <div id="splitBy3">{a}</div>
                </TxtBase>
                <TxtBase>
                    <div id="splitBy3">{b}</div>
                </TxtBase>
                <TxtBase>
                    <div id="splitBy3">{c}</div>
                </TxtBase>
            </div>
        </>
    )
}

export default ThirdSplit