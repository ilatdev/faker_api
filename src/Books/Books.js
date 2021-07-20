import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ViewTable from '../ViewTable'

const BOOKS_URL = 'https://fakerapi.it/api/v1/books'

export default function Books() {
  const [Books, setBooks] = useState()

  useEffect(() => {
    const getData = axios.get(BOOKS_URL)
    getData.then((response) => {
      setBooks(response.data.data)
    })
  }, [])

  return <ViewTable data={Books} />
}
