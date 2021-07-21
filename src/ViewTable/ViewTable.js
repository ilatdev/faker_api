import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import ItemTable from './ItemTable'
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import ItemTable from './ItemTable/ItemTable'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
    padding: '1rem 3rem'
  },
  refRow: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16
  },
  table: {
    minWidth: 650,
    backgroundColor: '#ECF5FE'
  }
}))

export default function ViewTable({ data, loading }) {
  const cls = useStyles()

  if (loading) {
    return (
      <div className={cls.root}>
        <div>
          <CircularProgress size={100} disableShrink />
        </div>
      </div>
    )
  }

  const tableHeader = Object.keys(data[0]).map((item, index) => (
    <TableCell className={cls.refRow} key={`${item}-${index}`}>
      {item}
    </TableCell>
  ))

  const tableContent = data.map((el, index) => (
    <TableRow key={`table-${index}`}>
      {Object.values(el).map((value, cell) => (
        <TableCell key={`row-${cell}`}>
          <ItemTable content={value} />
        </TableCell>
      ))}
    </TableRow>
  ))

  /* VIEW MAP
  1 - tableHeader => get keys from 1st object and generate table reference columns
  2 - tableContent => get each element value and show as a row
  */

  return (
    <div className={cls.root}>
      <TableContainer component={Paper}>
        <Table className={cls.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>{tableHeader}</TableRow>
          </TableHead>
          <TableBody>{tableContent}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
