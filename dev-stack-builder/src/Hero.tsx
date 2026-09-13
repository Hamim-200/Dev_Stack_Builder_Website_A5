import heroImage from "./assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-8">

                <div className="min-h-[550px] flex items-center justify-between">

                    {/* Left Side */}
                    <div className="w-1/2">

                        <h1 className="text-5xl font-extrabold leading-tight text-[#111827]">
                            Build Your Ideal
                        </h1>

                        <h2 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-[#334155]">
                            Explore frontend, backend, database, and tooling
                            options, compare them side by side, and put together
                            the stack that fits your next project.
                        </p>

                        <div className="mt-8 flex gap-3">

                            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 px-6 py-3 font-semibold text-white">
                                Explore Technologies
                            </button>

                            <button className="rounded-lg border border-gray-200 px-6 py-3 font-medium text-gray-700">
                                Learn More
                            </button>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="w-1/2 flex justify-center">

                        <img
                            src={heroImage}
                            alt="Development Stack"
                            className="w-120"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;