import fs from 'fs'
import MarkdownIt from 'markdown-it'

import { VpmRepoListing } from '@/lib/VpmRepoListing'

const HTML_WEBSITE_PATH = './website/index.html'

const vpmRepoListing = new VpmRepoListing()

async function build(): Promise<void> {
  await vpmRepoListing.createVpmJson()

  const md = new MarkdownIt()

  const readmeContent = fs.readFileSync('./README.md', 'utf-8')
  const htmlContent = md.render(readmeContent)
  fs.writeFileSync(
    HTML_WEBSITE_PATH,
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            <title>README</title>
        </head>
        <body>
            <div class="content">${htmlContent}</div>
        </body>
        </html>
    `,
  )
}
void build()
