import { SortingTable, FilteringTable } from "./components/AllTabels";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<FilteringTable />
		</div>
	);
}

export default App;
