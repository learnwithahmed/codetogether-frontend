import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from '../Grid'
import Container from '../Container'
import ButtonBase from '../ButtonBase'
import Heart from '../icons/Heart'
import SiteInfo from './'

const stories = storiesOf('1. Components/SiteInfo', module)

export const Default = () => (
	<SiteInfo>
		<Container>
			<Grid container>
				<Grid xs={12} md={6} xl={12}>
					<ButtonBase component="a" madeWithLove>
						Made With <Heart style={{ fill: 'ff00bf' }} /> by
						CodeTogether
					</ButtonBase>
				</Grid>
			</Grid>
		</Container>
	</SiteInfo>
)

stories.add('Default', Default)

export default Default
