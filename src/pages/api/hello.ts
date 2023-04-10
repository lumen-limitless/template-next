//example next js api route

import { NextApiHandler } from 'next'

const hello: NextApiHandler = (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
export default hello
