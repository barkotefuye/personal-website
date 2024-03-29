import NileExpressPic from '../../assets/images/nile-express-dispatching-pic.png'
import ServiceNowPic from '../../assets/images/service-now-pic.png'
import NaturalDisasterPic from '../../assets/images/natural-disaster-tweets-pic.png'
import PersonalWebsitePic from '../../assets/images/personal-website-pic.png'
import KittenPic from '../../assets/images/kitten-pic.png'
import HeroPic from '../../assets/images/hero-pic-short-5.png'
import iTradePic from '../../assets/images/itrade-pic.png'
import ProjectSection from '../sub-components/project-section'

function Project() {

  return (
    <div>
      <div className = "place-items-center mr-60 ml-60 pb-20" id = "Project" >
        <div className = "text-center">
            <h1 className='font-mono font-bold p-10'> <span className='subtitle-inner-text'>featured</span>.Projects()</h1>
            <div className = "grid grid-cols-3">
              <ProjectSection companyImage = {NileExpressPic} 
                summary = "Nile Express Dispatching (Contract)"
                description = "This was a project for truck dispatching company" />
              <ProjectSection companyImage = {NaturalDisasterPic}  
                summary = "Natural Disaster Prediction with Twitter Data"
                description = "Built classification model with BERT and LSTM to create predictions" />
              <ProjectSection companyImage = {ServiceNowPic}  
                summary = "Service Now Query Detection"
                description = "Created static analyzer to detect inefficent queries" />
              <ProjectSection companyImage = {PersonalWebsitePic}  
                summary = "Personal Website"
                description = "I wrote personal website with react and tailwind css, you can see code here" />
              <ProjectSection companyImage = {iTradePic}  
                summary = "iTrade Mobile App"
                description = "Currently building out a mobile fintech analytics app. You can see my progress here" />
              <ProjectSection companyImage = {HeroPic}  
                summary = "Youtube - Tutorials"
                description = "Not publicly avaliable yet" />
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Project
