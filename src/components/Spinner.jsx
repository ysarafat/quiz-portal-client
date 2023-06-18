import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

function Spinner() {
    return (
        <div className="h-[calc(100vh-137px)] flex justify-center items-center dark:bg-dark-blue bg-white">
            <MutatingDots
                height="150"
                width="100"
                color="#5AE6C5"
                secondaryColor="#000"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible
            />
        </div>
    );
}

export default Spinner;
