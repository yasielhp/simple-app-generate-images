
export const Loading = ({ label }) => {
  return (
    <div aria-label={label} role='status' className='flex items-center space-x-2'>
      <svg className='h-6 w-6 animate-spin stroke-gray-500' viewBox='0 0 256 256'>
        <line x1='128' y1='32' x2='128' y2='64' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
        <line x1='195.9' y1='60.1' x2='173.3' y2='82.7' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
        <line x1='224' y1='128' x2='192' y2='128' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
        <line x1='195.9' y1='195.9' x2='173.3' y2='173.3' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
        <line x1='128' y1='224' x2='128' y2='192' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
        <line x1='60.1' y1='195.9' x2='82.7' y2='173.3' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
        <line x1='32' y1='128' x2='64' y2='128' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
        <line x1='60.1' y1='60.1' x2='82.7' y2='82.7' strokeLinecap='round' strokeLinejoin='round' strokeWidth='24' />
      </svg><span className='text-xs font-medium text-gray-500'>{label}</span>
    </div>
  )
}
