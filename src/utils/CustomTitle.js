import React from 'react'
import { Helmet } from 'react-helmet'
const CustomTitle = ({title}) => {
  return (
    <Helmet>
        <title>Excel 2022 | {title}</title>
    </Helmet>
  )
}

export default CustomTitle