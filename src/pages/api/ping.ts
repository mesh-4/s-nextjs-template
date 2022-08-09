import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = nc({
  onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
    console.error(err.stack)
    res.status(500).end("Something broke!")
  },
}).get((req, res) => {
  res.send("pong")
})

export default handler
