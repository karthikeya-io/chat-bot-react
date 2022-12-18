import React from 'react'
import classes from '../css/Form.module.css'

const Form = ({ changeHandler, submitHandler, formDetails }) => {
  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <input onChange={changeHandler} name='msg' className={classes.inputBox} type="text" value={formDetails.msg || ""} />
        <button className={classes.butn} type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form