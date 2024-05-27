const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const {globSync} = require('glob')

const getRevision = (file) => crypto.createHash('md5').update(fs.readFileSync(file)).digest('hex')

function getStaticPrecacheEntries(pwaOptions) {
  const basePath = pwaOptions?.basePath || '/'
  const sw = pwaOptions?.sw || 'sw.js'
  const publicExcludes = pwaOptions?.publicExcludes || ['!noprecache/**/*']

  const entries = globSync(
    [
      '**/*',
      '!workbox-*.js',
      '!workbox-*.js.map',
      '!worker-*.js',
      '!worker-*.js.map',
      '!fallback-*.js',
      '!fallback-*.js.map',
      `!${sw.replace(/^\/+/, '')}`,
      `!${sw.replace(/^\/+/, '')}.map`,
      ...publicExcludes
    ],
    {cwd: 'public'}
  )
    .filter((f) => f.includes('.'))
    .map((f) => ({
      url: path.posix.join(basePath, `/${f}`),
      revision: getRevision(`public/${f}`)
    }))
  return entries
}

module.exports = getStaticPrecacheEntries
