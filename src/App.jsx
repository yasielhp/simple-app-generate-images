import { OpenAIApi } from 'openai'
import { useEffect, useState } from 'react'
import { Button, Input, Card, Loading } from './components'
import { config, downloadImage } from './utils'

export default function App () {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [timerId, setTimerId] = useState(null)
  const [error, setError] = useState('')
  const [n, setN] = useState(1)
  const [imgs, setImgs] = useState([])
  const openai = new OpenAIApi(config)

  const handleIncrement = () => {
    if (n < 8) {
      setN(n + 1)
    }
  }

  const handleDecrement = () => {
    if (n > 1) {
      setN(n - 1)
    }
  }

  const generateImage = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      if (!prompt) {
        setError('Please enter a prompt')
      }
      const res = await openai.createImage({
        prompt,
        n,
        size: '256x256'
      })
      setImgs(res.data.data)
    } catch (err) {
      setError('An error has occurred, contact yasielhp to fix it.')

      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (error) {
      setTimerId(setTimeout(() => {
        setError(null)
      }, 5000))
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [error])

  return (
    <main className='max-w-7xl mx-auto p-6'>
      <h1 className='text-2xl font-semibold text-gray-100 text-center '>OpenAI Image Generator</h1>
      <p className='text-gray-300 text-center mt-2 mb-4 text-sm'>Please type in the text field the desired indications to generate the image. You can generate between 1 and 8 images.</p>
      <form className='' onSubmit={generateImage}>
        <Input disabled={loading} placeholder="Enter the prompts here (example: 'a person playing soccer on the beach')." value={prompt} onChange={e => setPrompt(e.target.value)} />
        <div className='flex gap-2 my-4 justify-center'>
          <Button classType='icon' type='button' disabled={loading || n === 1} onClick={handleDecrement} label='-' />
          <Button classType='button' type='submit' disabled={loading || !prompt} label={`Generate ${n} image`} required />
          <Button classType='icon' type='button' disabled={loading || n === 8} onClick={handleIncrement} label='+' />
        </div>
      </form>
      <section className='flex flex-wrap gap-4 justify-center items-center'>
        {
          error
            ? <p className='text-red-500 text-xs font-medium'>{error}</p>
            : loading ? <Loading label='Generating images...' /> : imgs.map((img, i) => <Card key={i} src={img.url} onClick={() => downloadImage(img.url)} />)
        }
      </section>
    </main>
  )
}
