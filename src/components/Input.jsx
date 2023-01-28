
export const Input = ({ disabled, placeholder, value, onChange }) => {
  return (
    <input
      className='bg-gray-50 border border-gray-300 text-gray-900 invalid:text-red-600 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 outline-none block w-full p-3'
      type='text'
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      required
    />
  )
}
