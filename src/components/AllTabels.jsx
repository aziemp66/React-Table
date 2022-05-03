import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS, COLUMNS_FILTER } from "./columns";

import styles from "./AllTabels.module.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

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

export const ColumnFilterTable = () => {
	const columns = useMemo(() => COLUMNS_FILTER, []);
	const data = useMemo(() => MOCK_DATA, []);

	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFilter,
		};
	});

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
			defaultColumn,
		},
		useFilters,
		useGlobalFilter,
		useSortBy
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
										<th
											{...column.getHeaderProps(
												column.getSortByToggleProps()
											)}
										>
											{column.render("Header")}
											<div>
												{column.isSorted
													? column.isSortedDesc
														? " 🔽"
														: " 🔼"
													: ""}
											</div>
											<div>
												{column.canFilter
													? column.render("Filter")
													: null}
											</div>
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
