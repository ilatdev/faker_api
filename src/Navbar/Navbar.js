import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: '#fff'
  }
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}>
            Books
          </Typography>
          <Typography
            component={Link}
            to="/persons"
            variant="h6"
            className={classes.title}>
            Persons
          </Typography>
          <Typography
            component={Link}
            to="/companies"
            variant="h6"
            className={classes.title}>
            Companies
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
