import React from 'react';

interface ProductCardProps {
  productName: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{productName}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
