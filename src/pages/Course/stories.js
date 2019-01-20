import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import AppBaseStory from '../../containers/AppBase/stories'
import Container from '../../components/Container'
import Media from '../../components/Media'
import Grid from '../../components/Grid'
import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import Typography from '../../components/Typography'
import SeriesItem from '../../components/SeriesItem'
import CourseSidebar from '../../components/CourseSidebar'
import CourseSidebarInfo from '../../components/CourseSidebarInfo/CourseSidebarInfo'
import styles from './styles.module.scss'

const stories = storiesOf('3. Pages/Course', module)

export const Default = () => (
	<AppBaseStory>
		<Section first>
			<Container>
				<Grid container spacing={32}>
					<Grid item xs={12} md={8} lg={8} xl={8}>
						<PageHeader>
							<Typography variant="h2">Intro to Immutable JS</Typography>
							<Typography
								variant="body3"
								style={{
									lineHeight: 1.6,
									fontSize: 17,
									color: 'inherit',
								}}
							>
								Learn about functional data structures and their uses in this
								overview of Facebook's popular library for JavaScript: Immutable.js
							</Typography>
							<Typography
								variant="h2"
								style={{
									fontSize: 22,
								}}
							>
								Requirements
							</Typography>
							<ul className={styles.seriesRequirmentList}>
								<li>
									Make sure you have <code>node</code> instsalled on your machine
								</li>
								<li>Basics of JavaScript Data Structure</li>
							</ul>
							<Typography
								variant="h2"
								style={{
									fontSize: 22,
								}}
							>
								In this lesson, you will learn
							</Typography>
							<ul className={styles.seriesRequirmentList}>
								<li>
									throw a <code>Promise</code>
								</li>
								<li>
									catch that <code>Promise with Suspense</code>
								</li>
								<li>add that data to cache</li>
							</ul>
						</PageHeader>
					</Grid>
				</Grid>
				<Grid container spacing={32}>
					<Grid item xs={12} md={8} lg={8} xl={8} className={styles.seriesMain}>
						<ul className={styles.seriesList}>
							{Array.from(new Array(6), (val, index) => (
								<SeriesItem key={index}>
									<a href="#" className={styles.seriesCard}>
										<div className={styles.seriesMediaWrapper}>
											<Media
												className={styles.seriesMedia}
												component="img"
												src="//placekitten.com/g/300/300"
												alt={text('alt', 'Building grid layout')}
											/>
										</div>
										<div className={styles.seriesContent}>
											<small>
												<strong>Episode</strong> 01 •{' '}
												<strong>Duration</strong> 34:19
											</small>
											<Typography variant="h3" className={styles.seriesTitle}>
												{text(
													'title',
													'How Subsets of an Immutable.js Map() works',
												)}
											</Typography>
											<Typography
												variant="body1"
												className={styles.itemDescription}
											>
												{text(
													'description',
													'In this mini-series Im going to try and create website using Gatsby.js and WordPress.',
												)}
											</Typography>
										</div>
									</a>
								</SeriesItem>
							))}
						</ul>
					</Grid>
					<Grid item xs={12} md={4} lg={4} xl={4} className={styles.sidebarWrapper}>
						<CourseSidebar className={styles.sidebarSticky}>
							<Media
								className={styles.seriesMedia}
								style={{
									marginBottom: 0,
									borderRadius: '4px 4px 0px 0px',
									transitionTimingFunction: 'ease-out',
								}}
								component="img"
								src="//placekitten.com/g/300/300"
								alt={text('alt', 'Building grid layout')}
							/>
							<CourseSidebarInfo>
								<img
									src="/static/images/video.png"
									width="24"
									alt=""
									className="course-icon"
									style={{
										marginTop: -1,
										marginRight: 10,
										opacity: 0.5,
									}}
								/>
								<Typography
									variant="h4"
									style={{
										display: 'inline-block',
										fontSize: 17,
										margin: 0,
									}}
								>
									3
								</Typography>
								<Typography
									variant="h4"
									style={{
										display: 'inline-block',
										fontSize: 17,
										margin: 0,
									}}
								>
									&nbsp;video lessons
								</Typography>
							</CourseSidebarInfo>
							<CourseSidebarInfo>
								<img
									src="/static/images/length.png"
									width="24"
									alt=""
									className="course-icon"
									style={{
										marginTop: -1,
										marginRight: 10,
										opacity: 0.5,
									}}
								/>
								<Typography
									variant="h4"
									style={{
										display: 'inline-block',
										fontSize: 17,
										margin: 0,
									}}
								>
									Intermediate
								</Typography>
							</CourseSidebarInfo>
							<CourseSidebarInfo>
								<img
									src="/static/images/level.png"
									width="24"
									alt=""
									className="course-icon"
									style={{
										marginTop: -1,
										marginRight: 10,
										opacity: 0.5,
									}}
								/>
								<Typography
									variant="h4"
									style={{
										display: 'inline-block',
										fontSize: 17,
										margin: 0,
									}}
								>
									9
								</Typography>
								<Typography
									variant="h4"
									style={{
										display: 'inline-block',
										fontSize: 17,
										margin: 0,
									}}
								>
									&nbsp;min
								</Typography>
							</CourseSidebarInfo>
						</CourseSidebar>
					</Grid>
				</Grid>
			</Container>
		</Section>
	</AppBaseStory>
)

stories.add('Default', Default)

export default Default
