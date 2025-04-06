import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import Swal from "sweetalert2";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();
		console.log("form data : ");
		console.log(formData);

		// إرسال البريد عبر EmailJS
		emailjs.send(
			"service_vkb5dq3", // Service ID
			"template_ztuoiwr", // Template ID
			formData,
			"ovpQn_TavAHWRbiSP" // Public Key
		)
			.then(() => {
				// استخدام SweetAlert2 عند النجاح
				Swal.fire({
					icon: 'success',
					title: ' تم إرسال الرسالة بنجاح',
					text: 'سوف يتم الرد في أقرب وقت',
					showConfirmButton: true,
					confirmButtonText: 'موافق',
					timer: 7000, 
					timerProgressBar: true,
					customClass: {
						confirmButton: 'my-custom-button', 
					},
				});



			})
			.catch((error) => {
				// استخدام SweetAlert2 في حالة حدوث خطأ
				Swal.fire({
					icon: 'error',
					title: 'خطأ في الإرسال',
					text: `حدث خطأ: ${error.text}`,
					showConfirmButton: true,
				});
			});
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form onSubmit={sendEmail} className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput inputLabel="Full Name" labelFor="name" inputType="text" inputId="name" inputName="name" placeholderText="Your Name" ariaLabelName="Name" onChange={handleChange} value={formData.name} />
					<FormInput inputLabel="Email" labelFor="email" inputType="email" inputId="email" inputName="email" placeholderText="Your email" ariaLabelName="Email" onChange={handleChange} value={formData.email} />
					<FormInput inputLabel="Subject" labelFor="subject" inputType="text" inputId="subject" inputName="subject" placeholderText="Subject" ariaLabelName="Subject" onChange={handleChange} value={formData.subject} />


					<div className="mt-6">
						<label className="block text-lg text-primary-dark dark:text-primary-light mb-2" htmlFor="message">
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							onChange={handleChange}
							value={formData.message}  // إضافة value هنا
						/>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button title="Send Message" type="submit" aria-label="Send Message" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
