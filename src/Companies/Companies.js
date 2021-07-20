import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ViewTable from '../ViewTable'

const COMPANIES_URL = 'https://fakerapi.it/api/v1/companies'

export default function Companies() {
  const [Companies, setCompanies] = useState()

  useEffect(() => {
    const getData = axios.get(COMPANIES_URL)
    getData.then((response) => {
      setCompanies(response.data.data)
    })
  }, [])

  return <ViewTable data={Companies} />
}
