import { Link } from "react-router-dom";

// Images
import image from "../images/Business_SVG.svg";

// Page Patterns
import firstpattern from "../patterns/first_pattern.svg";
import secondpattern from "../patterns/second_pattern.svg";

// Components
import { Footer } from "../components/FooterComponent";

const Heading = () => {
    return(
        <>
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-20 lg:mt-8 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl z-10"><br/>
                        We <span className="dark:text-blue-400 z-10">Master</span> Investments & Passive Income
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 z-10">We Provide Support For Our Private Investors & Help Build a Better Future
                        <div className="hidden md:inline lg:hidden">With</div>
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#about" className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900">About Us</a>
                        <Link to="/signup" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Sign Up</Link>
                    </div>
                </div>
            </div>     
        </section>
        </>
    );
}

const Body = () => {
    return(
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100" id="about">
            <div className=" w-96 h-96 right-16 hidden 2xl:absolute 2xl:block mt-52"><img src={firstpattern} alt=""/></div>
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-400 mt-20">
                                <h3 className="text-3xl font-semibold">What We Do</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Actions & Steps</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 md:mt-20 mt-0">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Build Portfolio's </h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Your Investments</time>
                                    <p className="mt-3">We Help Our Investors Build Investment Portfolio's and Steps Towards These Investments, Taking Every Action We Can To Help You In The Long Run</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Manage Passive Income</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Support Time Quality</time>
                                    <p className="mt-3">Nothing On Your End You Have to Worry About When It Comes To The Question "Where Do I Invest My Money?" We Handle Everything That Holds Answers To That Question, Trying to Provide The Best Experience</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Help Our Investors Build Capital</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Building Towards Better</time>
                                    <p className="mt-3">When It Comes to Businesses or Personal Looking To Build More Capital, Most Dont Have Time to Manually Do These Things, We Specialize In These Actions To Help Your Time Management & Progress Towards That Goal </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dark:bg-gray-800 dark:text-gray-100" id="teams">
            <div className=" w-72 h-88 left-16 hidden 2xl:absolute 2xl:block mt-64"><img src={secondpattern} alt=""/></div>
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400 mt-20">
                                <h3 className="text-3xl font-semibold">Our Teams</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Team Introduction</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 md:mt-20 mt-0">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Real Estate Team</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Housing & Properties</time>
                                    <p className="mt-3">Part of Your Investment Will Go Toward the Real Estate Team! They Invest Into Upcoming & Current Properties,
                                                        Taking Action & Managing Different Sources With a Reliable Strategy</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Marketing Team</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Affilates & Listing</time>
                                    <p className="mt-3">Our Marking Team Works With Other Companies / Individuals Looking to Market a Product or Company On Behalf of Our Help & Assets</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Trading / Investment Team</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Liquid Markets & Investing</time>
                                    <p className="mt-3">Traders That Our Investors Invest Into, Not Only Work With Stocks But Aswell as Forex & Crypto Currencies, Constantly Improving Our Ethics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dark:bg-gray-800 dark:text-gray-100" id="journey">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-green-400 mt-20">
                                <h3 className="text-3xl font-semibold">The Journey</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Future Progress</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 md:mt-20 mt-0">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Real Time Investing</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Housing & Properties</time>
                                    <p className="mt-3">Part of Your Investment Will Go Toward the Real Estate Team! They Invest Into Upcoming & Current Properties,
                                                        Taking Action & Managing Different Sources With a Reliable Strategy</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Company Asset Expansion</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Affilates & Listing</time>
                                    <p className="mt-3">Our Marking Team Works With Other Companies / Individuals Looking to Market a Product or Company On Behalf of Our Help & Assets</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Monthly Payouts</h3>
                                    <time className="text-xs tracking-wide dark:text-gray-400">Liquid Markets & Investing</time>
                                    <p className="mt-3">Traders That Our Investors Invest Into, Not Only Work With Stocks But Aswell as Forex & Crypto Currencies, Constantly Bettering Strategies We Use To Trade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export const HomePage = () => {
    return(
        <>
            <Heading/>
            <Body/>
            <Footer/>
        </>
    );
}
