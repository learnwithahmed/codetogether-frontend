import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBaseStory from '../../containers/AppBase/stories'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import Typography from '../../components/Typography'
import styles from './styles.module.scss'
const stories = storiesOf('3. Pages/CountDown', module)

class CountDown extends React.Component {
	state = {
		days: 0,
		hours: 0,
		min: 0,
		sec: 0,
	}

	componentDidMount() {
		// update counter every second
		this.interval = setInterval(() => {
			const date = this.calculateCountdown(this.props.date)
			date ? this.setState(date) : this.stop()
		}, 1000)
	}

	componentWillUnmount() {
		this.stop()
	}

	calculateCountdown = endDate => {
		let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

		// clear countdown when date is reached
		if (diff <= 0) return false

		const timeLeft = {
			years: 0,
			days: 0,
			hours: 0,
			min: 0,
			sec: 0,
			millisec: 0,
		}

		// calculate time difference between now and expected date
		if (diff >= 365.25 * 86400) {
			// 365.25 * 24 * 60 * 60
			timeLeft.years = Math.floor(diff / (365.25 * 86400))
			diff -= timeLeft.years * 365.25 * 86400
		}
		if (diff >= 86400) {
			// 24 * 60 * 60
			timeLeft.days = Math.floor(diff / 86400)
			diff -= timeLeft.days * 86400
		}
		if (diff >= 3600) {
			// 60 * 60
			timeLeft.hours = Math.floor(diff / 3600)
			diff -= timeLeft.hours * 3600
		}
		if (diff >= 60) {
			timeLeft.min = Math.floor(diff / 60)
			diff -= timeLeft.min * 60
		}
		timeLeft.sec = diff

		return timeLeft
	}

	stop = () => {
		clearInterval(this.interval)
	}

	addLeadingZeros = value => {
		value = String(value)
		while (value.length < 2) {
			value = '0' + value
		}
		return value
	}

	render() {
		const countDown = this.state

		return (
			<AppBaseStory>
				<Section first>
					<Container>
						<Grid container>
							<Grid item xs={12}>
								<PageHeader>
									<Typography variant="h1">Join Us</Typography>
									<Typography
										variant="body1"
										style={{
											fontSize: 24,
											lineHeight: '36px',
										}}
									>
										Sharing thoughts &amp; experiences about design,
										development, and creating coding content
									</Typography>
								</PageHeader>
							</Grid>
						</Grid>
						<Grid
							container
							justify="center"
							alignItems="center"
							spacing={24}
							style={{ textAlign: 'center' }}
						>
							<Grid
								item
								xs={12}
								md={3}
								className={styles.countdown}
								data-display="days"
							>
								<Typography variant="display1" component="h1">
									{this.addLeadingZeros(countDown.days)}
								</Typography>
								<Typography variant="cite">
									{countDown.days === 1 ? 'Day' : 'Days'}
								</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								md={3}
								className={styles.countdown}
								data-display="hours"
							>
								<Typography variant="display1" component="h1">
									{this.addLeadingZeros(countDown.hours)}
								</Typography>
								<Typography variant="cite">Hours</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								md={3}
								className={styles.countdown}
								data-display="minutes"
							>
								<Typography variant="display1" component="h1">
									{this.addLeadingZeros(countDown.min)}
								</Typography>
								<Typography variant="cite">Min</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								md={3}
								className={styles.countdown}
								data-display="seconds"
							>
								<Typography variant="display1" component="h1">
									{this.addLeadingZeros(countDown.sec)}
								</Typography>
								<Typography variant="cite">Sec</Typography>
							</Grid>
						</Grid>
					</Container>
				</Section>
			</AppBaseStory>
		)
	}
}

CountDown.defaultProps = {
	date: new Date('2019-10-10'),
}

stories.add('CountDown', () => <CountDown />)

export default CountDown
