import { FaChevronDown } from "react-icons/fa";
import ban1 from '../../assets/ban-1.jpg'
const BannerWrapper = () => {
    return (
        <>
            <div className="container">

                <div className="">
                    <div className=" w-full p-6 md:px-20 ">
                        <h2 className="text-primary capitalize text-center text-2xl/20 md:text-4xl font-semibold mb-3">
                            <span className="text-yellow-600">Simply Accounting</span> with expert remote solutions
                        </h2>
                        <p className="mx-auto text-center text-primary text-base  mb-4">
                            At Second Office, we provide accounting done right for a growing business. Simplify Accounting with Expert Remote Solutions.
                        </p>
                       
                    </div>
                    <img
                        src={ban1} // Replace with actual path
                        alt="Knowledge Partner"
                        className="w-full max-h-[450px] object-contain opacity-80"
                    />

                    
                </div>
            </div>
        </>
    )
}

export default BannerWrapper;