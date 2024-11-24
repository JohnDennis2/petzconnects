import React from 'react';

interface PetCardProps {
  name: string;
  breed: string;
  imageUrl: string;
}

const PetCard: React.FC<PetCardProps> = ({ name, breed, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{breed}</p>
      </div>
    </div>
  );
};

export default PetCard;
