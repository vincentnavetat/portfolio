import React from 'react';

const Footer = React.createClass({
  render() {
    return (
      <footer className="footer">
        <ul className="footer__social-networks text-center">
          <li className="social-network">
            <a className="social-network__link social-network__link--email text-center" href="mailto:vincentnavetat@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 259.22">
                <path d="M143.44,0A138.21,138.21,0,0,0,72.5,19.38,147.19,147.19,0,0,0,19.69,71.72Q0,104.3,0,141.25q0,50.19,36.72,83.91,37,34,97.34,34.06c26.61,0,49.79-4.91,69.69-13.59a12.48,12.48,0,0,0,7-15.78,12.08,12.08,0,0,0-15.62-7q-26.71,12-60.47,12a111.75,111.75,0,0,1-50.16-11.72,101.43,101.43,0,0,1-39.37-33.44A84.13,84.13,0,0,1,30,140.63q0-28.17,14.69-54.53A124.18,124.18,0,0,1,85.63,42.66q26.41-17,56.41-17,39,0,69.53,25.47c20.35,17,30.62,36.76,30.63,59.06,0,18-5.14,33.57-15.31,46.88-10,13.3-20.14,20-30.31,20-9.39,0-14.06-4.55-14.06-13.75a46.17,46.17,0,0,1,2-11.56l19.06-68.44c2-7.53-2.39-13.75-9.84-13.75s-15.17,6.22-17.19,13.75l-1.09,4.53c-3.52-7.44-7.73-12.77-12.81-16.09s-11.67-5-19.69-5c-13.7,0-25.84,3.43-36.41,10.47S84,96.58,78.12,108.44C70.29,124.21,67.94,134.83,67.81,152c0,13.89,4.67,25.84,14.06,35.63a45.37,45.37,0,0,0,34.06,14.53q26.12,0,44.06-21.41a30.14,30.14,0,0,0,12.5,15.63c6.26,3.91,14.28,5.78,24.06,5.78a55.37,55.37,0,0,0,24.38-6.09,85.81,85.81,0,0,0,23.75-17c7.43-7.24,13.59-16.46,18.28-27.81a95.16,95.16,0,0,0,7-36.72q0-51.95-35.47-83.12C211.05,10.47,180.61,0,143.44,0ZM142,88.44c7.63,0,13.55,2.57,17.66,7.66s6.09,12.21,6.09,21.41c0,13.11-4.2,26.34-12.81,39.84s-18.89,20.31-30.62,20.31a21.29,21.29,0,0,1-17.5-8.59c-4.3-5.68-6.56-13-6.56-22a66.48,66.48,0,0,1,13.28-40.47C120.56,94.43,130.68,88.44,142,88.44Z"/>
              </svg>
            </a>
          </li>
          <li className="social-network">
            <a className="social-network__link social-network__link--linkedin text-center" href="https://linkedin.com/in/vincentnavetat/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.5 93.3">
                <rect x="1.2" y="30.3" width="20.9" height="62.9"/>
                <path d="M11.8,0C4.7,0,0,4.7,0,10.9c0,6,4.5,10.9,11.6,10.9h.1c7.3,0,11.8-4.8,11.8-10.9S19,0,11.8,0Z"/>
                <path d="M73.5,28.9c-11.1,0-16.1,6.1-18.9,10.4v.2h-.1c0-.1.1-.1.1-.2V30.4H33.7c.3,5.9,0,62.9,0,62.9H54.6V58.1a13.12,13.12,0,0,1,.7-5.1c1.5-3.8,5-7.7,10.7-7.7,7.6,0,10.6,5.8,10.6,14.2V93.2H97.5v-36C97.6,37.8,87.3,28.9,73.5,28.9Z"/>
              </svg>
            </a>
          </li>
          <li className="social-network">
            <a className="social-network__link social-network__link--dribbble text-center" href="https://dribbble.com/vincentnavetat/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path d="M0,500Q0,364,67,249T249,67Q364,0,500,0T751,67q115,67,182,182t67,251q0,136-67,251T751,933q-115,67-251,67T249,933Q134,866,67,751T0,500Zm83,0q0,156,105,275,48-94,152-179T543,489q-15-35-29-63-172,55-372,55-39,0-58-1,0,4-.5,10T83,500ZM96,397q22,2,65,2,167,0,317-45Q402,219,311,129q-79,40-135.5,111T96,397ZM245,829q113,88,255,88,74,0,147-28a1468.39,1468.39,0,0,0-78-331q-92,20-185.5,101T245,829ZM398,97q88,91,163,227,136-57,205-145Q650,83,500,83A383.84,383.84,0,0,0,398,97ZM597,395q15,32,34,81,74-7,161-7,62,0,123,3-8-136-98-242Q752,327,597,395Zm59,151a1435.33,1435.33,0,0,1,69,304A417.23,417.23,0,0,0,854,719a403.9,403.9,0,0,0,60-173q-73-5-133-5Q726,541,656,546Z"/>
              </svg>
            </a>
          </li>
          <li className="social-network">
            <a className="social-network__link social-network__link--behance text-center" href="https://behance.com/vincentnavetat/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 323.63">
                <g>
                  <path d="M206.23,144.68s48.36-3.59,48.36-60.3S215,0,164.91,0H0V316.91H164.91s100.67,3.18,100.67-93.54C265.58,223.37,270,144.68,206.23,144.68ZM153,56.33h11.87s22.42,0,22.42,33S174.14,127,159.19,127H72.66V56.33H153Zm7.21,204.26H72.66V175.89h92.25s33.41-.44,33.41,43.52C198.32,256.48,173.37,260.3,160.25,260.58Zm239.59-180C278,80.63,278.08,202.4,278.08,202.4s-8.36,121.14,121.77,121.14c0,0,108.44,6.2,108.44-84.27H452.51s1.86,34.07-50.81,34.07c0,0-55.78,3.74-55.78-55.14H510.14S528.11,80.63,399.84,80.63Zm-54.53,95.26S352.12,127,401.08,127s48.34,48.85,48.34,48.85Zm117.1-118.2H331.66v-39H462.41Z"/>
                </g>
              </svg>
            </a>
          </li>
          <li className="social-network">
            <a className="social-network__link social-network__link--twitter text-center" href="https://twitter.com/vincentnavetat/" target="_blank">
              <svg viewBox="0 0 171.5 139.4" x="0px" y="0px">
                <g transform="translate(-282.32053,-396.30734)">
                  <path d="M453.8,412.8c-6.3,2.8-13.1,4.7-20.2,5.5c7.3-4.4,12.8-11.2,15.5-19.5c-6.8,4-14.3,7-22.3,8.5
                    c-6.4-6.8-15.6-11.1-25.7-11.1c-19.4,0-35.2,15.8-35.2,35.2c0,2.8,0.3,5.4,0.9,8c-29.2-1.5-55.2-15.5-72.5-36.8
                    c-3,5.2-4.8,11.2-4.8,17.7c0,12.2,6.2,23,15.7,29.3c-5.8-0.2-11.2-1.8-15.9-4.4c0,0.1,0,0.3,0,0.4c0,17,12.1,31.3,28.2,34.5
                    c-3,0.8-6.1,1.2-9.3,1.2c-2.3,0-4.5-0.2-6.6-0.6c4.5,14,17.5,24.2,32.9,24.4c-12,9.4-27.2,15.1-43.7,15.1c-2.8,0-5.6-0.2-8.4-0.5
                    c15.6,10,34.1,15.8,53.9,15.8c64.7,0,100.1-53.6,100.1-100.1c0-1.5,0-3-0.1-4.6C443.1,426.1,449.1,419.9,453.8,412.8L453.8,412.8z"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li className="social-network">
            <a className="social-network__link social-network__link--github text-center" href="https://github.com/vincentnavetat" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570.27 677.69">
                <path d="M2,421.85Q-2,417.94,2,414q7.81-7.81,19.53-5.86t13.67,3.91q13.67,5.86,30.27,26.37t26.37,28.32q46.87,39.06,95.7,5.86a58.49,58.49,0,0,1,12.69-23.44q8.79-9.77,16.6-13.67t27.34-11.72q-64.45-5.86-104.49-22.46t-63.47-42Q44.92,324.2,38.08,267.56t8.79-103.51a172,172,0,0,1,33.2-52.73Q64.45,62.5,85.93,0q62.5,3.91,113.27,43,97.65-25.39,203.11-2,13.67-9.76,42-24.41T515.59,0q7.81,21.48,10.74,50.78t-2.93,54.68q44.92,46.87,46.87,125,0,62.5-21.48,103.51t-76.17,68.35Q435.52,419.9,375,423.8q27.34,13.67,40,28.32t16.6,45.9v61.52s.65,19.85,2,59.57a73.43,73.43,0,0,0,27.34,26.37q5.86,2.93,3.91,8.79t-15.62,5.86q-33.2,0-52.73-23.44-5.86-9.77-5.86-23.44V519.5q0-15.62-7.81-22.46t-15.62-8.79v123q0,33.2,7.81,43t9.77,19.53q2,2-2.93,2.93t-16.6-2.93q-25.39-5.86-35.15-26.37a100.91,100.91,0,0,1-9.77-43.94V482.39H294.9V603.48a107.35,107.35,0,0,1-9.77,44.92q-13.67,27.34-50.78,29.29-5.86-2-5.86-3.91,2-2,11.72-19.53,2-3.91,4.88-15.62A113.46,113.46,0,0,0,248,611.29v-123A31.62,31.62,0,0,0,233.38,497q-6.84,6.84-6.84,22.46v93.74q0,13.67-5.86,23.44Q203.11,660.12,168,660.12q-13.67,0-15.62-5.86-2-3.91,1-6.84a59.47,59.47,0,0,1,8.79-6.84,58.27,58.27,0,0,0,7.81-5.86,35.55,35.55,0,0,0,11.72-15.62q5.86-7.81,2.93-41t-1-43Q132.8,552.7,80.07,517.55q-15.62-15.62-31.25-44.92Q37.11,451.14,2,421.85Z"/>
              </svg>
            </a>
          </li>
          <li className="social-network">
            <a className="social-network__link social-network__link--instagram text-center" href="https://instagram.com/vincentnavetat/" target="_blank">
              <svg viewBox="0 0 2476 2476" x="0px" y="0px">
                <path d="M825.4,1238c0-227.9,184.7-412.7,412.6-412.7c227.9,0,412.7,184.8,412.7,412.7c0,227.9-184.8,412.7-412.7,412.7	C1010.1,1650.7,825.4,1465.9,825.4,1238 M602.3,1238c0,351.1,284.6,635.7,635.7,635.7c351.1,0,635.7-284.6,635.7-635.7	S1589.1,602.3,1238,602.3C886.9,602.3,602.3,886.9,602.3,1238 M1750.3,577.1c0,82,66.5,148.6,148.6,148.6	c82,0,148.6-66.6,148.6-148.6c0-82-66.5-148.5-148.6-148.5C1816.8,428.6,1750.3,495.1,1750.3,577.1 M737.8,2245.7	c-120.7-5.5-186.3-25.6-229.9-42.6c-57.8-22.5-99-49.3-142.4-92.6c-43.3-43.3-70.2-84.5-92.6-142.3c-17-43.6-37.1-109.2-42.6-229.9	c-6-130.5-7.2-169.7-7.2-500.3c0-330.6,1.3-369.7,7.2-500.3c5.5-120.7,25.7-186.2,42.6-229.9c22.5-57.8,49.3-99,92.6-142.4	c43.3-43.3,84.5-70.2,142.4-92.6c43.6-17,109.2-37.1,229.9-42.6c130.5-6,169.7-7.2,500.2-7.2c330.6,0,369.7,1.3,500.3,7.2	c120.7,5.5,186.2,25.7,229.9,42.6c57.8,22.4,99,49.3,142.4,92.6c43.3,43.3,70.1,84.6,92.6,142.4c17,43.6,37.1,109.2,42.6,229.9	c6,130.6,7.2,169.7,7.2,500.3c0,330.5-1.2,369.7-7.2,500.3c-5.5,120.7-25.7,186.3-42.6,229.9c-22.5,57.8-49.3,99-92.6,142.3	c-43.3,43.3-84.6,70.1-142.4,92.6c-43.6,17-109.2,37.1-229.9,42.6c-130.5,6-169.7,7.2-500.3,7.2	C907.5,2252.9,868.3,2251.7,737.8,2245.7 M727.6,7.5c-131.8,6-221.8,26.9-300.5,57.5c-81.4,31.6-150.4,74-219.3,142.8	C139,276.6,96.6,345.6,65,427.1C34.4,505.8,13.5,595.8,7.5,727.6C1.4,859.6,0,901.8,0,1238s1.4,378.4,7.5,510.4	c6,131.8,26.9,221.8,57.5,300.5c31.6,81.4,73.9,150.5,142.8,219.3c68.8,68.8,137.8,111.1,219.3,142.8	c78.8,30.6,168.7,51.5,300.5,57.5c132.1,6,174.2,7.5,510.4,7.5c336.3,0,378.4-1.4,510.4-7.5c131.8-6,221.8-26.9,300.5-57.5	c81.4-31.7,150.4-74,219.3-142.8c68.8-68.8,111.1-137.9,142.8-219.3c30.6-78.7,51.6-168.7,57.5-300.5c6-132.1,7.4-174.2,7.4-510.4	s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5c-31.7-81.4-74-150.4-142.8-219.3C2199.4,139,2130.3,96.6,2049,65	c-78.8-30.6-168.8-51.6-300.5-57.5c-132-6-174.2-7.5-510.4-7.5C901.8,0,859.7,1.4,727.6,7.5"/>
              </svg>
            </a>
          </li>
        </ul>

        <div className="footer__credits text-center">
          <span className="footer__text">
            Made in London
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 66">
            <path d="M90,53V14.17l-.51-4.44L88.8,5.29,88,9.73l-.83,4.44L84.22,0l-3,14.17-.87-4.44L79.5,5.29l-.75,4.44L78,14.17V21H50V19H45v2H16V14.17l-.51-4.44-.69-4.44L14,9.73l-.83,4.44L10.21,0l-3,14.17L6.36,9.73,5.49,5.29,4.74,9.73,4,14.17V53H0V66H21V58.1L43.92,36.24l.46-.36-.06-.14-.74-.67L17.25,53H16V25H78V53H76.75L50.63,35.07l-.52.71-.1.12.32.35L73,58.06V66H94V53ZM14,44H6V43h8ZM7,42V39H8v3Zm2,0V39h2v3Zm3,0V39h1v3Zm2-6H6V35h8ZM8,29v5H7V29ZM7,25V21H8v4Zm4,4v5H9V29ZM9,25V21h2v4Zm4,4v5H12V29Zm-1-4V21h1v4Zm2-5H6V19H9V15h3v4h2Zm7.32,37.4v-1l.75.23ZM41.57,38,39.41,40l-1.25.25Zm-2.83,2.72-1.55,1.49.62-1.31Zm-1.52.25-.73,1.52-1.8.21Zm-2.77,2.26,1.9-.22L34,45.26Zm-.51,0-.54,2.36L31,45.17Zm-3,2.5,2.24.34L30.9,48.2Zm-.5-.12,0,2.6-3-.5Zm-3.13,2.6,3.11.51-3.23,3.1Zm-.5-.12-.13,3.66-3.85-.95Zm-4,3.22,3.92,1-4.17,4Zm-.5.06-.42,4.93L21,56V53h-.94ZM77,24H17V22H77ZM52.91,38l3.4,2.33L55.07,40Zm2.83,2.72.93.19.62,1.31Zm1.52.25,2.53,1.73L58,42.45Zm.87,2,1.9.22.47,2.06Zm2.41.2,2.93,2-2.39.36ZM61.29,46l2.24-.34,0,2.53Zm5.81,1.64-3,.5,0-2.6Zm-3,1,3.1-.51.12,3.61Zm7.58,2.08-3.85.95L67.65,48Zm-3.87,1.47,3.92-1,.26,5Zm5.35,5.14-.71-.68.71-.22ZM73,53v2.94l-.63.21-.23-4.94L74.67,53Zm15-9H80V43h8Zm-7-2V39h1v3Zm2,0V39h2v3Zm3,0V39h1v3Zm2-6H80V35h8Zm-6-7v5H81V29Zm-1-4V21h1v4Zm4,4v5H83V29Zm-2-4V21h2v4Zm4,4v5H86V29Zm-1-4V21h1v4Zm2-5H80V19h2V15h3v4h3Z"/>
          </svg>
          <span className="footer__text">
            Vincent Navetat, 2016
          </span>
        </div>
      </footer>
    );
  }
});

export default Footer;
