import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";

import styles from "./AllTabels.module.css";
import { GlobalFilter } from "./GlobalFilter";

export const BasicTable = () => {
	// const columns = useMemo(() => COLUMNS, []);
	const columns = useMemo(() => GROUPED_COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	});

	return (
		<table {...getTableProps()} className={styles.table}>
			<thead>
				{headerGroups.map((headerGroup) => {
					return (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => {
								return (
									<th {...column.getHeaderProps()}>
										{column.render("Header")}
									</th>
								);
							})}
						</tr>
					);
				})}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td {...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
			<tfoot>
				{footerGroups.map((footerGroup) => {
					return (
						<tr {...footerGroup.getFooterGroupProps()}>
							{footerGroup.headers.map((column) => {
								return (
									<td {...column.getFooterProps()}>
										{column.render("Footer")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tfoot>
		</table>
	);
};

export const CustomTable = () => {
	// const columns = useMemo(() => COLUMNS, []);
	const columns = useMemo(() => CUSTOM_COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
		});

	return (
		<table {...getTableProps()} className={styles.table}>
			<thead>
				{headerGroups.map((headerGroup) => {
					return (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => {
								return (
									<th {...column.getHeaderProps()}>
										{column.render("Header")}
									</th>
								);
							})}
						</tr>
					);
				})}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td {...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export const SortingTable = () => {
	// const columns = useMemo(() => COLUMNS, []);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		useSortBy
	);

	return (
		<table {...getTableProps()} className={styles.table}>
			<thead>
				{headerGroups.map((headerGroup) => {
					return (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => {
								return (
									<th
										{...column.getHeaderProps(
											column.getSortByToggleProps()
										)}
									>
										{column.render("Header")}
										<span>
											{column.isSorted
												? column.isSortedDesc
													? " 🔽"
													: " 🔼"
												: ""}
										</span>
									</th>
								);
							})}
						</tr>
					);
				})}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td {...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
			<tfoot>
				{footerGroups.map((footerGroup) => {
					return (
						<tr {...footerGroup.getFooterGroupProps()}>
							{footerGroup.headers.map((column) => {
								return (
									<td {...column.getFooterProps()}>
										{column.render("Footer")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tfoot>
		</table>
	);
};

export const FilteringTable = () => {
	// const columns = useMemo(() => COLUMNS, []);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
		},
		useGlobalFilter
	);

	const { globalFilter } = state;

	return (
		<>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()} className={styles.table}>
				<thead>
					{headerGroups.map((headerGroup) => {
						return (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => {
									return (
										<th {...column.getHeaderProps()}>
											{column.render("Header")}
										</th>
									);
								})}
							</tr>
						);
					})}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					{footerGroups.map((footerGroup) => {
						return (
							<tr {...footerGroup.getFooterGroupProps()}>
								{footerGroup.headers.map((column) => {
									return (
										<td {...column.getFooterProps()}>
											{column.render("Footer")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tfoot>
			</table>
		</>
	);
};
