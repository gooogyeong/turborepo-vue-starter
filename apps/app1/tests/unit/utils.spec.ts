const { add } = require('../../src/utils')
// import { add } from '../../src/utils'

describe('utils/add', () => {
  it('add(1, 2) equals 3', () => {
    const res = add(1, 2)
    expect(res).toBe(3)
  })
})
