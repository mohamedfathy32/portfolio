import { useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { ProjectsContext } from '../context/ProjectsContext';
import { useContext } from 'react';
// import { SingleProjectProvider } from '../context/SingleProjectContext';

const ProjectSingle = () => {
	const { id } = useParams();
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);
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
		// <div>
		// 	id: {id}
		// </div>
	);
};

export default ProjectSingle;
