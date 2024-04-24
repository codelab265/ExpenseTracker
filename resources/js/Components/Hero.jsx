import React from "react";

function Hero() {
    return (
        <section className="bg-gray-50 flex flex-col items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Manage your expenses.
                        <strong className="font-extrabold text-primary sm:block">
                            {" "}
                            Control your money.{" "}
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Start your budget and save ton of money
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/40 sm:w-auto transition-all duration-300"
                            href="#"
                        >
                            Get Started now
                        </a>
                    </div>
                </div>
            </div>

            <img src="./assets/images/dashboard.png" />
        </section>
    );
}

export default Hero;
