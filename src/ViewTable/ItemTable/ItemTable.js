import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    wordBreak: 'break-word'
  }
}))

const url =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

// if objects array take 1st object and return 1st key value
// if object return 1st key value
// if string return string

function ItemTable({ props }) {
  const cls = useStyles()

  const handleMoreInfo = () => {
    return alert(props)
  }

  if (typeof props === 'object') {
    if (props.length) {
      return <div className={cls.root}>{Object.values(props[0])[0]}</div>
    }
    return <div className={cls.root}>{Object.values(props)[0]}</div>
  }

  if (url.test(props)) {
    return (
      <div className={cls.root}>
        <Button
          variant="contained"
          color="primary"
          href={props}
          target="_blank"
          rel="noreferrer">
          Ver
        </Button>
      </div>
    )
  }

  if (props.length > 50) {
    return (
      <div className={cls.root}>
        <Button variant="contained" color="primary" onClick={handleMoreInfo}>
          Ver
        </Button>
      </div>
    )
  }

  return <div className={cls.root}>{props}</div>
}

export default ItemTable
