import React, {useState} from "react";
import { useTable, useFilters, useSortBy} from "react-table";
import "./index.css"
function Table({ columns, data }) {
    
    // Use the useTable Hook to send the columns and data to build the table
    const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups that includes all headers
      rows, // rows for the table
      prepareRow, // Prepare the row before getting the row props
      setFilter, // sets filters for columns
    } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useSortBy
    );
    // Create states for searching/filtering functionalities
    const [firstNameSearch, setFirstNameSearch] = useState("");
    const [lastNameSearch, setLastNameSearch] = useState("");
    
    // Update the first name state when input changes
    const handleFirstNameChange = e => {
        const value = e.target.value || undefined;
        setFirstNameSearch(value);
        setFilter("name.first", value)
    };
    // Update the last name state when input changes
    const handleLastNameChange = e => {
        const value = e.target.value || undefined;
        setLastNameSearch(value);
        setFilter("name.last", value)
    };
    return (
        <div>
            <input
                value={firstNameSearch}
                onChange={handleFirstNameChange}
                placeholder={"Search first name..."}
            />
            <input
                value={lastNameSearch}
                onChange={handleLastNameChange}
                placeholder={"Search last name..."}
            />
            <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                     <span>
                  </span>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
      );
}

export default Table;