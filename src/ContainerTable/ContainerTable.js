import React, { useState, useEffect } from 'react'
import ViewTable from '../ViewTable'
import axios from 'axios'

export default function ContainerTable({ url }) {
  const [state, setState] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const getData = axios.get(url)
    getData
      .then((response) => {
        setState(response.data.data)
        setLoading(false)
      })
      .catch((err) => {
        alert(new Error(err.message))
      })
  }, [url])

  return <ViewTable data={state} loading={loading} />
}
