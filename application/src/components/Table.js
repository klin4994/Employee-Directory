import React from "react";
import { useTable, useFilters, useState} from "react-table";

function Table({ columns, data }) {
    
    // Use the useTable Hook to send the columns and data to build the table
    const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups that includes all headers
      rows, // rows for the table
      prepareRow, // Prepare the row before getting the row props
    } = useTable(
        {
            columns,
            data
        },
        useFilters
    );

    return (
        <div>
            <input

                placeholder={"Search first name..."}
            />
            <input

                placeholder={"Search last name..."}
            />
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <table {...getTableProps()}>
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