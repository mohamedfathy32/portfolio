const FormInput = ({ inputLabel, labelFor, inputType, inputId, inputName, placeholderText, ariaLabelName, onChange, value }) => {
	return (
	  <div className="mt-4">
		<label htmlFor={labelFor} className="block text-lg text-primary-dark dark:text-primary-light mb-2">
		  {inputLabel}
		</label>
		<input
		  type={inputType}
		  id={inputId}
		  name={inputName}
		  placeholder={placeholderText}
		  aria-label={ariaLabelName}
		  onChange={onChange}
		  value={value}  // تأكد من تمرير القيمة هنا
		  className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
		/>
	  </div>
	);
  };
  
  export default FormInput;
  