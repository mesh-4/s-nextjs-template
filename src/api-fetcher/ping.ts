import { API } from "./instance"

export const ping = async () => {
  const res = await API.get<string>("/ping")
  return res.data
}
