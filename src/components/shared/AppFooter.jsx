
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";


const socialLinks = [
	{
		id: 1,
		icon: <FaLinkedinIn />,
		url: 'https://www.linkedin.com/in/mohamed-fathy-3a3a49239/',
	},
	{
		id: 2,
		icon: <FaGithub />,
		url: 'https://github.com/mohamedfathy32',
	},
	{
		id: 3,
		icon: <FaWhatsapp />,
		url: 'https://wa.me/201094976357',
	},
	{
		id: 4,
		icon: <FaFacebookF />,
		url: 'https://www.facebook.com/profile.php?id=100004560096021',
	},
	{
		id: 5,
		icon: <FaTwitter />,
		url: 'https://x.com/mohamed_fathy38',
	},
	{
		id: 6,
		icon: <FaInstagram />,
		url: 'https://www.instagram.com/mohamed_fathy26/',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<div className="flex gap-4 sm:gap-8 justify-center" style={{flexWrap:'wrap'}}>
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="_blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
								rel="noreferrer"
							>
								<div className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</div>
							</a>
						))}
					</div>

				</div>
			</div>
		</div>
	);
};

export default AppFooter;
