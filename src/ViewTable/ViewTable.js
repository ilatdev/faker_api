import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Box
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

import ItemTable from './ItemTable/ItemTable'
import PaginationActions from './PaginationActions'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  refRow: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16
  },
  table: {
    minWidth: 500,
    backgroundColor: '#edf6f9'
  }
}))

export default function ViewTable({ data, loading }) {
  const cls = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  if (loading) {
    return (
      <Box className={cls.root}>
        <Box mt={10}>
          <CircularProgress size={100} disableShrink />
        </Box>
      </Box>
    )
  }

  const tableHeader = Object.keys(data[0]).map((item, index) => (
    <TableCell className={cls.refRow} key={`${item}-${index}`}>
      {item}
    </TableCell>
  ))

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Box className={cls.root}>
      <Box my={5} px={5}>
        <TableContainer component={Paper}>
          <Table className={cls.table} aria-label="custom pagination table">
            <TableHead>
              <TableRow>{tableHeader}</TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((el, index) => (
                <TableRow hover key={`table-${index}`}>
                  {Object.values(el).map((value, cell) => (
                    <TableCell align="justify" key={`row-${cell}`}>
                      <ItemTable content={value} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={PaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
