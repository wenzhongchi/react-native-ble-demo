import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="368px" height="369px" viewBox="0 0 368 369" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="ambient-light-colors---icon"
        transform="translate(0.000000, 1.000000)">
        <Path
          d="M122.162857,254.84 L58.42,318.451429 C90.2257143,348.022857 132.414286,366.488571 178.874286,367.737143 L178.874286,277.708571 C157.188571,276.591429 137.474286,268.18 122.162857,254.84 Z"
          id="Path"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
        <Path
          d="M247.94,115.46 L311.551429,51.8485714 C279.548571,20.8314286 236.308571,1.44571429 188.534286,0.197142857 L188.534286,90.2257143 C211.468571,91.4085714 232.168571,100.805714 247.94,115.46 Z"
          id="Path"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
        <Path
          d="M277.445714,179.662857 L367.474286,179.662857 C366.422857,133.005714 347.891429,90.62 318.188571,58.7485714 L254.577143,122.36 C268.048571,137.868571 276.46,157.78 277.445714,179.662857 Z"
          id="Path"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
        <Path
          d="M277.445714,189.191429 C276.197143,211.928571 266.8,232.562857 252.211429,248.137143 L315.822857,311.748571 C346.708571,279.811429 366.16,236.768571 367.474286,189.191429 L277.445714,189.191429 Z"
          id="Path"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
        <Path
          d="M178.874286,90.2257143 L178.874286,0.197142857 C131.1,1.44571429 87.9257143,20.8314286 55.8571429,51.8485714 L119.468571,115.46 C135.174286,100.805714 156.005714,91.4085714 178.874286,90.2257143 Z"
          id="Path"
          stroke={props.color} // eslint-disable-line
          strokeWidth={2}
        />
        <Path
          d="M90.0285714,189.191429 L0,189.191429 C1.31428571,236.834286 20.7,279.811429 51.6514286,311.748571 L115.262857,248.137143 C100.608571,232.562857 91.2114286,211.928571 90.0285714,189.191429 Z"
          id="Path"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
        <Path
          d="M188.468571,277.774286 L188.468571,367.802857 C234.928571,366.554286 277.182857,348.154286 308.922857,318.517143 L245.311429,254.905714 C229.868571,268.18 210.154286,276.591429 188.468571,277.774286 Z"
          id="Path"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
        <Path
          d="M112.897143,122.36 L49.2857143,58.7485714 C19.5828571,90.62 1.11714286,133.005714 0,179.662857 L89.8971429,179.662857 C90.9485714,157.78 99.4257143,137.868571 112.897143,122.36 Z"
          id="Path"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
