interface LoginFormButtonProps{
    handleLoginFormButtonSubmit : () => void;
}
function LoginFormButton(props : LoginFormButtonProps){
    const {handleLoginFormButtonSubmit} = props
    return(
        <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            onClick={handleLoginFormButtonSubmit}
        >
        Login
        </button>      
    )
}

export default LoginFormButton