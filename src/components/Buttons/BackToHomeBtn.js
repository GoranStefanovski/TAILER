import React from 'react';
import {Link} from "react-router-dom";


function BackToHomeBtn() {
    return (
        <Link className="back__button" to='/'>
            <svg width="122" height="127" viewBox="0 0 122 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M109.175 63.2522L85.2135 21.75L37.2908 21.75L13.3295 63.2522L37.2908 104.754L85.2135 104.754L109.175 63.2522Z"
                    stroke="white"/>
            </svg>
            <svg id="backHomeRight" width="106" height="111" viewBox="0 0 106 111" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M93.3237 55.6552L73.0865 20.6033L32.6121 20.6033L12.375 55.6552L32.6121 90.707L73.0865 90.707L93.3237 55.6552Z"
                    stroke="white" stroke-width="3"/>

            </svg>

            <svg id="backHomeRight_arrow" width="30" height="22" viewBox="0 0 30 22" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10.249 0.437513L1.09797 9.94375C0.536417 10.5271 0.536417 11.4729 1.09797 12.0562L10.249 21.5625C10.8105 22.1458 11.721 22.1458 12.2825 21.5625C12.8441 20.9791 12.8441 20.0333 12.2825 19.45L5.58626 12.4938C5.58626 12.4938 25.9888 12.4938 27.9977 12.4938C30.0066 12.4938 30.0066 9.50624 27.9977 9.50624C25.9888 9.50624 5.58626 9.50624 5.58626 9.50624L12.2825 2.55001C12.8441 1.96666 12.8441 1.02086 12.2825 0.437513C11.721 -0.145838 10.8105 -0.145838 10.249 0.437513Z"
                      fill="white"/>
            </svg>
            <h3>BACK TO HOME</h3>
        </Link>
    );
}

export default BackToHomeBtn;
