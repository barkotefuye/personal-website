
import Image from '../../assets/images/barkot headshots-00546_close.jpg'

function Hero() {
  return (
    <div className = "grid grid-cols-2 h-4/5 place-items-center  pt-10 pb-20" >
        <div className = "text-center place-items-center">
          <div className='pb-10'>
            <h1 className='font-mono'> &lt;Barkot Efuye/&gt;</h1>
            <div className='font-mono typewriter'> &lt;div&gt; I build solutions for companies &lt;/div&gt; </div>
          </div>
          <a href = "mailto:barkotefuye@gmail.com"><button className='font-sans font-semibold'> Let's Meet! </button></a>
        </div>
        <div> 
            <img src = {Image} className = " w-4/5 rounded-full drop-shadow-2xl" /> 
        </div>
    </div>
    
  )
}


export default Hero