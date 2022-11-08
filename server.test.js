/**
 *  @jest-environment jsdom
 * */

const request = require('supertest')

const server = require('./server')

describe('TMSandbox API', () => {
  test('Loads correctly', async () => {
    const expected = 200

    const res = await request('https://api.tmsandbox.co.nz').get(
      '/v1/Categories/6328/Details.json?catalogue=false'
    )
    console.log(res.body)
    const actual = res.status
    expect(actual).toBe(expected)
  })

  test('Name is badges', async () => {
    const expected = 'Badges'

    const res = await request('https://api.tmsandbox.co.nz').get(
      '/v1/Categories/6328/Details.json?catalogue=false'
    )
    const actual = res.body.Name
    expect(actual).toBe(expected)
  })
})
