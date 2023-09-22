import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);
    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Job Category List</h2>
                <p>
                    Explore thousands of job opportunities with all the
                    information you need. Its your future
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Category key={category.id} category={category}></Category>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
