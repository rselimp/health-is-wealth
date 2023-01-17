import React from 'react';

const CardPrice = () => {
    return (
        <div>

            <div class="min-h-screen flex justify-center items-center">
                <div class="">
                    <div class="text-center font-semibold mt-10">
                        <h1 class="text-xl">
                            <span class="text-blue-700 tracking-wide">MEDICAL </span>
                            <span>PACKAGES</span>
                        </h1>
                        <p class="pt-6 text-5xl font-bold w-full px-8 md:w-full">
                            Awesome Medical <br /> Programs
                        </p>
                    </div>
                    <div class="pt-24 flex flex-col lg:flex-row">

                        <div class="lg:w-96 w-full p-8 mb-20 lg:mb-0 bg-base-200 text-center rounded-3xl pr-16 shadow-xl">
                            <h1 class="text-black font-semibold text-2xl">Pregnancy Care</h1>
                            <p class="pt-2 tracking-wide">
                                <span class="text-gray-400 align-top">$ </span>
                                <span class="text-3xl font-semibold">200</span>
                                <span class="text-gray-400 font-medium">/ Year</span>
                            </p>
                            <hr class="mt-4 border-1" />
                            <div class="pt-8">
                                <p class="font-semibold text-gray-400 text-left">
                                    <span class="material-icons align-middle">
                                        done
                                    </span>
                                    <span class="pl-2">
                                        <span class="text-black">Emergency medical treatment</span>
                                    </span>
                                </p>
                                <p class="font-semibold text-gray-400 text-left pt-5">
                                    <span class="material-icons align-middle">
                                        done
                                    </span>
                                    <span class="pl-2">
                                        <span class="text-black">Highly experience doctors</span>
                                    </span>
                                </p>
                                <p class="font-semibold text-gray-400 text-left pt-5">
                                    <span class="material-icons align-middle">
                                        done
                                    </span>
                                    <span class="pl-2">
                                        <span class="text-black">Highest success rate</span>
                                    </span>
                                </p>

                                <a href="/" class="">
                                    <p>
                                        <button type="button" class=" w-full py-4 bg-blue-600 mt-8 rounded-xl text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                                            Apply Now
                                        </button>

                                    </p>
                                </a>
                            </div>
                        </div>

                        <div class="lg:w-80 w-full p-8 bg-sky-100 text-center rounded-3xl border-4 shadow-xl border-white transform scale-125">
                            <h1 class="font-semibold text-2xl">Operation and Surgery</h1>
                            <p class="pt-2 tracking-wide">
                                <span class="align-top">$ </span>
                                <span class="text-3xl font-semibold">500</span>
                                <span class=" font-medium">/ Year</span>
                            </p>
                            <hr class="mt-4 border-1 border-gray-600" />
                            <div class="pt-8">
                                <p class="font-semibold text-left">
                                    <span class="material-icons align-middle">

                                    </span>
                                    <span class="pl-2">
                                        <span class=""># Emergency medical treatment</span>
                                    </span>
                                </p>
                                <p class="font-semibold text-left pt-5">
                                    <span class="material-icons align-middle">

                                    </span>
                                    <span class="pl-2">
                                        <span class=""># Highly experience doctors</span>
                                    </span>
                                </p>
                                <p class="font-semibold text-left pt-5">

                                    <span class="pl-2">
                                        <span class=""># Highest success rate</span>
                                    </span>
                                </p>

                                <a href="#" class="">
                                    <p>
                                        <button type="button" class=" w-full py-4 bg-blue-600 mt-8 rounded-xl text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                                            Apply Now
                                        </button>

                                    </p>
                                </a>
                            </div>
                            <div class="absolute top-4 right-4">
                                <p class="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                            </div>
                        </div>

                        <div class="lg:w-96 w-full mt-20 lg:mt-0  p-8 bg-base-200 text-center rounded-3xl pl-16 shadow-xl">
                            <h1 class="text-black font-semibold text-2xl">Dental Care</h1>
                            <p class="pt-2 tracking-wide">
                                <span class=" align-top">$ </span>
                                <span class="text-3xl font-semibold">35</span>
                                <span class=" font-medium">/ user</span>
                            </p>
                            <hr class="mt-4 border-1" />
                            <div class="pt-8">
                                <p class="font-semibold text-gray-400 text-left">
                                    <span class="material-icons align-middle">
                                        done
                                    </span>
                                    <span class="pl-2">
                                        <span class="text-black">Emergency medical treatment</span>
                                    </span>
                                </p>
                                <p class="font-semibold text-gray-400 text-left pt-5">
                                    <span class="material-icons align-middle">
                                        done
                                    </span>
                                    <span class="pl-2">
                                        <span class="text-black">Highly experience doctors</span>
                                    </span>
                                </p>
                                <p class="font-semibold text-gray-400 text-left pt-5">
                                    <span class="material-icons align-middle">
                                        done
                                    </span>
                                    <span class="pl-2">
                                        <span class="text-black">Highest success rate</span>
                                    </span>
                                </p>

                                <a href="#" class="">
                                    <p>
                                    <button type="button" class=" w-full py-4 bg-blue-600 mt-8 rounded-xl text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                                            Apply Now
                                        </button>
                                       
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default CardPrice;