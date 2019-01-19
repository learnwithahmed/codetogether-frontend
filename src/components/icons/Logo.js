import React from 'react'
import Svg from '../SvgWrapper'

const Logo = props => (
	<Svg viewBox="0 0 269 259" {...props}>
		<defs>
			<linearGradient id="prefix__a" x1="0%" x2="99.011%" y1="0%" y2="98.04%">
				<stop offset="0%" stopColor="#05F" />
				<stop offset="100%" stopColor="#BBD5FF" />
			</linearGradient>
			<path
				id="prefix__b"
				d="M29.21 75.804c.015-20.05 16.28-35.78 36.318-35.133l105.03 3.391c20.042.648 37.046 17.415 37.977 37.446l4.793 103.032c.932 20.034-14.567 36.403-34.615 36.562l-113.315.899c-20.05.16-36.29-15.974-36.274-36.017l.085-110.18z"
			/>
			<filter
				id="prefix__c"
				width="101.1%"
				height="101.1%"
				x="-.5%"
				y="-.6%"
				filterUnits="objectBoundingBox"
			>
				<feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={0.5} />
				<feOffset dx={1} dy={1} in="shadowBlurInner1" result="shadowOffsetInner1" />
				<feComposite
					in="shadowOffsetInner1"
					in2="SourceAlpha"
					k2={-1}
					k3={1}
					operator="arithmetic"
					result="shadowInnerInner1"
				/>
				<feColorMatrix
					in="shadowInnerInner1"
					values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.47826087 0"
				/>
			</filter>
			<linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="97.55%">
				<stop offset="0%" stopColor="#FFF" />
				<stop offset="48.973%" stopColor="#FFF" />
				<stop offset="100%" stopColor="#ECF2FF" />
			</linearGradient>
			<path
				id="prefix__e"
				d="M51 46.725c-.017-18.044 14.606-32.677 32.635-32.683L199.265 14c18.04-.007 32.67 14.615 32.677 32.661l.041 114.514c.007 18.714-15.155 33.836-33.873 33.775l-115.507-.378c-17.377-.057-31.478-14.185-31.494-31.568L51 46.725z"
			/>
			<filter
				id="prefix__d"
				width="165.8%"
				height="165.8%"
				x="-30.1%"
				y="-20.2%"
				filterUnits="objectBoundingBox"
			>
				<feOffset dx={5} dy={23} in="SourceAlpha" result="shadowOffsetOuter1" />
				<feGaussianBlur
					in="shadowOffsetOuter1"
					result="shadowBlurOuter1"
					stdDeviation={16}
				/>
				<feColorMatrix
					in="shadowBlurOuter1"
					values="0 0 0 0 0.560784314 0 0 0 0 0.717647059 0 0 0 0 1 0 0 0 0.178781703 0"
				/>
			</filter>
			<filter
				id="prefix__g"
				width="138.7%"
				height="138.7%"
				x="-16.6%"
				y="-6.6%"
				filterUnits="objectBoundingBox"
			>
				<feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1.5} />
				<feOffset dy={3} in="shadowBlurInner1" result="shadowOffsetInner1" />
				<feComposite
					in="shadowOffsetInner1"
					in2="SourceAlpha"
					k2={-1}
					k3={1}
					operator="arithmetic"
					result="shadowInnerInner1"
				/>
				<feColorMatrix
					in="shadowInnerInner1"
					values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.260869565 0"
				/>
			</filter>
		</defs>
		<g fill="none" fillRule="evenodd">
			<g transform="rotate(-24 122.803 158.702)">
				<use fill="url(#prefix__a)" xlinkHref="#prefix__b" />
				<use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__b" />
			</g>
			<g transform="rotate(-9 155.05 175.86)">
				<use fill="#000" filter="url(#prefix__d)" xlinkHref="#prefix__e" />
				<use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
				<use fill="#000" filter="url(#prefix__g)" xlinkHref="#prefix__e" />
			</g>
			<text
				fill="#000"
				fontFamily="Rubik-Light, Rubik"
				fontSize={100}
				fontWeight={300}
				transform="translate(-11 3)"
			>
				<tspan x={94} y={138}>
					{'/>'}
				</tspan>
			</text>
		</g>
	</Svg>
)

export default Logo
