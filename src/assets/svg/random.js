import React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="367px" height="368px" viewBox="0 0 367 368" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G id="random">
        <Path
          d="M183.5,367.3 C82.1,367.3 0,285.1 0,183.7 C0,82.3 82.1,0 183.5,0 C284.9,0 367,82.3 367,183.7 C367,285.1 284.3,367.3 183.5,367.3 Z M183.5,9.7 C87.5,9.7 9.6,87.6 9.6,183.7 C9.6,279.8 87.5,357.7 183.5,357.7 C279.5,357.7 357.4,279.8 357.4,183.7 C357.4,87.6 279,9.7 183.5,9.7 Z"
          id="Shape"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
        />
        <G
          id="Group"
          transform="translate(244.000000, 155.000000)"
          stroke={props.color} // eslint-disable-line
          strokeWidth={0.5997}>
          <Circle id="Oval" cx={28} cy={28.2} r={27.2} />
          <Path
            d="M28,55.9 C12.7,55.9 0.3,43.5 0.3,28.2 C0.3,12.9 12.7,0.5 28,0.5 C43.3,0.5 55.7,12.9 55.7,28.2 C55.7,43.4 43.3,55.9 28,55.9 Z M28,1.5 C13.3,1.5 1.3,13.5 1.3,28.2 C1.3,42.9 13.3,54.9 28,54.9 C42.7,54.9 54.7,42.9 54.7,28.2 C54.8,13.5 42.8,1.5 28,1.5 Z"
            id="Shape"
          />
        </G>
        <G
          id="Group"
          transform="translate(157.000000, 78.000000)"
          stroke={props.color} // eslint-disable-line
          strokeWidth={0.5997}>
          <Circle id="Oval" cx={28.6} cy={27.8} r={27.2} />
          <Path
            d="M28.6,55.5 C13.3,55.5 0.9,43.1 0.9,27.8 C0.9,12.5 13.3,0.1 28.6,0.1 C43.9,0.1 56.3,12.5 56.3,27.8 C56.3,43.1 43.9,55.5 28.6,55.5 Z M28.6,1.1 C13.9,1.1 1.9,13.1 1.9,27.8 C1.9,42.5 13.9,54.5 28.6,54.5 C43.3,54.5 55.3,42.5 55.3,27.8 C55.3,13.1 43.3,1.1 28.6,1.1 Z"
            id="Shape"
          />
        </G>
        <G
          id="Group"
          transform="translate(244.000000, 228.000000)"
          stroke={props.color} // eslint-disable-line
          strokeWidth={0.5997}>
          <Circle id="Oval" cx={28} cy={27.8} r={27.2} />
          <Path
            d="M28,55.4 C12.7,55.4 0.3,43 0.3,27.7 C0.3,12.4 12.7,0 28,0 C43.3,0 55.7,12.4 55.7,27.7 C55.7,43 43.3,55.4 28,55.4 Z M28,1.1 C13.3,1.1 1.3,13.1 1.3,27.8 C1.3,42.5 13.3,54.5 28,54.5 C42.7,54.5 54.7,42.5 54.7,27.8 C54.8,13 42.8,1.1 28,1.1 Z"
            id="Shape"
          />
        </G>
        <Circle
          id="Oval"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
          cx={185.6}
          cy={183.7}
          r={27.2}
        />
        <Circle
          id="Oval"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
          cx={272}
          cy={105.8}
          r={27.2}
        />
        <Circle
          id="Oval"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
          cx={94.4}
          cy={183.7}
          r={27.2}
        />
        <Circle
          id="Oval"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
          cx={94.4}
          cy={105.8}
          r={27.2}
        />
        <Circle
          id="Oval"
          fill={props.color} // eslint-disable-line
          fillRule="nonzero"
          cx={185.6}
          cy={255.8}
          r={27.2}
        />
        <Circle
          id="Oval"
          stroke={props.color} // eslint-disable-line
          cx={100.8}
          cy={255.8}
          r={27.2}
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
