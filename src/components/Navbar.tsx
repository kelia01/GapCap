import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="px-10 py-3 flex space-x-56">
      <div className="flex gap-1.5">
        <img src="./public/logo.png" alt="Logo" className="w-6 h-6" />
        <h2 className="font-bold text-[#004B2F]">STUDENTSYNC</h2>
      </div>
      <div className="flex gap-15">
        <ul className="flex gap-15 font-[Poppins]">
          <li>Home</li>
          <li>Add Student</li>
        </ul>
        <Button word="All Students"/>
      </div>
    </div>
  );
};

export default Navbar;
