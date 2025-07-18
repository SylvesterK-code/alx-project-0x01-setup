type PostCardProps = {
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="p-4 border rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;
