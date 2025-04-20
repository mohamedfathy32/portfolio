import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutClients = () => {
	const { skills, skillsHeading } = useContext(AboutMeContext);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{skillsHeading}
			</p>
			<div className="flex flex-wrap md:gap-16 gap-10 justify-center mt-8">
				{skills.map((skill) => (
					<div
						key={skill.id}
						className='mb-8 cursor-pointer text-center md:w-36 w-16'
					>
						<img
							src={skill.icon}
							alt={skill.title}
							className=' transition-transform transform hover:scale-110 duration-200'
						/>
						<p className="text-base mt-2 text-primary-dark dark:text-primary-light font-semibold">
							{skill.title}
						</p>
					</div>
				))}

			</div>
		</div>
	);
};

export default AboutClients;
