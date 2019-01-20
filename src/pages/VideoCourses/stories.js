import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import AppBaseStory from '../../containers/AppBase/stories';
import Container from '../../components/Container';
import Media from '../../components/Media';
import Grid from '../../components/Grid';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import Typography from '../../components/Typography';
import Card from '../../components/Card';
import PlayIcon from '../../components/icons/PlayIcon';
import ArrowRight from '../../components/icons/ArrowRight';
import styles from './styles.module.scss';
const stories = storiesOf('3. Pages/VideoCourses', module);

export const Default = () => (
	<AppBaseStory>
		<Section first>
			<Container>
				<Grid container>
					<Grid item xs={12}>
						<PageHeader>
							<Typography variant="h2">Video Courses</Typography>
							<Typography variant="h5">
								Learn web design with CodeTogether, from JS, React, Docker and
								Microservices basics to the .
							</Typography>
						</PageHeader>
					</Grid>
				</Grid>
				<Grid container spacing={24}>
					{Array.from(new Array(6), (val, index) => (
						<Grid item xs={12} sm={6} md={4} lg={4} key={index}>
							<Card>
								<a href="#course" className={styles.courseLink}>
									<div className={styles.relative}>
										<Media
											component="img"
											src="//placekitten.com/g/300/300"
											alt={text('alt', 'Building grid layout')}
										/>
										<PlayIcon className={styles.playIcon} />
									</div>

									<Typography
										className={styles.courseTitle}
										variant="h3"
										color="inherit"
									>
										{text('title', 'Introduction to Immutable JS')}
									</Typography>
									<Typography
										className={styles.courseCount}
										variant="body2"
										color="inherit"
									>
										{text('total', '3 VIDEOS')}
									</Typography>
									<Typography variant="body1" color="inherit">
										{text(
											'description',
											'Ad consectetur duis excepteur pariatur Lorem eu reprehenderit ex labore ea incididunt adipisicing magna. Consectetur do et dolore consectetur sit incididunt nostrud quis commodo ut culpa ullamco Lorem voluptate. Cupidatat nostrud ea nostrud non adipisicing tempor Lorem. Minim cillum officia esse Lorem.',
										)}
									</Typography>
									<div className={styles.viewCourseWrapper}>
										<Typography variant="subtitle1" color="inherit">
											{text('Link', 'View Course')}
										</Typography>
										<ArrowRight className={styles.arrowRight} />
									</div>
								</a>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Section>
	</AppBaseStory>
);

stories.add('Default', Default);

export default Default;
