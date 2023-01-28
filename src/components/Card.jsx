import { Button } from './'

export const Card = ({ src, onClick }) => {
  return (
    <div className='rounded-xl group relative shadow-md card flex justify-center ine'>
      <div className='group-hover:flex flex-col hidden absolute bottom-0 top-0 left-0 right-0 bg-gray-900 bg-opacity-80 rounded-xl px-4 pt-28'>
        <Button classType='button' type='button' label='Download' onClick={onClick} />
      </div>
      <img src={src} className='w-full h-auto object-cover rounded-xl ' />
    </div>
  )
}
