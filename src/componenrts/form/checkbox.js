export default function Checkbox({label, onChange, checked,id }){

    return(
        <div>                             
          <input 
          className="form-check-input"
          type="checkbox" 
          checked={checked}
          onChange={(e)=>onChange(e.target.checked)}
          />
        <label className="form-check-label" 
        htmlFor={id}>{label}</label> 
        </div>
    )
}