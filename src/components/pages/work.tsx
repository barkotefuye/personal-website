import ServiceNowIcon from '../../assets/images/service-now-icon.jfif'
import FeluxIcon from '../../assets/images/felux-icon.jfif'
import SalesForceIcon from '../../assets/images/sales-force-icon.jfif'
import WorkSection from '../sub-components/work-section'

function Work() {
  return (
    <div  className = "bg-gray-100">
      <div className = "place-items-center mr-60 ml-60" id = "Experience">
        <div className = "text-center">
            <h1 className='font-mono font-bold p-10'> <span className='subtitle-inner-text'>current</span>.Experience()</h1>
            <div className = "text-left">
                <WorkSection iconImage = {ServiceNowIcon} title = "Service Now" time= "09/2021 - 05/2022 (10 months)" >
                  <div>I utilized Service Now Developer Instance (SDI) to write, test and deploy code for a static analyzer. 
                  I also helped with writing a test suite (unit, integration, and end-to-end tests) and collected analytics
                  on how static analyzer performs. This application was packaged as a ServiceNow Plugin, as is avaliable for
                  use in the company.</div>
                </WorkSection>

                <WorkSection iconImage = {FeluxIcon} title = "Felux"  time= "04/2021 - 09/2021 (5 months)" >
                  <div> I developed a full-scale application for searching through steel supplier documentation by building .NET REST service and 
                      Vue Client App. I deployed the application with docker. I also handled documentation of the initial setup of the application 
                      and helped new employees with initial setup of local enviornment. </div>
                </WorkSection>

                <WorkSection iconImage = {SalesForceIcon}  title = "Salesforce"  time= "06/2020 - 09/2020 (3 months)" >
                  <div> I was responsible for collecting and analyzing administrative data for Tableau Server and Tableau Catalog. 
                    I worked with a large codebase, gained familiarity with Perforce and other control version tools and wrote Junit
                    tests for different components of the project. I created a gRPC service and client to store data in Postgres database. 
                  </div>
                </WorkSection>

            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Work


