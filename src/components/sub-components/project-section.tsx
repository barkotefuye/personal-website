function ProjectSection(props){
    return (
          <a className = "m-3 bg-gray-100 rounded hover:text-white  hover:bg-[#646cff] transition ease-in-out duration-300 hover:scale-110 drop-shadow-xl"> 
                <img src = {props.companyImage} className = "w-full rounded" />
                <div className='pr-3 pl-3 pt-1 pb-3'>
                  <div className='font-semibold'> {props.summary}</div>
                  <div> {props.description} </div>
                </div>
          </a>
    )
}

export default ProjectSection