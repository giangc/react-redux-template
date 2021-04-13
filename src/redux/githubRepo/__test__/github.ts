import axios from "axios"

const axiosClient = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: 'Bearer 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'
  }
})

const getUsers = async () => {
  const result = axios.get("https://api.github.com/users")
  return result
}

const getGiangC = async () => {
  const result = axiosClient.get("users/giangc")
  return result
}

export { getUsers, getGiangC }