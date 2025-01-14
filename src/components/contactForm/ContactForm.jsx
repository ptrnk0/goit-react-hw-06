import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Name must be at least 3 characters")
		.max(50, "Name must be at most 50 characters")
		.required("Name is required"),
	number: Yup.string()
		.min(3, "Number must be at least 3 characters")
		.max(50, "Number must be at most 50 characters")
		.required("Number is required"),
});

const ContactForm = ({ onAddContact }) => {
	const initialValues = { name: "", number: "" };
	const handleSubmit = (values, actions) => {
		onAddContact(values);
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={contactFormSchema}
		>
			<Form className={css.contactForm}>
				<div className={css.contactFieldContainer}>
					<div>
						<Field
							type="text"
							name="name"
							className={css.contactLabelField}
							placeholder="Name"
						></Field>
						<ErrorMessage
							name="name"
							component="span"
							className={css.contactError}
						/>
					</div>

					<div>
						<Field
							type="text"
							name="number"
							className={css.contactLabelField}
							placeholder="Number"
						></Field>
						<ErrorMessage
							name="number"
							component="span"
							className={css.contactError}
						/>
					</div>
				</div>

				<button type="submit" className={css.contactBtn}>
					Add contact
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
