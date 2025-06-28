// import React from "react";
// import Spinner from "../loading/Spinner";

// const SubmitButton = ({ bgColor, hoverBgColor, text, isLoading }) => {
//   return (
//     <button
//       type="submit"
//       className={`w-full flex justify-center items-center text-white ${bgColor} hover:${hoverBgColor} font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
//     >
//       {isLoading && <Spinner width="w-5" color="#ffffff" />}
//       {text}
//     </button>
//   );
// };

// export default SubmitButton;


import React from "react";
import Spinner from "../loading/Spinner";

const SubmitButton = ({ text, isLoading }) => {
  return (
    <button
      type="submit"
      className="w-full flex justify-center items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center 
      bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-blue-600 transition-all"
    >
      {isLoading && <Spinner width="w-5" color="#ffffff" />}
      {text}
    </button>  
  );
};

export default SubmitButton;
