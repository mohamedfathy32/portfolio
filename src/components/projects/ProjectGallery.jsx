import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectGallery = ({ id }) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const { projects } = useContext(ProjectsContext);
	const project = projects.find(project => project.id === parseInt(id));
	const openModal = (index) => {
		setSelectedIndex(index);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div className="">
			{/* مودال عرض الصورة المكبرة */}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className="fixed inset-0 flex justify-center items-center p-4"
				style={{
					overlay: {
						backgroundColor: "rgba(0, 0, 0, 0.6)",
					},
				}}
			>
				<div
					className="flex justify-center items-center w-full h-full"
				>
					<Swiper
						modules={[Navigation, Pagination]}
						navigation
						loop
						pagination={{ clickable: true }}
						initialSlide={selectedIndex}
						style={{
							width: '100%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}

					>
						{project.ProjectImages.map((project, index) => (
							<SwiperSlide
								key={index}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: '100%',
									height: '100%',
								}}
							>
								<img
									src={project.img}
									alt="Full Size"
									className="modal-image"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Close button */}
				<button
					onClick={closeModal}
					style={{
						position: 'absolute',
						top: '20px',
						right: '20px',
						backgroundColor: '#fff',
						border: 'none',
						borderRadius: '50%',
						width: '40px',
						height: '40px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
						zIndex: '100',
					}}
				>
					<span className="text-lg font-bold">X</span>
				</button>
			</Modal>







			{/* Swiper الأساسي */}
			<Swiper
				modules={[Navigation, Pagination]}
				navigation
				pagination={{ clickable: true }}
				spaceBetween={20}
				breakpoints={{
					450: { slidesPerView: 2 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 4 },
				}}
				style={{
					height: "auto",
					display: modalIsOpen ? 'none' : 'block',
				}}
			>
				{project.ProjectImages.map((project, index) => (
					<SwiperSlide key={project.id}>
						<img
							src={project.img}
							alt={project.title}
							className="rounded-xl cursor-pointer shadow-lg"
							style={{
								width: "100%",
								maxWidth: "300px",
								maxHeight: "250px",
								objectFit: "cover",
							}}
							onClick={() => openModal(index)}
						/>
					</SwiperSlide>
				))}
			</Swiper>


		</div>
	);
};

export default ProjectGallery;
