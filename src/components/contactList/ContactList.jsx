import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const getFilteredContacts = (contacts, filter) => {
	return contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};

const ContactList = () => {
	const filter = useSelector((state) => state.filters.name);
	const contacts = useSelector((state) => state.contacts.items);
	const filteredContacts = getFilteredContacts(contacts, filter);

	return (
		<ul className={css.contactList}>
			{filteredContacts.map((item) => {
				return (
					<li key={item.id}>
						<Contact
							contactName={item.name}
							number={item.number}
							id={item.id}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
