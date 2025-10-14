"use client"; 

import React from "react";
import ReactDOM from "react-dom";

interface ModelProps {
  children: React.ReactNode;
  title: string;
  hideModel?: () => void;
}

export default function Model({ children, title, hideModel }: ModelProps) {
  if (typeof document === "undefined") return null;

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={hideModel}
    >
      <div
        className="bg-white rounded p-4 w-1/4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-black  text-xl mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );

  const rootElement = document.getElementById("root") || document.body;

  return ReactDOM.createPortal(modalContent, rootElement);
}
