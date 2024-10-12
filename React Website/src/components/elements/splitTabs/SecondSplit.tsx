import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const SecondSplit = ({ a, b }) => {
    return (
        <>
            <div id="split">
                <TxtBase>
                    <div id="splitBy2">{a}</div>
                </TxtBase>
                <TxtBase>
                    <div id="splitBy2">{b}</div>
                </TxtBase>
            </div>
        </>
    )
}

export default SecondSplit