import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import ViewTable from '../ViewTable'

const BOOKS_URL = 'https://fakerapi.it/api/v1/books?'

export default function Books() {
  const [Books, setBooks] = useState()

  useEffect(() => {
    const getBooks = axios.get(BOOKS_URL)
    getBooks.then((response) => {
      setBooks(response.data.data)
    })
  }, [])

  return <ViewTable data={Books} />
}
