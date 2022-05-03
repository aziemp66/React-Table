import {
	SortingTable,
	FilteringTable,
	ColumnFilterTable,
	PaginationTable,
} from "./components/AllTabels";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<PaginationTable />
		</div>
	);
}

export default App;
