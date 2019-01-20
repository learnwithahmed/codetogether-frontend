import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBaseStory from '../../containers/AppBase/stories'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Input from '../../components/Input'
import List from '../../components/List'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import Typography from '../../components/Typography'
import styles from './styles.module.scss'
const stories = storiesOf('3. Pages/Contact', module)

export const Default = () => (
	<AppBaseStory>
		<Section first>
			<Container>
				<Grid container>
					<Grid item xs={12}>
						<PageHeader>
							<Typography variant="h1">
								Don’t be a stranger
								<br />— say hello.
							</Typography>
							<Typography
								variant="body1"
								style={{
									fontSize: 24,
									lineHeight: '36px',
								}}
							>
								Whether you want to work with us or are interested in learning more
								about what we do, we’d love to hear from you. You can reach us at:
							</Typography>
						</PageHeader>
						<Grid container>
							<Grid item xs={12} lg={4} className={styles.address}>
								<Typography variant="h5">Stockholm</Typography>
								<Typography variant="subtitle2" component="p">
									Lovholmenvagen,
									<br />
									Solna 33,
									<br />
									1017 PS.
								</Typography>
								<List>
									<a href="#tel">Tel +31 20 530 2200</a>
									<a href="#hello">hello@codetogether.network</a>
								</List>
							</Grid>

							<Grid item xs={12} lg={7}>
								<form
									action=""
									role="search"
									onSubmit={e => {
										e.preventDefault()
										console.log('sending..')
									}}
									style={{ overflow: 'hidden' }}
								>
									<Input
										placeholder="Name"
										style={{ width: '100%', marginBottom: 20 }}
									/>
									<Input
										placeholder="Name"
										style={{ width: '100%', marginBottom: 20 }}
									/>
									<Input
										placeholder="How can we help"
										component={<textarea />}
										style={{ width: '100%', height: 200 }}
									/>
									<Button type="submit" color="primary" style={{ marginTop: 20 }}>
										Send Message
									</Button>
								</form>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Section>
	</AppBaseStory>
)

stories.add('Default', Default)

export default Default
