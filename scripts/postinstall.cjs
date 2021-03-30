const pathLib = require('path')
const { writeFileSync, readFileSync, copyFileSync } = require('fs')
const readdirp = require('readdirp')

const rootDirPath = pathLib.join(__dirname, '../')

const svgDirPath = pathLib.join(
  rootDirPath,
  './node_modules/@fortawesome/fontawesome-free/svgs'
)

const iconsDir = pathLib.join(
  rootDirPath,
  './static/icons/'
)

const iconCollectionPath = pathLib.join(
  iconsDir,
  './collection.txt'
)

let iconCollection = ''

;(async () => {
  for await (const { path, fullPath } of
    readdirp(svgDirPath)
  ) {
    if (path.includes(':')) {
      throw new Error(`${path} contains a colon character!`)
    }
    copyFileSync(fullPath, pathLib.join(
      iconsDir,
      path.replace(/\//, '_')
    ))
    const name = path.split('.').slice(0, -1).join('.')
    const content = readFileSync(fullPath, 'utf8')
      .replace(/\r?\n/g, ' ')
    iconCollection += `${name}:${content}\n`
  }
  writeFileSync(
    iconCollectionPath,
    iconCollection.trim()
  )
})()
