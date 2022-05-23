import './styles.css'

function InputField() {
  return (
    <form className='input'>
        
        <input type='input' placeholder='enter a task' className='input__box'/>
        <button className='input_submit' type='submit'> Go</button>
    </form>
  )
}

export default InputField