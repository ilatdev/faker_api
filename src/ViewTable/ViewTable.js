import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ItemTable from './ItemTable'
import { Paper } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
    padding: '1rem 2rem'
  },
  table: {
    padding: '1rem',
    backgroundColor: '#D8ECFD'
  },
  refRow: {
    display: 'grid',
    gridAutoColumns: 120,
    gridAutoFlow: 'column',
    gridGap: '10px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18
  },
  valueRow: {
    display: 'grid',
    gridAutoColumns: 120,
    gridAutoFlow: 'column',
    gridGap: '10px',
    borderTop: '1px solid'
  }
}))

export default function ViewTable({ data }) {
  const cls = useStyles()

  if (!data) {
    return (
      <div className={cls.root}>
        <div>
          <CircularProgress size={100} disableShrink />
        </div>
      </div>
    )
  }

  /* VIEW MAP
  1 - refRow => get keys from 1st object and generate reference row
  2 - valueRow => get each element key value and show as a row
  */

  return (
    <div className={cls.root}>
      <Paper className={cls.table}>
        <div className={cls.refRow}>
          {Object.keys(data[0]).map((item, index) => (
            <ItemTable key={`${item}-${index}`} props={item} />
          ))}
        </div>
        {data.map((el, index) => (
          <div key={index} className={cls.valueRow}>
            {Object.values(el).map((value, index) => (
              <ItemTable key={index} props={value} />
            ))}
          </div>
        ))}
      </Paper>
    </div>
  )
}
