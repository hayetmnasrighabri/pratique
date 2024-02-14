export default function Input(placeholder, value, onChange){
    return(
        <div>
            <input 
            type="text"
            className="form-control" 
            placeholder={placeholder}
            value={value}
            onChange={(e)=>onchange(e.target.value)}
             />
            </div>
    )
}