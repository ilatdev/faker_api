import React from 'react'
import { Button } from '@material-ui/core'

// url regex
const url =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

// if objects array take 1st object and return 1st key value
// if object return 1st key value
// if string return string

function ItemTable({ content }) {
  const handleMoreInfo = () => {
    return alert(content)
  }

  // if content type object get 1st object key value
  if (typeof content === 'object') {
    return content.length
      ? Object.values(content[0])[0]
      : Object.values(content)[0]
  }

  // if content is url return button link
  if (url.test(content)) {
    return (
      <Button
        variant="contained"
        color="primary"
        href={content}
        target="_blank"
        rel="noreferrer">
        Ver
      </Button>
    )
  }

  // if content long text show in button alert
  if (content.length > 50) {
    return (
      <Button variant="contained" color="primary" onClick={handleMoreInfo}>
        Ver
      </Button>
    )
  }

  return content
}

export default ItemTable
