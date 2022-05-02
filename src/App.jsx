import {
	SortingTable,
	FilteringTable,
	ColumnFilterTable,
} from "./components/AllTabels";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<ColumnFilterTable />
		</div>
	);
}

export default App;
