import { useQuery } from "@tanstack/react-query"

import { ping } from "@/api-fetcher/ping"

export const useHealth = () => {
  return useQuery(["health"], ping)
}
