import {BsFillGearFill} from 'react-icons/bs'
import {useState} from 'react'
import "../stylesheet/settings.css"
function SettingsMenu({changeQs}){
    return (
        <div className="settings-menu">
           <form onChange={changeQs}>
               <label for="Qs">Max Number of Questions</label>
               <input id="Qs" type="number"/>
           </form>

        </div>
    )
}
export function Settings({changeQs}){
    const [open, setOpen] = useState(false);
    return (
        
        <div className="settings">
            <BsFillGearFill onClick={()=>setOpen(!open)} className="settings-icon"/>
            <div>{open ? <SettingsMenu changeQs={changeQs}/> : null }</div>
        </div>
    )
}