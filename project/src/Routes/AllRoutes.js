import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Leaves from "../Pages/Leaves"
import MyFiles from "../Pages/MyFiles"
import OdOrWfh from "../Pages/OdOrWfh"
import AboutUs from "../Pages/AboutUs"
import TravelHelpDesk from "../Pages/TravelHelpDesk"
import Assests from "../Pages/Assests"
import Imports from "../Pages/Imports"
import Reports from "../Pages/Reports"
import Apparaisal from "../Pages/Appraisal"
import Attendance from "../Pages/Attendance"
import Calender from "../Pages/Calender"
import Competency from "../Pages/Competency"
import DashBoard from "../Pages/DashBoard"
import Departments from "../Pages/Department"
import Devices from "../Pages/Devices"
import Documentsetup from "../Pages/DocumentSetup"
import EmailTemplates from "../Pages/EmailTemplates"
import Appsetup from "../Pages/AppSetup"
import EmployeeDirectory from "../Pages/EmployeeDirectory"
import EmployeeFiles from "../Pages/EmployeeFiles"
import EmployeeRequest from "../Pages/EmployeeRequest"
import Feedback from "../Pages/Feedback"
import HelpDesk from "../Pages/HelpDesk"
import Hierarchy from "../Pages/Hierarchy"
import Holidays from "../Pages/Holidays"
import Locations  from "../Pages/Locations"
import OnProbation from "../Pages/OnProbation"

import OnBoarding from "../Pages/OnBoarding"
import PayrollSettings from "../Pages/PayrollSettings"
import PendingTask from "../Pages/PendingTask"
import Performance from  "../Pages/Performance"
import PolicyDocument from "../Pages/PolicyDocument"
import ProcessHub from "../Pages/ProcessHub"
import RemoteSystems from "../Pages/RemoteSystems"
import Rewards   from "../Pages/Rewards"
import Seperation from "../Pages/Seperation"
import SuccessionPlan from "../Pages/SuccessionPlan"
import Surways from "../Pages/Surveys"
import TeamView from "../Pages/TeamView"
import Templates from "../Pages/Templates"
import Expenses from "../Pages/Expenses"
import SignUp from "../Pages/SignUp"
import SignIn from "../Pages/SignIn"
function AllRoutes() {
  return (
    <div>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/leaves" element={<Leaves/>}/>
<Route path="/myfiles" element={<MyFiles/>}/>
<Route path="/odorwfh" element={<OdOrWfh/>}/>
<Route path="/travelhelpdesk" element={<TravelHelpDesk/>}/>
<Route path="/aboutapp" element={<AboutUs/>}/>
<Route path="/assets" element={<Assests/>}/>
<Route path="/imports" element={<Imports/>} />
<Route path="/reports" element={<Reports/>}/>
<Route path="/appraisal" element={<Apparaisal/>}/>
<Route path="/attendance" element={<Attendance/>}/>
<Route path="/calender" element={<Calender/>} />
<Route path="/competency" element={<Competency/>}/>
<Route path="/dashboard" element={<DashBoard/>}/>
<Route path="/departments" element={<Departments/>}/>
<Route path="/devices" element={<Devices/>}/>
<Route path="/documentsetup" element={<Documentsetup/>}/>
<Route path="/emailtemplates" element={<EmailTemplates/>}/>
<Route path="/appsetup" element={<Appsetup/>}/>
<Route path="/employeedirectory" element={<EmployeeDirectory/>}/>
<Route path="/employeefile" element={<EmployeeFiles/>}/>
<Route path="/employeerequest"  element={<EmployeeRequest/>}/>
<Route path="/feedback" element={<Feedback/>}/>
<Route path="/helpdesk" element={<HelpDesk/>}/>
<Route path="/hierarchy" element={<Hierarchy/>}/>
<Route path="/holidays" element={<Holidays/>}/>
<Route path="/locations" element={<Locations/>}/>
<Route path="/onprovation" element={<OnProbation/>}/>
<Route path="/onboarding" element={<OnBoarding/>}/>
<Route path="/locations" element={<Locations/>}/>
<Route path="/payrollsetting" element={<PayrollSettings/>}/>
<Route path="/pendingtask" element={<PendingTask/>}/>
<Route path="/performance" element={<Performance/>}/>
<Route path="/policydocument" element={<PolicyDocument/>}/>
<Route path="/processhub" element={<ProcessHub/>}/>
<Route path="/remotesystems" element={<RemoteSystems/>}/>
<Route path="/rewards" element={<Rewards/>}/>
<Route path="/seperation" element={<Seperation/>}/>
<Route path="/successionplan" element={<SuccessionPlan/>}/>
<Route path="/surveys" element={<Surways/>}/>
<Route path="/teamview" element={<TeamView/>}/>
<Route path="/templates" element={<Templates/>}/>
<Route path="/expense" element={<Expenses/>}/>
<Route path="/signup" element = {<SignUp/>}/>
<Route path = "/signin" element = {<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
