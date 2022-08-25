function WorkSection(props){
    return (
        <div className='flex flex-row pb-10'>
        <img src = {props.iconImage} className= "pr-10 drop-shadow-2xl"/>
        <div>
          <h4 className = "font-mono font-bold"> {props.title}</h4>
          <p className = "italic">{props.time}</p>
          <p>{props.children}</p>
        </div>
      </div>
    )
}
export default WorkSection