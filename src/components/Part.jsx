
const Part = ({title,icon,children}) => {
  return (
    <div className="bg-white py-3 px-4 my-4 border rounded-xl">
      <div className='flex justify-between '>
        <h1 className="text-xl font-medium mb-2">{title}</h1>
        <img src={icon} alt="icon" />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Part
