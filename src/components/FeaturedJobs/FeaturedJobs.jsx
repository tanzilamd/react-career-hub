import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Featured Jobs</h2>
                <p>
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {jobs.map((job) => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
        </div>
    );
};

export default FeaturedJobs;
