import React from 'react'

function Alert(props) {
    const captitalize = (word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);  // Capitalize the first alphabet of the word example:Success
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{captitalize(props.alert.type)}</strong> : {props.alert.msg} 
  
</div>
  )
}

export default Alert
