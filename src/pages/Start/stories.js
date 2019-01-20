import React from 'react'
import classnames from 'classnames'
import { storiesOf } from '@storybook/react'
import AppBaseStory from '../../containers/AppBase/stories'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Heart from '../../components/icons/Heart'
import Mind from '../../components/icons/Mind'
import Dislike from '../../components/icons/Dislike'
import Section from '../../components/Section'
import Typography from '../../components/Typography'
import Media from '../../components/Media'
import styles from './start.module.scss'

const stories = storiesOf('3. Pages/Start', module)

export const Default = () => (
	<AppBaseStory>
		<Section first>
			<div className={styles.paperGooey}>
				<Media component="img" src="/static/images/banner.svg" width={1920} height={1080} />
			</div>
			<Container>
				<Grid container>
					<Grid item xs={12} xl={10}>
						<Typography variant="h5">
							<span>Learn + Create + Share</span>
						</Typography>
						<Typography variant="h1">
							<span>Grow your Competence.</span>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Section>
		<Section>
			<Container>
				<Grid container>
					<Grid xs={12} xl={8}>
						<div
							className={classnames(
								styles.reveal,
								styles['reveal--left'],
								styles['reveal--darken'],
								styles['reveal--primary'],
							)}
						>
							<figure className={styles.reveal__background} />
							<Typography variant="h3">Grow your competence</Typography>
							<div className={styles.reveal__copy}>
								<Typography variant="body3" style={{ fontSize: 16 }}>
									CodeTogether is an online platform that offers free online
									coding classes that gives you the tools and training you need to
									launch your new career—from the comfort of your own home.
								</Typography>
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Section>
		<Section style={{ padding: 0 }}>
			<Container>
				<Grid container>
					<Grid item xs={12} md={4} lg={4} xl={4} className={styles.margin40}>
						<Typography variant="h4">Weekly Online Live Sessions</Typography>
						<Typography variant="body1">
							Live structured coding sessions from the convenience of wherever, with
							instant, one-on-one help whenever you need it.
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} lg={4} xl={4} className={styles.margin40}>
						<Typography variant="h4">Gain experience by coding</Typography>
						<Typography variant="body1">
							We’ll lead you through the process of defining what makes you unique and
							then express this through a brand identity.
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} lg={4} xl={4}>
						<Typography variant="h4">Pay Nothing All is for Free</Typography>
						<Typography variant="body1">
							No up-front tuition. Everthing is for FREE
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Section>
		<Section
			style={{
				paddingTop: 0,
			}}
		>
			<Container>
				<Grid container>
					<Grid item xs={12} style={{ margin: '40px 0' }}>
						<Typography variant="h3">What We Look For </Typography>
					</Grid>

					<Grid item xs={12} md={4} lg={4}>
						<Heart style={{ fontSize: '2.4em' }} />
						<Typography variant="h4" style={{ marginTop: 15 }}>
							Passion for coding
						</Typography>
						<Typography variant="body1" style={{ minHeight: 100 }}>
							You've demonstrated your passion by beginning to learn on your own. You
							have the determination to become a developer whether you get into
							Codetogether or not.
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<Mind style={{ fontSize: '2.4em' }} />
						<Typography variant="h4" style={{ marginTop: 15 }}>
							Growth Mindset
						</Typography>
						<Typography variant="body1" style={{ minHeight: 100 }}>
							Whatever you've been working on so far, you've strived hard for
							excellence. You're focused on facilitating growth both personally and
							for others.
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} lg={4}>
						<Dislike style={{ fontSize: '2.4em' }} />
						<Typography variant="h4" style={{ marginTop: 15 }}>
							"No asshole" rule*
						</Typography>
						<Typography variant="body1" style={{ minHeight: 100 }}>
							We like to live by a no-asshole policy. We look for students who are
							considerate, helpful and work well with others.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Section>
	</AppBaseStory>
)

stories.add('Default', Default)

export default Default
