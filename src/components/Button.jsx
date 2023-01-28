
export const Button = ({ disabled, onClick, label, type, required, classType }) => {
  return (
    <button
      className={`sm:w-auto px-5 py-2.5 text-center text-white font-medim rounded-md hover:bg-green-900 transition-all disabled:opacity-30 disabled:bg-gray-500 disabled:text-gray-400 ${classType === 'button' ? 'text-sm bg-green-800 active:bg-green-700' : 'text-2xl bg-green-700 active:bg-green-600'}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      required={required}
    >{label}
    </button>
  )
}
