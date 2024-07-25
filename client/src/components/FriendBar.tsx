import React from "react";

const FriendBar = () => {
    return (
        <div className="p-2 w-52">
            <a className="p-1 py-2">
                <div className="avatar online placeholder w-14">
                    <div className="bg-neutral text-neutral-content w-14 rounded-full">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
            </a>
            <a className="p-1">
                <div className="avatar online placeholder w-14">
                    <div className="bg-neutral text-neutral-content w-14 rounded-full">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
            </a>
            <a className="p-1 py-2">
                <div className="avatar online placeholder w-14">
                    <div className="bg-neutral text-neutral-content w-14 rounded-full">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default FriendBar;
