import { topupBalance, withdrawBalance } from '../index'

describe("finance pocket actions", () => {

  it("should have topup balance", () => {
    expect(topupBalance(1)).toEqual({
      payload: 1,
      type: "financialPocket/topupBalance"
    })
  })

  it("should have withdraw balance", () => {
    const actual = withdrawBalance(1)
    expect(actual).toEqual({
      payload: 1,
      type: "financialPocket/withdrawBalance"
    })
  })

})

export { }