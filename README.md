# alx-project-0x01
React Architect Mastering Advanced Structures in Next.js



✅ Task 1: Project Setup & Landing Page with Button Component
🧩 Objective:
Initialize a clean and scalable Next.js project using TypeScript and Tailwind CSS. Create reusable button components in different sizes and shapes.

🪜 Steps:
Create a new Next.js project with TypeScript:

bash
Copy
Edit
npx create-next-app@latest alx-project-0x01 --typescript
cd alx-project-0x01
Install Tailwind CSS:

bash
Copy
Edit
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configure Tailwind:

Edit tailwind.config.js:

js
Copy
Edit
content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
Edit styles/globals.css:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Create reusable Button component:

File: components/common/Button.tsx

tsx
Copy
Edit
interface ButtonProps {
  title: string;
  style?: string;
}

const Button = ({ title, style }: ButtonProps) => {
  return <button className={`px-4 py-2 ${style}`}>{title}</button>;
};

export default Button;
Create a landing page and use Button:

File: pages/landing.tsx

tsx
Copy
Edit
import Button from "@/components/common/Button";

const LandingPage = () => {
  return (
    <div className="p-10 space-y-4">
      <Button title="Small Button" style="text-sm rounded-sm bg-blue-500 text-white" />
      <Button title="Medium Button" style="text-base rounded-md bg-green-500 text-white" />
      <Button title="Large Button" style="text-lg rounded-full bg-red-500 text-white" />
    </div>
  );
};

export default LandingPage;
✅ Task 2: Posts Page with PostCard Component
🧩 Objective:
Fetch posts from an API and display them using reusable PostCard components.

🪜 Steps:
Define PostProps interface:

File: interfaces/index.ts

ts
Copy
Edit
export interface PostProps {
  id: number;
  title: string;
  body: string;
}
Create PostCard component:

File: components/common/PostCard.tsx

tsx
Copy
Edit
import { PostProps } from "@/interfaces";

const PostCard = ({ title, body }: PostProps) => (
  <div className="border p-4 rounded shadow-md">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">{body}</p>
  </div>
);

export default PostCard;
Build the posts page:

File: pages/posts/index.tsx

tsx
Copy
Edit
import { GetStaticProps } from "next";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostPageProps) => (
  <div className="grid grid-cols-1 gap-4 p-10">
    {posts.map((post) => (
      <PostCard key={post.id} {...post} />
    ))}
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
};

export default PostsPage;
✅ Task 3: Users Page with UserCard Component
🧩 Objective:
Fetch user data and display it using a reusable UserCard component.

🪜 Steps:
Define UserProps interface:

File: interfaces/index.ts

ts
Copy
Edit
export interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}
Create UserCard component:

File: components/common/UserCard.tsx

tsx
Copy
Edit
import { UserProps } from "@/interfaces";

const UserCard = ({ name, email, phone, company }: UserProps) => (
  <div className="border p-4 rounded shadow">
    <h2 className="font-bold">{name}</h2>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{company.name}</p>
  </div>
);

export default UserCard;
Build the users page:

File: pages/users/index.tsx

tsx
Copy
Edit
import { GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const UsersPage = ({ posts }: UsersPageProps) => (
  <div className="grid grid-cols-1 gap-4 p-10">
    {posts.map((user) => (
      <UserCard key={user.id} {...user} />
    ))}
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();
  return { props: { posts } };
};

export default UsersPage;
✅ Task 4: Add PostModal Component
🧩 Objective:
Allow users to add a new post using a form modal.

🪜 Steps:
Extend interfaces/index.ts:

ts
Copy
Edit
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostProps) => void;
}
Create PostModal component:

File: components/modals/PostModal.tsx

tsx
Copy
Edit
import { useState } from "react";
import { PostModalProps, PostProps } from "@/interfaces";

const PostModal = ({ onClose, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const newPost: PostProps = {
      id: Date.now(),
      title,
      body,
    };
    onSubmit(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded space-y-4">
        <input className="border p-2 w-full" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea className="border p-2 w-full" placeholder="Body" onChange={(e) => setBody(e.target.value)} />
        <div className="flex justify-between">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          <button onClick={onClose} className="text-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
Use modal in pages/posts/index.tsx:

Add state and handlers:

tsx
Copy
Edit
const [isModalOpen, setIsModalOpen] = useState(false);
const [allPosts, setAllPosts] = useState<PostProps[]>(posts);

const handleAddPost = (post: PostProps) => {
  setAllPosts([...allPosts, post]);
};
Render modal and trigger button:

tsx
Copy
Edit
{isModalOpen && (
  <PostModal
    onClose={() => setIsModalOpen(false)}
    onSubmit={handleAddPost}
  />
)}
<button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white px-4 py-2 rounded mb-4">Add Post</button>
✅ Task 5: Add UserModal Component
🧩 Objective:
Allow users to add a new user using a modal form.

🪜 Steps:
Extend interfaces/index.ts:

ts
Copy
Edit
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
}
Create UserModal component:

File: components/modals/UserModal.tsx

tsx
Copy
Edit
import { useState } from "react";
import { UserModalProps, UserProps } from "@/interfaces";

const UserModal = ({ onClose, onSubmit }: UserModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: { name: "" },
  });

  const handleSubmit = () => {
    const newUser: UserProps = {
      id: Date.now(),
      ...formData,
    };
    onSubmit(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded space-y-4">
        <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input placeholder="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <input placeholder="Company Name" onChange={(e) => setFormData({ ...formData, company: { name: e.target.value } })} />
        <div className="flex justify-between">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
          <button onClick={onClose} className="text-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
Update pages/users/index.tsx:

Add state and handlers:

tsx
Copy
Edit
const [users, setUsers] = useState<UserProps[]>(posts);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleAddUser = (user: UserProps) => {
  setUsers([...users, user]);
};
Render modal and trigger:

tsx
Copy
Edit
{isModalOpen && (
  <UserModal
    onClose={() => setIsModalOpen(false)}
    onSubmit={handleAddUser}
  />
)}
<button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white px-4 py-2 rounded mb-4">Add User</button>