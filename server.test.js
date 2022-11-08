const request = require('supertest')

describe('TMSandbox API', () => {
  test('API responds with JSON', async () => {
    const res = await request('https://api.tmsandbox.co.nz').get(
      '/v1/Categories/6328/Details.json?catalogue=false'
    )
    expect(res.headers['content-type']).toBe('application/json')
    expect(res.status).toBe(200)
  })

  test('Name is badges', async () => {
    const expected = 'Badges'

    const res = await request('https://api.tmsandbox.co.nz').get(
      '/v1/Categories/6328/Details.json?catalogue=false'
    )
    const actual = res.body.Name

    expect(actual).toBe(expected)
  })

  test('CanRelist is true', async () => {
    const expected = true

    const res = await request('https://api.tmsandbox.co.nz').get(
      '/v1/Categories/6328/Details.json?catalogue=false'
    )
    const actual = res.body.CanRelist

    expect(actual).toBe(expected)
  })

  test('The Promotions element with Name = "Feature" has a Description that contains the text "Better position in category"', async () => {
    const expected = 'Better position in category'

    const res = await request('https://api.tmsandbox.co.nz').get(
      '/v1/Categories/6328/Details.json?catalogue=false'
    )

    const feature = res.body.Promotions.find(
      (promotion) => promotion.Name === 'Feature'
    )

    expect(feature.Description).toContain(expected)
  })
})
