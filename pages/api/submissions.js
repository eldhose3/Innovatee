// /pages/api/submissions.js
import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'submissions.json')

  try {
    if (!fs.existsSync(filePath)) {
      return res.status(200).json([])
    }

    const fileData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileData)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error reading submissions:', error)
    res.status(500).json({ error: 'Failed to load submissions.' })
  }
}
