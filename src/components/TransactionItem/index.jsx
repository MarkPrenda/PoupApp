import styles from "./transaction-item.module.css";

const formater = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export const TransactionItem = ({ item }) => {
	const detailAdditionalClassName =
		item.value >= 0 ? styles.income : styles.expense;
	return (
		<div className={styles.transaction}>
			<div className={[styles.details, detailAdditionalClassName].join(" ")}>
				<p>{item.description}</p>
				<p>{formater.format(item.value)}</p>
			</div>
			<div className={styles.date}>
				{new Date(item.date).toLocaleDateString("pt-BR")}
			</div>
		</div>
	);
};
