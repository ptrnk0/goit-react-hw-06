import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contactName, number, id, onDeleteContact }) => {
	return (
		<div className={css.contactContainer}>
			<div className={css.contactText}>
				<FaUser />
				<p>{contactName}</p>
			</div>
			<div className={css.contactText}>
				<FaPhone />
				<p>{number}</p>
			</div>
			<button
				type="button"
				onClick={() => onDeleteContact(id)}
				className={css.contactBtn}
			>
				Delete
			</button>
		</div>
	);
};

export default Contact;
