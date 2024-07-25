import React from "react";

const NewEvent = () => {
    return (
        <>
            <dialog id="new_event" className="modal">
                <div className="modal-box w-11/12 max-w-3xl h-2/6 content-center justify-center text-center">
                    <h1 className="font-bold text-3xl text-center p-3">
                        Event Title
                    </h1>
                    <input
                        type="text"
                        placeholder="Enter a name for the event..."
                        className="input input-bordered input-primary w-full max-w-xl"
                    />
                    <div className="modal-action">
                        <button className="btn btn-circle btn-outline">
                            <svg
                                width="32px"
                                height="32px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M6 12H18M18 12L13 7M18 12L13 17"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default NewEvent;
