import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavSingleJob = ({ job }) => {
    const {
        id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        job_type,
        location,
        salary,
    } = job;
    return (
        <div className="rounded-lg border-2 p-6">
            <img className="mb-6 w-[180px]" src={logo} alt="" />
            <h3 className="text-2xl font-bold text-[#474747]">{job_title}</h3>
            <h4 className="text-xl font-semibold text-[#757575]">
                {company_name}
            </h4>
            <div className="my-4">
                <button className="btn btn-primary bg-transparent text-[#7E90FE] border-[#7E90FE] font-bold hover:bg-transparent py-2 px-5 mr-4">
                    {remote_or_onsite}
                </button>
                <button className="btn btn-primary bg-transparent text-[#7E90FE] border-[#7E90FE] font-bold hover:bg-transparent py-2 px-5 mr-4">
                    {job_type}
                </button>
            </div>

            <div className="flex gap-4 text-[#757575] font-medium">
                <p className="flex items-center gap-1">
                    <CiLocationOn />
                    {location}
                </p>
                <p className="flex items-center gap-1">
                    <RiMoneyDollarCircleLine />
                    {salary}
                </p>
            </div>
            <Link to={`../job/${id}`}>
                <button className="btn btn-info bg-[#7E90FE] text-white border-0 mt-6">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default NavSingleJob;
