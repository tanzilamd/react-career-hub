import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const jobs = useLoaderData();

    const handleJobsFilter = (filter) => {
        if (filter === "all") {
            setDisplayJobs(appliedJobs);
        } else if (filter === "remote") {
            const remoteJobs = appliedJobs.filter(
                (job) => job.remote_or_onsite === "Remote"
            );
            setDisplayJobs(remoteJobs);
        } else if (filter === "onsite") {
            const remoteJobs = appliedJobs.filter(
                (job) => job.remote_or_onsite === "Onsite"
            );
            setDisplayJobs(remoteJobs);
        }
    };

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();

        if (jobs.length > 0) {
            const jobsApplied = jobs.filter((job) =>
                storedJobIds.includes(job.id)
            );

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs]);

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
                        <li
                            onClick={() => {
                                handleJobsFilter("all");
                            }}
                        >
                            <a>All</a>
                        </li>
                        <li
                            onClick={() => {
                                handleJobsFilter("remote");
                            }}
                        >
                            <a>Remote</a>
                        </li>
                        <li
                            onClick={() => {
                                handleJobsFilter("onsite");
                            }}
                        >
                            <a>Onsite</a>
                        </li>
                    </ul>
                </div>
            </div>
            {displayJobs.map((job) => (
                <AppliedJob key={job.id} job={job}></AppliedJob>
            ))}
        </div>
    );
};

export default AppliedJobs;
