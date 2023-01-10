import React from "react";

const ErrorMessage = ({ errorModal, setErrorModal }) => {
	const showHideClassName = errorModal.show
		? "errorMessageModal display-block"
		: "errorMessageModal display-none";
	return (
		<div className={showHideClassName}>
			<section className='errorMessage'>
				<p>{errorModal.message}</p>
				<p>Try another title!</p>
				<button
					className='btn'
					type='button'
					onClick={() => setErrorModal({ show: false })}>
					CLOSE MESSAGE
				</button>
			</section>
		</div>
	);
};

export default ErrorMessage;
