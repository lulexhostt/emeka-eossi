// import MenuItem from "./MenuItem";
import { AiOutlineHome } from 'react-icons/ai';
import { VscThreeBars } from 'react-icons/vsc';
// import Link from 'next/link';





export default function Header() {
    return (
        <div className="flex justify-between mx-5 max-w-6xl  sm:mx-auto items-center  my-8">

            <div>
                <Link href="/">
                    <h2 className="text-2xl" > <span className="font-bold bg-amber-500 py-1 px-3 rounded-lg text-[#4C205B]">EOSI</span><span className="text-2xl text-violet-900 font-semibold" > Finance</span> </h2>
                </Link>
            </div>

            <div className=" flex flex-row ">
                <MenuItem title="Home" address="/" />
                <MenuItem title="Products" address="" />
                <MenuItem title="Roadmap" address="/" />
                <MenuItem title="Team" address="/" />
                <MenuItem title="Blog" address="https://medium.com/@v.hamann" />
                <MenuItem title="Whitepaper" address="https://eosi-finance.gitbook.io/eosi-finance-whitepaper/ " />



                <div className="flex flex-row space-x-3 md:ml-20">
                    {/* <Link href="/login" className="hover:translate-x-0.5 duration-700 ">
                    <h2 className="text-sm" > <span className="hidden md:inline font-base bg-slate-300 py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-white duration-700">Funded Account</span></h2>
                </Link> */}
                    <Link href="/signup" className="hover:translate-x-0.5 duration-700">
                        <h2 className="text-sm" > <span className=" hidden md:inline font-base bg-[#4C205B] py-4 px-6 rounded-xl text-gray-100 ">Connect Wallet</span></h2>
                    </Link>
                </div>

                <Link href="/login">
                    <div className="text-3xl sm:hidden mx-4 hover:text-amber-600 text-[#4C205B]">
                        <VscThreeBars />
                    </div>
                </Link>





            </div>


        </div>
    )
}
