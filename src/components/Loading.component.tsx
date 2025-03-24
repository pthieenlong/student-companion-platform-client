import loadingGif from '../assets/images/6oa.gif'
const Loading = (className: string) => {
  const mainClassName = `flex flex-col justify-center w-full h-screen items-center ${className}`
  return (
    <div className={mainClassName}>
      <img className="h-50 w-50" src={loadingGif} alt="Loading..." />
      <p>Chờ chút xíu nhé!!!!</p>
    </div>
  )
}

export default Loading
