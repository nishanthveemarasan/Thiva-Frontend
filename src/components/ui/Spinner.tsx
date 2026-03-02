import { SpinnerProps } from "@/types/template"
import React from "react"

const Spinner: React.FC<SpinnerProps> = ({className = ""}) => {
    return (
      <div className={`flex justify-center items-center ${className}"`} role="loading">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      </div>
    )
  }
  
  export default Spinner