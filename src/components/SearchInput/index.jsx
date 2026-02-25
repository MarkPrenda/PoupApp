import { IconSearch } from "../icons";
import styles from "./search-input.module.css";

export const SearchInput = (props) => {
	return (
		<div className={styles.container}>
			<IconSearch />
			<input className={styles.input} {...props} />
		</div>
	);
};
