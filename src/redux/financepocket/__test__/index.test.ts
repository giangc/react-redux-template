import { financialPocketSlice, topupBalance, withdrawBalance, OVERDRAFT_ERROR } from '../index'
import State from '../types/State'

describe("financial Pocket", () => {
  const { reducer } = financialPocketSlice

  it("topup balance", () => {
    const result = reducer({
      balance: 0
    }, topupBalance(20))
    expect(result.balance).toBe(20)

    const result2 = reducer({
      balance: 10
    }, topupBalance(20))
    expect(result2.balance).toBe(30)
  })

  it("withdraw balance", () => {
    const result = reducer({
      balance: 100
    }, withdrawBalance(20))

    expect(result.balance).toBe(80)

  })

  it("overdraft withdraw balance returns error", () => {
    const result = reducer({ balance: 20 }, withdrawBalance(40))

    expect(result.balance).toEqual(20)
    expect(result.error).not.toBeNaN()
    expect(result.error).toBe(OVERDRAFT_ERROR)

  })

  it("export weekly balance sheet", () => {

  })

  it("create saving pocket", () => {

  })



})

export { }