import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBaseStory from '../../containers/AppBase/stories'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import Typography from '../../components/Typography'
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tab'
import TabPanel from '../../components/TabPanel'
import ClipCardBody from '../../components/ClipCardBody'
import ClipCardLink from '../../components/ClipCardLink'

const stories = storiesOf('3. Pages/Schedule', module)

class Schedule extends React.Component {
	state = {
		value: 0,
	}

	handleTabPanel = value => {
		this.setState({ value })
	}
	render() {
		const { value } = this.state

		return (
			<AppBaseStory>
				<Section>
					<Container>
						<Grid container>
							<Grid xs={12} xl={12}>
								<PageHeader>
									<Typography variant="h1">Schedule</Typography>
									<Typography variant="h5">
										Schedule tabs make it easy to explore and switch between
										different views.
									</Typography>
								</PageHeader>
								<Tabs
									value={value}
									indicatorColor="primary"
									onChange={(e, value) => this.handleTabPanel(value)}
								>
									<Tab>
										DAY ONE
										<Typography component="span" variant="subtitle2">
											{' '}
											— 25 DEC
										</Typography>
									</Tab>
									<Tab>
										DAY TWO
										<Typography component="span" variant="subtitle2">
											{' '}
											— 26 DEC
										</Typography>
									</Tab>
									<Tab>
										DAY THREE
										<Typography component="span" variant="subtitle2">
											{' '}
											— 27 DEC
										</Typography>
									</Tab>
								</Tabs>
								{value === 0 && (
									<TabPanel>
										<Grid
											container
											alignItems="center"
											style={{ marginTop: 24 }}
										>
											<Grid xs={12} md={2} lg={1}>
												<Typography
													variant="body3"
													style={{
														paddingTop: 12,
														marginBottom: 0,
													}}
												>
													16:30 PM
												</Typography>
											</Grid>
											<Grid xs={12} md={10} lg={11}>
												<ClipCardBody>
													<ClipCardLink />
													<Typography
														component="span"
														variant="subtitle2"
														style={{
															fontSize: 11,
															textTransform: 'uppercase',
														}}
													>
														Online Workshop — 2 Hours
													</Typography>
													<Typography variant="h6">
														Introduction to Docker and learn how to
														setup your application for easier
														development
													</Typography>
													<Typography
														component="span"
														variant="subtitle2"
														style={{
															fontSize: 11,
															textTransform: 'uppercase',
														}}
													>
														By Ahmed Abdulrahman
													</Typography>
												</ClipCardBody>
											</Grid>
										</Grid>
									</TabPanel>
								)}
							</Grid>
						</Grid>
					</Container>
				</Section>
			</AppBaseStory>
		)
	}
}

stories.add('Default', () => <Schedule />)

export default Schedule
