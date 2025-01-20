import { useState, useEffect } from 'react';

const NumberTicker = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            setCount(Math.floor(start));
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
};

export default function WhoWeAre() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Who We Are</h2>
                <p className="text-xl text-gray-600 text-center mb-12">
                    Middleware is a leading IT consulting firm dedicated to providing innovative solutions
                    that drive business growth and digital transformation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <p className="text-4xl font-bold text-indigo-600">
                            <NumberTicker end={5} duration={2000} />+
                        </p>
                        <p className="mt-2 text-lg font-medium text-gray-700">Global Locations</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-indigo-600">
                            <NumberTicker end={50} duration={2000} />+
                        </p>
                        <p className="mt-2 text-lg font-medium text-gray-700">Certified Industry Experts</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-indigo-600">
                            <NumberTicker end={30} duration={2000} />+
                        </p>
                        <p className="mt-2 text-lg font-medium text-gray-700">Microsoft Azure's Developer and Admin Certifications</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

