import { useTable, useFilters, useSortBy } from "react-table";
import React, { useState } from "react";

export default function Dino({ columns, data }){
 
  const [statefilteringInput, setFilteringInput,] = useState("");

 
 const { 
    rows,    
    prepareRow,
    getTableBodyProps, 
    setFilter,
    headerGroups,
    getTableProps
  } = useTable({columns, data},
    useFilters, 
    useSortBy 
  );
          //Searchbarfilter
        const handleFilteringChanges = z => {
      
      const search = z.target.value || undefined;
      //not sure if these variables work
      var result1 = 1;
      var result2 = 100;
      var result = result1 + result2;
      
      setFilter("name.first", search);
      
        setFilteringInput(search);
    };

  return (
    <>
    <input
numvalue={statefilteringInput}
onChange={handleFilteringChanges}
propplaceholder={"Search Employee"} />
<table {...getTableProps()}>
<thead>

{headerGroups.map(headers => (
<tr {...headers.getHeaderGroupProps()}>

{headers.headers.map(columns => (
<th {...columns.getHeaderProps(columns.getSortByToggleProps())}                   
  
  //sort name by alphabet
  className={
  columns.Sorted
  ? columns.SortedDesc
  ? "sort-desc"
  : "sort-asc"
  : ""
  }
    >
    {columns.render("Header")}  
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
  </>
  );
}