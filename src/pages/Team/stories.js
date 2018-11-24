import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBaseStory from '../../containers/AppBase/stories'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Media from '../../components/Media'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import Typography from '../../components/Typography'
import styles from './style.module.scss'

const stories = storiesOf('3. Pages/Team', module)

export const Default = () => (
	<AppBaseStory>
		<Section>
			<Container>
				<Grid container>
					<Grid xs={12}>
						<PageHeader>
							<Typography variant="h1">Team</Typography>
							<Typography variant="h5">Meet our members.</Typography>
						</PageHeader>
					</Grid>
				</Grid>
				<Grid container spacing={24}>
					{Array.from(new Array(6), (val, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							lg={4}
							key={index}
							className={styles.child}
						>
							<Media component="img" src="//placekitten.com/g/400/400" />
							<Typography variant="h5">Ahmed Abdulrahman</Typography>
							<Typography variant="cite">UX/UI & Enterprise Dev</Typography>
						</Grid>
					))}
				</Grid>
			</Container>
		</Section>
	</AppBaseStory>
)

stories.add('Default', Default)

export default Default
