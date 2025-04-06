import { useContext } from 'react';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectSingle from './ProjectSingle';

const ProjectRelatedProjects = ({ id }) => {
	const { projects } = useContext(ProjectsContext);

	// العثور على المشروع الذي يحتوي على الـ id الذي تم تمريره
	const project = projects.find(project => project.id === parseInt(id));

	// التصفية للمشاريع التي تنتمي إلى نفس الفئة
	const relatedProjects = projects.filter(p => p.category === project.category && p.id !== project.id);

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				Related Projects in {project.category} Category
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{relatedProjects.map((relatedProject) => (
					<ProjectSingle
						title={relatedProject.title}
						category={relatedProject.category}
						image={relatedProject.img}
						key={relatedProject.id}
						id={relatedProject.id}
					/>
				))
				}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
