import { memo } from "react"

interface LoginFormInputProps{
    inputName : string
    inputFormText : string
    inputType : string
    inputValue : string
    setInputValue : (inputValue : string) => void
}
function LoginFormInput(props : LoginFormInputProps){
    const {
        inputName ,
        inputFormText ,
        inputType ,
        inputValue,
        setInputValue
    } = props
    return(
        <div>
            <label htmlFor={inputName} className="block text-sm font-medium text-gray-600">
              {inputFormText}
            </label>
            <input
              id={inputName}
              type={inputType}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder={`Enter your ${inputName}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
    )
}

export default memo(LoginFormInput);