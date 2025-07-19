import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">📧 {email}</p>
      <p className="text-sm text-gray-600">📱 {phone}</p>
      <p className="text-sm text-gray-600">🌐 {website}</p>
      <div className="mt-2 text-sm text-gray-700">
        <strong>Company:</strong> {company.name}<br />
        <strong>Catchphrase:</strong> <em>{company.catchPhrase}</em>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        {address.street}, {address.city}, {address.zipcode}
      </div>
    </div>
  );
};

export default UserCard;


// components/common/UserCard.tsx

// import { UserProps } from "@/interfaces";

// const UserCard: React.FC<UserProps> = ({
//   name,
//   username,
//   email,
//   phone,
//   website,
//   address,
//   company,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
//       <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
//       <p className="text-sm text-gray-500">@{username}</p>

//       <div className="mt-4 text-sm text-gray-700">
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Phone:</strong> {phone}</p>
//         <p><strong>Website:</strong> <a href={`http://${website}`} className="text-blue-500 underline" target="_blank">{website}</a></p>
//         <p><strong>Company:</strong> {company.name}</p>
//         <p><strong>Address:</strong> {address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
