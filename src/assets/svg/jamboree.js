import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const SvgComponent = props => (
  <Svg width="367px" height="367px" viewBox="0 0 367 367" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="jamboree"
        fill={props.color} // eslint-disable-line
        fillRule="nonzero">
        <Path
          d="M183.5,366.9 C82.6,366.9 0.5,284.8 0.5,183.8 C0.5,82.8 82.6,0.7 183.5,0.7 C284.5,0.7 366.6,82.8 366.6,183.8 C366.5,284.7 284.5,366.9 183.5,366.9 Z M183.5,10.3 C87.9,10.3 10.1,88.1 10.1,183.8 C10.1,279.5 87.9,357.2 183.5,357.2 C279.1,357.2 357,279.4 357,183.8 C356.9,88.2 279,10.3 183.5,10.3 Z"
          id="Shape"
        />
        <G id="balloons_2_" transform="translate(80.000000, 78.000000)">
          <Path
            d="M138.4,71 C138.4,69.4 138.3,67.9 138.2,66.3 C138.2,66.2 138.2,66 138.2,65.9 C134.3,24.1 97.7,-4.6 59.2,1.5 C20.5,7.6 -7.5,46.8 2.7,87.7 C12.2,125.6 51,151.2 75.1,152.8 C73,155.4 72,159.2 70.7,163.7 C68.9,170.1 76.1,165.4 82.6,164.3 C82.7,164.8 82.8,165.2 82.9,165.6 C83.5,169.6 83.3,175.1 81.2,182.8 C78.8,191.3 78.2,197.6 78.8,202.6 C79.5,207.2 81.5,210.8 84.2,213.7 C86.9,216.5 90.8,219.6 92.6,221 C94.4,222.4 96.5,222.8 97.7,220.8 C98.7,219 97.6,218 96.6,217 C96,216.5 90.3,212 88.2,209.7 C86.1,207.4 84.8,205.2 84.2,201.7 C83.6,197.9 84.1,192.5 86.4,184.3 C88.7,176 89,169.6 88.3,164.7 C88.3,164.4 88.2,164.1 88.1,163.8 C93,163.8 97.1,164.3 94.5,159.8 C92.3,156.1 90.1,152.7 87.4,150.8 C93.9,148.3 101.2,143.5 108.1,137 C109.6,135.6 111.1,134.1 112.6,132.5 C114.1,130.9 115.6,129.2 117.1,127.4 C128.6,113.3 137.5,94.6 138.1,74.9 C138.3,73.5 138.4,72.2 138.4,71 Z M103.7,31.9 C92.2,20.8 79.8,14.4 82.1,12.1 C84.4,9.7 96.9,15.2 108.3,26.2 C119.8,37.2 125.7,49.7 123.6,52 C121.3,54.3 115.2,42.9 103.7,31.9 Z M127.7,73.3 C125.5,73.9 123.1,71.5 122.2,68 C121.3,64.5 122.3,61.3 124.5,60.7 C126.7,60.1 129.1,62.5 130.1,66 C130.9,69.4 129.9,72.7 127.7,73.3 Z M206.4,51.2 C206.4,51.1 206.4,51 206.4,50.9 C203.5,19 175.4,-3 146.1,1.6 C136.5,3.1 127.9,7.3 120.8,13.3 C136,25 146.7,43 148.7,64.5 C148.7,64.6 148.7,64.8 148.7,64.9 C148.8,66.5 148.9,68 148.9,69.6 C148.9,70.8 148.9,72.2 148.8,73.4 C148.3,86.7 144.1,99.5 138,110.6 C145.2,114.6 152.3,116.9 158.3,117.2 C156.7,119.2 155.9,122.1 155,125.5 C153.7,130.4 159.2,126.8 164.1,125.9 C164.2,126.3 164.3,126.6 164.3,126.9 C164.8,129.9 164.6,134.2 163,140.1 C161.2,146.6 160.6,151.4 161.2,155.3 C161.7,158.9 163.3,161.6 165.4,163.7 C167.4,165.9 170.4,168.2 171.8,169.3 C173.2,170.4 174.7,170.7 175.7,169.2 C176.6,167.9 175.6,167 174.8,166.4 C174.4,166 170,162.6 168.4,160.8 C166.8,159 165.7,157.4 165.4,154.6 C164.9,151.8 165.3,147.6 167.1,141.3 C168.9,135 169.1,130 168.5,126.3 C168.5,126.1 168.4,125.8 168.4,125.6 C172.2,125.6 175.3,126 173.3,122.6 C171.7,119.8 170,117.2 167.9,115.8 C172.9,113.9 178.5,110.2 183.8,105.2 C184.9,104.1 186.1,102.9 187.2,101.8 C188.3,100.6 189.5,99.2 190.6,97.9 C199.3,87.1 206.1,72.9 206.7,57.7 C206.7,56.8 206.8,55.8 206.7,54.8 C206.5,53.6 206.5,52.3 206.4,51.2 Z M180,24.9 C171.3,16.5 161.7,11.5 163.4,9.7 C165.1,7.9 174.7,12.1 183.5,20.5 C192.2,28.9 196.9,38.4 195.2,40.2 C193.5,42 188.8,33.4 180,24.9 Z M198.5,56.5 C196.9,57 194.9,55.1 194.2,52.4 C193.5,49.7 194.3,47.2 195.9,46.8 C197.6,46.3 199.5,48.2 200.2,50.9 C200.9,53.6 200,56.1 198.5,56.5 Z"
            id="_x32_8_1_"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
