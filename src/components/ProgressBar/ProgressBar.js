import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { easeQuadInOut } from 'd3-ease'
import AnimatedProgressProvider from './AnimatedProgressProvider'
function ProgressBar({valueEndProp}) {
    return (
        <div >
            <div class="percentCerlce">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={valueEndProp}
                    duration={5}
                    easingFunction={easeQuadInOut}
                >
                    {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                styles={buildStyles({ pathTransition: 'none' })}
                                strokeWidth={3}

                            />
                        );
                    }}
                </AnimatedProgressProvider>
            </div>
        </div>
    )
}
export default ProgressBar
