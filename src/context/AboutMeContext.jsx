import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { skillsHeading as clientsPageHeading } from '../data/skills';
import { skills as clientsDataJson } from '../data/skills';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const skillsHeading = clientsPageHeading;

	const [skills, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				skillsHeading,
				skills,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
