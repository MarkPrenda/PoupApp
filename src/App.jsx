import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { Dailybudget } from "./components/DailyBudget";
import { Main } from "./components/Main";
import { SavingStatus } from "./components/SavingsStatus/inde";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";
import { MyAccount } from "./components/MyAccounts";

function App() {
	return (
		<>
			<Container>
				<Aside />
				<Main>
					<div className={styles.container}>
						<SearchInput />
						<div className={styles.intro}>
							<Typography variant="h1">Hello, Dex!</Typography>
							<Typography variant="body">
								See how your finances are today.
							</Typography>
						</div>
						<section className={styles.grid}>
							<Card>
								<Card.Header>Daily Budget:</Card.Header>
								<Card.Body>
									<Dailybudget value={200} />
								</Card.Body>
							</Card>
							<Card>
								<Card.Header>Progress towards the financial goal</Card.Header>
								<Card.Body>
									<SavingStatus percent={63} />
								</Card.Body>
							</Card>
							<Card>
								<Card.Header>Financial Transactions</Card.Header>
								<Card.Body>
									<Transactions></Transactions>
								</Card.Body>
							</Card>
							<Card>
								<Card.Header>My accounts</Card.Header>
								<Card.Body>
									<MyAccount></MyAccount>
								</Card.Body>
							</Card>
						</section>
					</div>
				</Main>
			</Container>
		</>
	);
}

export default App;
