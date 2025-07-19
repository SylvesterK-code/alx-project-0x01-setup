import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const keys = name.split(".");

    if (keys.length === 1) {
      setUser((prev) => ({ ...prev, [name]: value }));
    } else if (keys[0] === "address") {
      if (keys[1] === "geo") {
        setUser((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            geo: {
              ...prev.address.geo,
              [keys[2]]: value
            }
          }
        }));
      } else {
        setUser((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            [keys[1]]: value
          }
        }));
      }
    } else if (keys[0] === "company") {
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [keys[1]]: value
        }
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" value={user.name} onChange={handleChange} className="input" />
          <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
          <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />

          <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="input" />
          <input name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="input" />
          <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />
          <input name="address.zipcode" placeholder="Zip Code" value={user.address.zipcode} onChange={handleChange} className="input" />
          <input name="address.geo.lat" placeholder="Geo Lat" value={user.address.geo.lat} onChange={handleChange} className="input" />
          <input name="address.geo.lng" placeholder="Geo Lng" value={user.address.geo.lng} onChange={handleChange} className="input" />

          <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={handleChange} className="input" />
          <input name="company.bs" placeholder="Business Strategy" value={user.company.bs} onChange={handleChange} className="input" />

          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;



