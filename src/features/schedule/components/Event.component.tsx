
const EventComponent = ({ height } : { height: number }) => {

  return (
    <div className={`absolute h-[${height}rem] w-[85rem] bg-blue rounded-lg shadow-lg`} onClick={() => {
      console.log('on edit event');
    }}>
      <div className={`absolute h-[3rem] w-[25rem] bg-green-500 rounded-lg shadow-lg`}></div>
    </div>
  )
}

export default EventComponent