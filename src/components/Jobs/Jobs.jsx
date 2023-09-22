import { useEffect, useState } from "react";
import NavSingleJob from "../NavSingleJob/NavSingleJob";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            });
    }, []);
    return (
        <div className="mb-10">
            <div className="mt-6 mb-4">
                <h2 className="text-2xl font-bold">
                    Total Jobs: {jobs.length}
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {jobs.map((job) => (
                    <NavSingleJob key={job.id} job={job}></NavSingleJob>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
