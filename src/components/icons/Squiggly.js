import React from 'react';
import Svg from './Svg'

const Moneky = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" style={{display:'none'}} {...props}>
    <defs>
        <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"></feTurbulence>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2"></feDisplacementMap>
        </filter>
        <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"></feDisplacementMap>
        </filter>
        <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"></feDisplacementMap>
        </filter>
        <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"></feDisplacementMap>
        </filter>
        <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"></feDisplacementMap>
        </filter>
    </defs>
  </Svg>
)

export default Moneky