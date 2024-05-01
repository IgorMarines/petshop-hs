import React from "react";

export default function ModalUser({ isOpen, setModalOpen, children }) {
    return isOpen ? (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-lg z-50 w-3/4 max-w-lg flex flex-col items-center">
                <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
                    onClick={setModalOpen}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="w-full" >
                    {children}
                </div>
            </div>
        </>
    ) : null;
}
