const Banner = () => {
    return (
        <div className="flex justify-between py-8 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
                <h1 className="font-bold text-6xl space-y-3">
                    <span className="inline-block">One Step</span> <br />
                    <span className="inline-block">Closer To Your</span> <br />
                    <span className="inline-block text-[#7E90FE]">
                        Dream Job
                    </span>
                </h1>
                <p className="w-full">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future. Come find it. Manage
                    all your job application from start to finish.
                </p>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold text-white px-5 py-3 text-md rounded-lg">
                    Get Started
                </button>
            </div>
            <div className="w-1/2 flex items-start hidden lg:block">
                <img
                    className="w-full"
                    src="https://i.ibb.co/k9tg3wJ/user.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;
