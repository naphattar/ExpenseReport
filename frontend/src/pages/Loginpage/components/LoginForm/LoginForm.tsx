import { memo, useCallback, useState } from "react";
import LoginFormInput from "../LoginFormInput/LoginFormInput";
import LoginFormButton from "../LoginFormButton/LoginFormButton";
import useLogin from "../../../../hooks/useLogin";
import { useAuth } from "../../../../hooks/useAuth";

function LoginForm(){
  const { fetchUserProfile } = useAuth();
    const login = useLogin();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameChange = useCallback((username : string) => {
        setUsername(username)
    },[])

    const handlePasswordChange = useCallback((password : string) => {
        setPassword(password)
    },[])

    const handleLoginSubmit = async() => {
      await login(
        username,
        password
      )
      fetchUserProfile();
    }

    return(
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <div className="space-y-6 mt-4">
          <LoginFormInput
            inputName="username"
            inputType="text"
            inputValue={username}
            inputFormText="Username"
            setInputValue={handleUsernameChange}
          />
          <LoginFormInput
            inputName="password"
            inputType="password"
            inputValue={password}
            inputFormText="Password"
            setInputValue={handlePasswordChange}
          />
          <LoginFormButton
            handleLoginFormButtonSubmit={handleLoginSubmit}
          />
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    )
}
export default memo(LoginForm);