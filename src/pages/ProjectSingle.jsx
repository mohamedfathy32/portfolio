import { useLocation, useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { motion } from 'framer-motion';
import { ProjectsContext } from '../context/ProjectsContext';
import { useContext } from 'react';

const ProjectSingle = () => {
	const location = useLocation();
	const { id } = location.state;
	const { projects } = useContext(ProjectsContext);
	console.log(projects)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>

			<ProjectHeader id={id} />
			<ProjectGallery id={id} />
			<ProjectInfo id={id} />

			<ProjectRelatedProjects id={id} />

		</motion.div>
	);
};

export default ProjectSingle;
