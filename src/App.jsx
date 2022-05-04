import {
	SortingTable,
	FilteringTable,
	ColumnFilterTable,
	CustomTable,
	PaginationTable,
} from "./components/AllTabels";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<CustomTable />
		</div>
	);
}

export default App;
