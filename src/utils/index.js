import { Configuration } from 'openai'
import { saveAs } from 'file-saver'

export const config = new Configuration({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY
})

export function downloadImage (photo) {
  saveAs(photo, 'imagen.jpg')
}
