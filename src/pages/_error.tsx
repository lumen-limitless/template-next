// next js error page

import { NextPageContext } from 'next'
import ErrorPage from 'next/error'

interface ErrorProps {
  statusCode: number
}

function Error({ statusCode }: ErrorProps) {
  return <ErrorPage statusCode={statusCode} />
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500
  return { statusCode }
}

export default Error
