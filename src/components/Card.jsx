import React from 'react'

function Card({ heading, para, image }) {
    return (
        <div className="gradient-border p-0.5">

            <div className="max-w-sm bg-black overflow-hidden shadow-lg p-10">
                <img
                    className="w-50 h-30 mx-auto"
                    src={image}
                    alt={heading}
                />

                <div className="py-2 space-y-6 text-blue-500">
                    <h2 className="text-center font-bold text-xl">
                        {heading}
                    </h2>

                    <p className="text-center">
                        {para}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Card;
