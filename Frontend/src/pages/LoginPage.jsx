
import { Link } from "react-router-dom";
import { PiQuestionThin } from "react-icons/pi";
import Login from "../components/Login.jsx";
 
export default function LoginPage() {
 
 
  return (
    <div className="bg-gray-200 h-[calc(100vh-0px)]">
      <div className="h-[3.5rem] bg-yellow-300 flex items-center justify-between px-20">
      <Link to={"/"}>
          <h3>Puerquito libre</h3>
        </Link>
        <PiQuestionThin className="text-xl" />
      </div>
      <div className="h-full flex items-center justify-center">
        <Login/>

       </div>
    </div>
  );
}