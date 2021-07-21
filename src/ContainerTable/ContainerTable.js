import React, { useState, useEffect } from 'react'
import ViewTable from '../ViewTable'
import axios from 'axios'

export default function ContainerTable({ url }) {
  const [state, setState] = useState()

  useEffect(() => {
    const getData = axios.get(url)
    getData
      .then((response) => {
        setState(response.data.data)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }, [url])

  return <ViewTable data={state} />
}
