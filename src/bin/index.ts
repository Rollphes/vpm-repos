import express from 'express'
import fs from 'fs'
import MarkdownIt from 'markdown-it'

const app = express()
const PORT = 3000
const md = new MarkdownIt()

app.use(express.static('./public'))

app.get('/', (req, res) => {
  const readmeContent = fs.readFileSync('./README.md', 'utf-8')
  const htmlContent = md.render(readmeContent)
  res.status(200)
  res.setHeader('Content-Type', 'text/html')
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/styles.css">
            <title>README</title>
        </head>
        <body>
            <div class="content">${htmlContent}</div>
        </body>
        </html>
    `)
})

app.get('/vpm.json', (req, res) => {
  const jsonContent = fs.readFileSync('./src/json/vpm.json', 'utf-8')
  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  res.send(jsonContent)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
