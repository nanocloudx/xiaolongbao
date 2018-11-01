const fs = require('fs')
const hogan = require('hogan.js')

/**
 * テンプレートをこねこねします
 */
const template = `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>{{ title }}</h1>
    <p>わたしは{{ menu }}がたべたい！</p>
  </body>
</html>
`

/**
 * データをこねこねします
 */
const data = [
  {
    filename: 'harapeko.html',
    title: 'はらぺこ',
    menu: 'しょーろんぽー'
  },
  {
    filename: 'onakasuita.html',
    title: 'おなかすいた',
    menu: 'ぎょうざ'
  }
]

console.log('-------------------------')
data.forEach(item => {
  const result = hogan.compile(template).render(item)
  fs.writeFileSync(`./dist/${item.filename}`, result)
  console.log(`- ${item.filename}`)
})
console.log('-------------------------\n')
