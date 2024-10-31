import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const FourthSplit = ({ a, b, c, d }) => {
    return (
        <>
            <div id="skillsRow">
                <TxtBase>
                    <div id="skillsSplitBy4">{a}</div>
                </TxtBase>
                <TxtBase>
                    <div id="skillsSplitBy4">{b}</div>
                </TxtBase>
                <TxtBase>
                    <div id="skillsSplitBy4">{c}</div>
                </TxtBase>
                <TxtBase>
                    <div id="skillsSplitBy4">{d}</div>
                </TxtBase>
            </div>
        </>
    )
}

export default FourthSplit