import '../../styles/components/auth.scss';
import PropsTypes from 'prop-types';


function AuthOr({message}) {
  return (
    <div className="auth-or">
        <hr />
        <div className="auth-message">
            {message}
        </div>
        <hr />
    </div>
  )
}

AuthOr.propTypes = {
    message: PropsTypes.string.isRequired
}

export default AuthOr