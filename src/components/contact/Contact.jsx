import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contactName, number, id }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteContact(id));
	};

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
				className={css.contactBtn}
				onClick={handleDelete}
			>
				Delete
			</button>
		</div>
	);
};

export default Contact;
