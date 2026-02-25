import styles from "./aside.module.css";
import logo from "../../assets/logo.svg";

export const Aside = () => {
	return (
		<aside className={styles.aside}>
			<img src={logo} alt="" />
			<footer className={styles.footer}>
				Developed by Alura. Fictional project with no commercial purpose. Styled
				by Midnite Design Studio.
			</footer>
		</aside>
	);
};
