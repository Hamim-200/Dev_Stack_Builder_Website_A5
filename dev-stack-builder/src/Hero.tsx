import heroImage from "./assets/banner-stack.png";

function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto gap-10">

            {/* Left: Text content */}
            <div className="max-w-xl">
                <h1 className="text-5xl font-extrabold leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-6 text-gray-600 text-lg">
                    Explore frontend, backend, database, and tooling options, compare
                    them side by side, and put together the stack that fits your next
                    project.
                </p>

                <div className="mt-8 flex items-center gap-4">
                    <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg">
                        Explore Technologies
                    </button>
                    <button className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right: Illustration */}
            <div className="flex-shrink-0">
                <img
                    src={heroImage}
                    alt="Development stack illustration"
                    className="w-72 md:w-96"
                />
            </div>

        </section>
    );
}

export default Hero;