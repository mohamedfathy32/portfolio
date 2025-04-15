import { useContext } from 'react';
import { ProjectsContext } from '../../context/ProjectsContext';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const ProjectInfo = ({ id }) => {

	const { projects } = useContext(ProjectsContext);
	const project = projects.find(project => project.id === parseInt(id));
	const shareUrl = window.location.href;
	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{project.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{project.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span className='font-semibold'>{info.title} : </span>
										{info.title === 'Website' || info.title === 'repo' ? (
											<a
												href={info.details}
												className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
												aria-label="Project Website"
												target="_blank"
												rel="noopener noreferrer"
											>
												{info.details}
											</a>
										) : (
											<span className="text-base">{info.details}</span>
										)}

									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{project.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{project.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{project.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{project.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Share This Project
					</p>
					<div className="flex items-center gap-3 mt-5">

						<LinkedinShareButton url={shareUrl}>
							<LinkedinIcon size={32} round />
						</LinkedinShareButton>
						<WhatsappShareButton url={shareUrl} title="Check out this amazing project!">
							<WhatsappIcon size={32} round />
						</WhatsappShareButton>
						<TwitterShareButton url={shareUrl} title="Check out this amazing project!">
							<TwitterIcon size={32} round />
						</TwitterShareButton>
						<FacebookShareButton url={shareUrl} quote="Check out this amazing project!">
							<FacebookIcon size={32} round />
						</FacebookShareButton>

					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{project.ProjectInfo.ProjectDetailsHeading}
				</p>
				{project.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
