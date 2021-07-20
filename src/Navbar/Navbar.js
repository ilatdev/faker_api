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
    color: '#fff',
    marginRight: '1rem'
  }
}))

export default function Navbar() {
  const cls = useStyles()

  return (
    <div className={cls.root}>
      <AppBar position="static">
        <Toolbar className={cls.toolbar}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={cls.title}>
            Books
          </Typography>
          <Typography
            component={Link}
            to="/persons"
            variant="h6"
            className={cls.title}>
            Persons
          </Typography>
          <Typography
            component={Link}
            to="/companies"
            variant="h6"
            className={cls.title}>
            Companies
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
