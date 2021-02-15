import React from 'react'

export default function myStaticPage({name}) {
  return (
    <div>
      {name}
    </div>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {name:"antoine"}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: data
  }
}