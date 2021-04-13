import axios from "axios"
import * as githubRepo from "./github"

describe("Test Github Component", () => {
  it("test axios request sample 1", done => {
    axios.get("https://api.github.com/users").then(res => {
      const firstId = res.data[0].id
      expect(firstId).not.toBeNull()
      done()
    })
  })

  it("test getUsers", async () => {
    const result = await githubRepo.getUsers()
    const size = result.data.length
    expect(size).toBeGreaterThan(0)
  })

  it("test get giangc", async () => {
    const { getGiangC } = githubRepo
    const result = await getGiangC()
    expect(result.data.login).toBe("giangc")
  })
})

export { }
