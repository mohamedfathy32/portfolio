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
	const [mobile, setMobile] = useState();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const { projects } = useContext(ProjectsContext);
	const project = projects.find(project => project.id === parseInt(id));
	console.log(project)
	const openModal = (index,mobile) => {
		console.log(mobile)
		setMobile(mobile)
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
						{(mobile ? project.galleryMobile : project.gallery).map((img, index) => (
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
									src={img}
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
					display: modalIsOpen ? 'none' : 'flex',
					marginTop:'20px',
					justifyContent:'center',
					alignContent:'center'

				}}
			>
				{project.gallery.map((img, index) => (
					<SwiperSlide key={index}>
						<img
							src={img}
							alt=''
							className="rounded-xl cursor-pointer shadow-lg"
							style={{
								width: "100%",
								// maxWidth: "300px",
								minHeight: "200px",
								// objectFit: "cover",
								// textAlign:'center'
							}}
							onClick={() => openModal(index,false)}
						/>
					</SwiperSlide>
				))}
			</Swiper>


			<h1 className="font-general-medium mt-10 mb-4 text-2xl xl:text-3xl  leading-normal text-gray-500 dark:text-gray-200">
				mobile screen
			</h1>
			<Swiper
				modules={[Navigation, Pagination]}
				navigation
				pagination={{ clickable: true }}
				spaceBetween={0}
				slidesPerView={2}
				breakpoints={{
					450: { slidesPerView: 2 },
					768: { slidesPerView: 4 },
					1024: { slidesPerView: 5 },
				}}
				style={{
					height: "auto",
					display: modalIsOpen ? 'none' : 'block',
				}}
			>
				{project.galleryMobile.map((img, index) => (
					<SwiperSlide key={index}>
						<img
							src={img}
							alt=''
							className="rounded-xl cursor-pointer shadow-lg"
							style={{
								width: "100%",
								maxHeight: "300px",
								objectFit: "contain",
							}}
							onClick={() => openModal(index,true)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProjectGallery;
