import React from 'react'
import { useTable } from 'react-table'
import styled from 'styled-components'

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

  } = useTable({
    columns,
    data,
  })

  return (
    <Container>
    <Thead {...getTableProps()}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
    </Thead>

      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </Tbody>
    </Container>
  )
}

export {Table}

const Container = styled.table`
    margin: auto;
    text-align: center;
    width: 60%;
    border-top: 40px;
    padding: 5rem;
    //border-collapse: collapse;

`
const Thead = styled.thead`
    color: #000;
    background: rgb(240,248,255);
    min-width: 300px;
    justify-content: space-between;
` 
const Tbody = styled.tbody`
    color: #000;
    background: rgb(192, 193, 196);
    min-width: 300px;
    justify-content: space-between;
`