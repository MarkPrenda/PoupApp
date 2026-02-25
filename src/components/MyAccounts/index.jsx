import { Button } from "../Button";
import { IconWallet } from "../icons";
import { MyAccountItem } from "../MyAccountItem";
import styles from "./my-accounts.module.css";

export const MyAccount = () => {
	const items = [
		{ description: "Saldo", value: 1200, bank: "Any bank" },
		{
			description: "Saldo",
			value: 800,
			bank: "Byte bank",
		},
		{
			description: "Saldo",
			value: 1800,
			bank: "Switch Bank",
		},
		{
			description: "Saldo",
			value: 1800,
			bank: "Switch Bank",
		},
		{
			description: "Saldo",
			value: 1800,
			bank: "Switch Bank",
		},
	];

	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{items.map((maItem, index) => {
					return (
						<li key={index}>
							<MyAccountItem item={maItem} />
						</li>
					);
				})}
			</ul>

			<div className={styles.buttonContainer}>
				<Button>
					<IconWallet />
					Adicionar Conta
				</Button>
			</div>
		</div>
	);
};
