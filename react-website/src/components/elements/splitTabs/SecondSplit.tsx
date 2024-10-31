import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const SecondSplit = ({ a, b }) => {
    return (
        <>
            <div id="skillsRow">
                <TxtBase>
                    <div id="skillsSplitBy2">{a}</div>
                </TxtBase>
                <TxtBase>
                    <div id="skillsSplitBy2">{b}</div>
                </TxtBase>
            </div>
        </>
    )
}

export default SecondSplit