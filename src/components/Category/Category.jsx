const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="bg-[#7e90fe0d] p-8">
            <img className="mb-6" src={logo} alt="" />
            <h4 className="font-bold text-xl">{category_name}</h4>
            <p className="text-[#A3A3A3]">{availability}</p>
        </div>
    );
};

export default Category;
