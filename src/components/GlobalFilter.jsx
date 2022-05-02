import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
	return (
		<span>
			Search :{" "}
			<input
				value={filter ? filter.value : ""}
				onChange={(e) => {
					setFilter(e.target.value);
				}}
				placeholder="Type to filter..."
			/>
		</span>
	);
};
