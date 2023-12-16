import React, { useState } from "react";
import { useRouter } from "next/navigation";

const DropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-gray-500 text-center">
      <button
        onClick={toggleDropdown}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        List
      </button>
      {isOpen && (
        <ul className="absolute bg-white border rounded-md ml-2 w-32">
          <li className="py-2 px-4 hover:bg-gray-100">
            <button onClick={() => router.push("/import")}>Import File</button>
          </li>
          <li className="py-2 px-4 hover:bg-gray-100">Item 2</li>
          <li className="py-2 px-4 hover:bg-gray-100">Item 3</li>
          {/* Thêm các mục danh sách khác tại đây */}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
