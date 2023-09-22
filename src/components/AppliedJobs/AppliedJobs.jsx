import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();
    const storedJobIds = getStoredJobApplication();
    // console.log(jobs);

    useEffect(() => {
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter((job) =>
                storedJobIds.includes(job.id)
            );
            setAppliedJobs(jobsApplied);
            console.log(appliedJobs);
        }
    }, []);

    return (
        <div>
            <div className="flex justify-end my-6">
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1 btn-info text-white">
                        Filter By
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>All</a>
                        </li>
                        <li>
                            <a>Remote</a>
                        </li>
                        <li>
                            <a>Onsite</a>
                        </li>
                    </ul>
                </div>
            </div>
            {appliedJobs.map((job) => (
                <AppliedJob key={job.id} job={job}></AppliedJob>
            ))}
        </div>
    );
};

export default AppliedJobs;
