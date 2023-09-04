"use client"
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen? "border-blue-900 border-2" : "border-2 border-gray-600"} rounded-md border p-2`}>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg ">{title}</h2>
        <span className="text-gray-600">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="mt-2 ">{content}</div>}
    </div>
  );
};

export default Accordion;