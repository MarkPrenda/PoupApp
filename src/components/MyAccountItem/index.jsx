import styles from "./my-account-item.module.css";
import { IconBank } from "../icons";

const formater = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export const MyAccountItem = ({ item }) => {
	return (
		<div className={styles.account}>
			<div className={styles.container}>
				<IconBank />
				<div className={styles.bank}>{item.bank}</div>
			</div>
			<div className={styles.details}>
				<p>{item.description}</p>
				<p>{formater.format(item.value)}</p>
			</div>
		</div>
	);
};
