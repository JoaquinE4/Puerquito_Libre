import { useState } from "react";
import FormRegister from "../components/FormRegister.jsx";
import FormDataRegister from "../components/FormDataRegister.jsx";
import { Link } from "react-router-dom";
import { PiQuestionThin } from "react-icons/pi";
 
export default function Register() {
  const [isPerson, setIsPerson] = useState(true);

  const handleClick = () => {
      setIsPerson(false);  // Cambiar a false para mostrar el formulario de registro
  };
// Initialize persona with false

  return (
    <div className="bg-gray-200 h-[calc(100vh-0px)]">
      <div className="h-[3.5rem] bg-yellow-300 flex items-center justify-between px-20">
      <Link to={"/"}>
          <h3>Puerquito libre</h3>
        </Link>
        <PiQuestionThin className="text-xl" />
      </div>
      <div className="h-full flex items-center justify-center">
      {isPerson ? (
                <FormRegister onClick={handleClick} />
            ) : (
                <FormDataRegister />
            )}   

       </div>
    </div>
  );
}