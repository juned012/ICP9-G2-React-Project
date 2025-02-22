import React from 'react';
import { Link } from 'react-router';

<<<<<<< HEAD
function PetDetailsCard({ id, imgUrl, name, age, breed, price }) {
=======
function PetDetailsCard({ id, imgUrl, name, age, breed }) {
>>>>>>> ce8b1b9dfc4d198a04e2a691b8754011c87c41b8
    return (

        <div className="w-[400px] m-5 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img
                src={imgUrl}
                alt={name}
                className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-2xl mb-2 font-bold text-black">{name}</h2>
                <p className="text-gray-700 text-md">Breed: {breed}</p>
                <p className="text-gray-700 text-md">Age: {age} Years</p>
<<<<<<< HEAD
                <p className="text-green-700 font-bold text-lg">Price: <span className='font-semibold'>₹{price}</span></p>
                <div className="mt-5">
                    <Link to={`/petdetailedview/${id}`}> 
=======
                <div className="mt-5">
                    <Link to={`/petdetailedview/${id}`}>
>>>>>>> ce8b1b9dfc4d198a04e2a691b8754011c87c41b8
                        <button className="w-full cursor-pointer py-2 rounded-lg font-semibold transition-colors duration-300 bg-[#8B5E3C] text-white hover:bg-[#6F4B2E]">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PetDetailsCard;
