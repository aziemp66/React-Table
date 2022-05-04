import React, { useMemo } from "react";
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	useFilters,
	usePagination,
} from "react-table";
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
		page,
		nextPage,
		previousPage,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		setPageSize,
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
		useSortBy,
		usePagination
	);

	const { globalFilter, pageIndex } = state;

	console.log(rows.map((row) => row.original));

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
					{page.map((row) => {
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
			<div>
				<span>
					Page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>
				<button
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				>{`<<`}</button>
				<button
					onClick={() => {
						previousPage();
					}}
					disabled={!canPreviousPage}
				>
					Previous
				</button>
				<span>
					| Go to page:
					<input
						type="number"
						name="pageIndex"
						id="pageIndex"
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							console.log(e.target.value);
							const pageNumber = e.target.value
								? Number(e.target.value) - 1
								: 0;
							gotoPage(pageNumber);
						}}
						style={{ width: "50px" }}
					/>
				</span>
				<select
					name="pageSize"
					id="pageSize"
					onChange={(e) => setPageSize(Number(e.target.value))}
				>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							{pageSize}
						</option>
					))}
				</select>
				<button
					onClick={() => {
						nextPage();
					}}
					disabled={!canNextPage}
				>
					Next
				</button>
				<button
					onClick={() => {
						gotoPage(pageCount - 1);
					}}
					disabled={!canNextPage}
				>
					{`>>`}
				</button>
			</div>
		</>
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

export const PaginationTable = () => {
	// const columns = useMemo(() => COLUMNS, []);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		state,
		setPageSize,
	} = useTable(
		{
			columns,
			data,
		},
		usePagination
	);

	const { pageIndex } = state;

	return (
		<>
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
					{page.map((row) => {
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
			<div>
				<span>
					Page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>
				<button
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				>{`<<`}</button>
				<button
					onClick={() => {
						previousPage();
					}}
					disabled={!canPreviousPage}
				>
					Previous
				</button>
				<span>
					| Go to page:
					<input
						type="number"
						name="pageIndex"
						id="pageIndex"
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							console.log(e.target.value);
							const pageNumber = e.target.value
								? Number(e.target.value) - 1
								: 0;
							gotoPage(pageNumber);
						}}
						style={{ width: "50px" }}
					/>
				</span>
				<select
					name="pageSize"
					id="pageSize"
					onChange={(e) => setPageSize(Number(e.target.value))}
				>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							{pageSize}
						</option>
					))}
				</select>
				<button
					onClick={() => {
						nextPage();
					}}
					disabled={!canNextPage}
				>
					Next
				</button>
				<button
					onClick={() => {
						gotoPage(pageCount - 1);
					}}
					disabled={!canNextPage}
				>
					{`>>`}
				</button>
			</div>
		</>
	);
};
