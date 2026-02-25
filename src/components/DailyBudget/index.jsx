import styles from "./daily-budget.module.css";

const formater = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export const Dailybudget = ({ value }) => {
	return <p className={styles.dailybudget}>{formater.format(value)}</p>;
};
