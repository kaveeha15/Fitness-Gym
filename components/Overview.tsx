import { LuUserRound } from "react-icons/lu";
import { BsFillCalendarHeartFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { MdRememberMe } from "react-icons/md";
import { TbGenderBigender } from "react-icons/tb";
import { RiLineHeight } from "react-icons/ri";
import { LuWeight } from "react-icons/lu";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdSportsGymnastics } from "react-icons/md";
const Overview = ({ user }) => {
    console.log('at overview', user)
    return (
        <div className="flex" >
            <div className=" bg-gray-700 m-4 text-white rounded-3xl w-200 ">
                <div className="flex gap-3 px-5 py-3 items-center">
                    <LuUserRound />
                    <div className="flex-col">
                        <p>User Name</p>
                        <p>{user.name}</p>
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
                    <BsFillCalendarHeartFill />
                    <div className="flex-col">
                        <p>Age</p>
                        <p>{user.age}</p>
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
                    <MdOutlineAlternateEmail />
                    <div className="flex-col">
                        <p>Email</p>
                        <p>{user.email}</p>
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
                    <MdOutlineAlternateEmail />
                    <div className="flex-col">
                        <p>Contact Number</p>
                        <p>{user.pno}</p>
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
                    <MdRememberMe />
                    <div className="flex-col">
                        <p>Membership Number</p>
                        <p>{user.no}</p>
                    </div>

                </div>

            </div>
             <div className=" bg-gray-700 m-4 text-white rounded-3xl  w-200">
                <div className="flex gap-3 px-5 py-3 items-center">
                  <TbGenderBigender />
                    <div className="flex-col">
                        <p>Gender</p>
                        <p>{user.gender}</p>
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
                    <RiLineHeight />
                    <div className="flex-col">
                        <p>Height</p>
                        <p>{user.height}</p>
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
                  <LuWeight />

                    <div className="flex-col">
                        <p>Weight</p>
                        <p>{user.weight}</p>
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
               <MdOutlineContactPhone />
                    <div className="flex-col">
                        <p>Contact Number</p>
                      
                    </div>

                </div>
                <div className="flex gap-3 px-5 py-3 items-center">
                    <MdSportsGymnastics />
                    <div className="flex-col">
                        <p>Status</p>
                        <p>{user.status?'Active':'Inactive'}</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Overview;