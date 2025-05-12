import '../../styles/components/auth.scss'

function InputBox({...props}) {
  return (
    <>
        <input type="text" className='input-box' {...props}/>
    </>
  )
}

export default InputBox