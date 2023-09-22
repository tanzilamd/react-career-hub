import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    getStoredJobApplication,
    saveJobApplication,
} from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find((job) => job.id == id);

    console.log(job);

    const {
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,
        contact_information,
    } = job;

    const handleApplyJob = () => {
        const getStoredJobs = getStoredJobApplication();

        if (getStoredJobs.find((jobId) => jobId == id) === undefined) {
            saveJobApplication(idInt);
            toast.success("You have applied successfully!");
        } else {
            toast.error("You have already applied!");
        }

        // if(!getStoredJobs.find(jobId => jobId == id)){}
    };

    return (
        <div className="my-20">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-6">
                    <p className="text-[#757575]">
                        <span className="font-bold text-[#1A1919]">
                            Job Description:{" "}
                        </span>
                        {job_description}
                    </p>

                    <p className="text-[#757575]">
                        <span className="font-bold text-[#1A1919]">
                            Job Responsibility:{" "}
                        </span>
                        {job_responsibility}
                    </p>

                    <p className="text-[#757575]">
                        <span className="font-bold text-[#1A1919]">
                            Educational Requirements:{" "}
                        </span>{" "}
                        <br />
                        {educational_requirements}
                    </p>

                    <p className="text-[#757575]">
                        <span className="font-bold text-[#1A1919]">
                            Experiences:{" "}
                        </span>{" "}
                        <br />
                        {experiences}
                    </p>
                </div>

                <div>
                    <div className="p-7 bg-gradient-to-t from-[#7e90fe1a] to-[#9873ff1a] rounded-lg">
                        <h3 className="font-bold text-lg">Job Details</h3>
                        <hr className="my-2" />
                        <p>
                            <span className="font-bold">Salary: </span>
                            {salary}
                        </p>
                        <p>
                            <span className="font-bold">Job Title: </span>
                            {job_title}
                        </p>

                        <h3 className="font-bold mt-6 text-lg">
                            Contact Information
                        </h3>
                        <hr className="my-2" />
                        <p>
                            <span className="font-bold">Phone: </span>
                            {contact_information.phone}
                        </p>
                        <p>
                            <span className="font-bold">Email: </span>
                            {contact_information.email}
                        </p>
                        <p>
                            <span className="font-bold">Address: </span>
                            {contact_information.address}
                        </p>
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={handleApplyJob}
                            className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold w-full text-white py-5 text-lg rounded-lg"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
