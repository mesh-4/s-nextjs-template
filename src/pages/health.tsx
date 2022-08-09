import type { NextPage } from "next"

import { useHealth } from "@/hooks/useHealth"

const Health: NextPage = () => {
  const { isLoading, data } = useHealth()
  return <div>{isLoading ? <div id="load">Loading...</div> : <div id="result">{data}</div>}</div>
}

export default Health
