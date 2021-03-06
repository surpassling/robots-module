const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('with function on top level', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = nuxt = await setup(loadConfig(__dirname, 'with-function-top-level')))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const robots = await get('/robots.txt')
    expect(robots).toBe('User-agent: Googlebot\nDisallow: /')
  })
})
