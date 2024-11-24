import React from 'react';

interface BlogPostCardProps {
  title: string;
  summary: string;
  imageUrl: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, summary, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{summary}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
