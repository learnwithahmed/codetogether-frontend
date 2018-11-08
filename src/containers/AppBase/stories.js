import React from 'react'
import { storiesOf } from '@storybook/react'
import Toolbar from '../../components/Toolbar'
import AppBar from '../../components/AppBar'
import Container from '../../components/Container'
import Column from '../../components/Column'
import IconButton from '../../components/IconButton'
import Button from '../../components/Button'
import Typography from '../../components/Typography'
import FooterStory from '../../components/Footer/stories' // Change to FooterContainer
import AppBarMenu from '../../components/AppBarMenu'

const stories = storiesOf('2. Containers/AppBase', module)

class AppBase extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div
				style={{
					minHeight: 120,
				}}
			>
				<div style={{ minHeight: 120 }} />
				<AppBar
					appBarRef={this.appBarRef}
					style={{ background: '#fff' }}
				>
					{/* Desktop Toolbar */}
					<Toolbar>
						<Container>
							<Column size="12">
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<div style={{ flex: 2 }}>
										<IconButton>
											<Typography variant="h4">
												CodeTogether
											</Typography>
										</IconButton>
									</div>

									<AppBarMenu>
										<a href="#">About</a>
										<a href="#">Schedule</a>
										<a href="#">Team</a>
										<a href="#">Get in Touch</a>
									</AppBarMenu>

									<div
										style={{
											padding: '12px 0 12px 48px',
										}}
									>
										<Button color="primary">Signup</Button>
									</div>
								</div>
							</Column>
						</Container>
					</Toolbar>
				</AppBar>

				{children ? (
					children
				) : (
					<div style={{ height: '100vh' }}>Content here...</div>
				)}
				<FooterStory />
			</div>
		)
	}
}

stories.add('Default', () => <AppBase />)

export default AppBase
