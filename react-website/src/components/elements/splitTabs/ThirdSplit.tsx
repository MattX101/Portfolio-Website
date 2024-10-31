import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const ThirdSplit = ({ a, b, c }) => {
    return (
        <>
            <div id="skillsRow">
                <TxtBase>
                    <div id="skillsSplitBy3">{a}</div>
                </TxtBase>
                <TxtBase>
                    <div id="skillsSplitBy3">{b}</div>
                </TxtBase>
                <TxtBase>
                    <div id="skillsSplitBy3">{c}</div>
                </TxtBase>
            </div>
        </>
    )
}

export default ThirdSplit