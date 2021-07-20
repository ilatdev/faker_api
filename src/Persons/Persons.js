import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ViewTable from '../ViewTable'

const PERSONS_URL = 'https://fakerapi.it/api/v1/persons'

export default function Persons() {
  const [Persons, setPersons] = useState()

  useEffect(() => {
    const getData = axios.get(PERSONS_URL)
    getData.then((response) => {
      setPersons(response.data.data)
    })
  }, [])

  return <ViewTable data={Persons} />
}
