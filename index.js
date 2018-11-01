const fs = require('fs')
const hogan = require('hogan.js')

const template = `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>わたしは{{ message }}がたべたい！</h1>
  </body>
</html>
`

const data = {
  filename: 'xiaolongbao.html',
  title: 'おなかすいた',
  message: 'しょーろんぽー'
}

const result = hogan.compile(template).render(data)
fs.writeFileSync(`./dist/${data.filename}`, result)
