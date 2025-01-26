const express = require('express')
const path = require('path')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/version', (_req, res) => {
  res.send('1')
})

app.get('/health', (_req, res) => {
  // eslint-disable-next-line
  res.send('ok')
})

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
