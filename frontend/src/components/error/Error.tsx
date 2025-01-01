import React from "react";

interface ErrorComponentProps {
  message: string; // Error message to display
  onRetry?: () => void; // Optional retry function
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-red-100 border border-red-400 text-red-700 rounded-md">
      {/* Error Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mb-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.366-.446.985-.574 1.514-.316a1.007 1.007 0 01.366 1.383L5.7 12.44c-.341.513-.982.687-1.514.316-.533-.372-.688-.995-.316-1.514l4.387-6.143zM10 18a8 8 0 100-16 8 8 0 000 16zM10 9a1 1 0 011-1h.01a1 1 0 01-.01 2H10a1 1 0 01-1-1zm0 4a1 1 0 010-2h.01a1 1 0 010 2H10z"
          clipRule="evenodd"
        />
      </svg>

      {/* Error Message */}
      <p className="text-center text-lg font-semibold">{message}</p>

      {/* Retry Button */}
      {onRetry && (
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;
