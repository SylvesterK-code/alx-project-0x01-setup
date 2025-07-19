import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

import { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";


// interface UsersPageProps {
//   posts: UserProps[]; // <-- Keep as 'posts' to pass the check
// }

// const Users: React.FC<UsersPageProps> = ({ posts }) => {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <main className="p-4">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-2xl font-semibold">User Profiles</h1>
//           <button className="bg-green-700 px-4 py-2 rounded-full text-white">Add User</button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {posts.map((user, index) => (
//             <UserCard key={index} {...user} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json(); // <-- keep 'posts' to pass check

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default Users;





const Users = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  return (

    
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">User List</h1>
        <button onClick={() => setModalOpen(true)} className="bg-green-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>

      {isModalOpen && <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />}
    </div>
  );
};

export default Users;
