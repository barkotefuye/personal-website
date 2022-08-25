import Resume from '../../assets/files/barkot-efuye-resume-2023.pdf'

function Navbar() {
  return (
    <nav className = "flex items-center justify-between flex-wrap pl-8 top-0 bg-white z-40" >
       <div className = "nav-title font-mono text-lg font-bold pt-2 pb-2 transition ease-in-out duration-300 hover:scale-110 hover:text-[#646cff]">  &lt;B/&gt; </div>
        <div className = "nav-links flex flex-row font-mono">
            <div className = "pl-3 pr-3 transition ease-in-out duration-300 hover:scale-110 hover:text-[#747bff] pt-2 pb-2"> <a href = "#Experience">.Experience() </a></div>
            <div className = "pl-3 pr-3 transition ease-in-out duration-300 hover:scale-110 hover:text-[#747bff] pt-2 pb-2"> <a href = "#Project">.Projects() </a></div>
            <div className="pl-3 pr-3 text-[#646cff] pt-2 pb-2 transition ease-in-out duration-300 hover:scale-110 "><a href = {Resume} >Resume</a></div>
        </div>
    </nav>
  )
}


export default Navbar




