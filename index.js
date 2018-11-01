const fs = require('fs')
const hogan = require('hogan.js')

const template = `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>{{ message }}</h1>
  </body>
</html>
`

const data = {
  filename: 'xiaolongbao.html',
  title: 'おなかすいた',
  message: 'しょーろんぽーたべたい'
}

const result = hogan.compile(template).render(data)
fs.writeFileSync(`./dist/${data.filename}`, result)
