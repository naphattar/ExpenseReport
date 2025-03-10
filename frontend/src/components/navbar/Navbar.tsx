import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";

function Navbar() {
  const { user,isAuthenticated, fetchUserProfile } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();
  
  const handleLoginButtonSubmit = () => {
    navigate("/login")
  }

  const handleLogoutButtonSubmit = async() => {
    await logout();
    fetchUserProfile();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-lg font-semibold">Expense Report</span>
      </div>
      <div className="mr-6 sm:mr-2">
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span>Welcome, {user?.username || "User"}</span>
            <button
              className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100"
              onClick={handleLogoutButtonSubmit}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100"
            onClick={handleLoginButtonSubmit}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default memo(Navbar);
