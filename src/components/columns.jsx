import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
	{
		Header: "Id",
		Footer: "Id",
		accessor: "id",
	},
	{
		Header: "First Name",
		Footer: "First Name",
		accessor: "first_name",
	},
	{
		Header: "Last Name",
		Footer: "Last Name",
		accessor: "last_name",
	},
	{
		Header: "Email",
		Footer: "Email",
		accessor: "email",
	},
	{
		Header: "Age",
		Footer: "Age",
		accessor: "age",
	},
	{
		Header: "Country",
		Footer: "Country",
		accessor: "country",
	},
	{
		Header: "Phone",
		Footer: "Phone",
		accessor: "phone",
	},
	{
		Header: "Date of Creation",
		accessor: "date_of_creation",
		Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
	},
];

export const GROUPED_COLUMNS = [
	{
		Header: "Id",
		accessor: "id",
		Footer: "Id",
	},
	{
		Header: "Name",
		columns: [
			{
				Header: "First Name",
				accessor: "first_name",
			},
			{
				Header: "Last Name",
				accessor: "last_name",
			},
		],
		Footer: "Full Name",
	},
	{
		Header: "User Info",
		columns: [
			{
				Header: "Email",
				accessor: "email",
			},
			{
				Header: "Age",
				accessor: "age",
			},
			{
				Header: "Country",
				accessor: "country",
			},
			{
				Header: "Phone",
				accessor: "phone",
			},
			{
				Header: "Date of Creation",
				accessor: "date_of_creation",
			},
		],
		Footer: "User Info",
	},
];

export const CUSTOM_COLUMNS = [
	{
		Header: "User Data",
		columns: [
			{
				Header: "Id",
				columns: [
					{
						accessor: "id",
					},
				],
			},
			{
				Header: "Name",
				columns: [
					{
						Header: "First Name",
						accessor: "first_name",
					},
					{
						Header: "Last Name",
						accessor: "last_name",
					},
				],
			},
			{
				Header: "User Info",
				columns: [
					{
						Header: "Email",
						accessor: "email",
					},
					{
						Header: "Age",
						accessor: "age",
					},
					{
						Header: "Country",
						accessor: "country",
					},
					{
						Header: "Phone",
						accessor: "phone",
					},
					{
						Header: "Date of Creation",
						accessor: "date_of_creation",
					},
				],
			},
		],
	},
];

export const COLUMNS_FILTER = [
	{
		Header: "Id",
		Footer: "Id",
		accessor: "id",
		disableFilters: true,
	},
	{
		Header: "First Name",
		Footer: "First Name",
		accessor: "first_name",
	},
	{
		Header: "Last Name",
		Footer: "Last Name",
		accessor: "last_name",
	},
	{
		Header: "Email",
		Footer: "Email",
		accessor: "email",
	},
	{
		Header: "Age",
		Footer: "Age",
		accessor: "age",
	},
	{
		Header: "Country",
		Footer: "Country",
		accessor: "country",
	},
	{
		Header: "Phone",
		Footer: "Phone",
		accessor: "phone",
	},
	{
		Header: "Date of Creation",
		accessor: "date_of_creation",
		Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
	},
];
