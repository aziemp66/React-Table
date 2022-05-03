import React from "react";

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column;
	return (
		<span>
			<div>Search : {` `}</div>
			<input
				value={filterValue || ""}
				onChange={(e) => {
					setFilter(e.target.value);
				}}
			/>
		</span>
	);
};
