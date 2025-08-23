// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

// export default async function AddProductPage() {
//   const session = await getServerSession();

//   // if (!session) {
//   //   redirect("/login"); // Redirect unauthenticated users
//   // }
 
//   // Render form
//   return (
//     <div className="max-w-lg mx-auto bg-base-100 shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-bold mb-4">Add New Product</h2>
//       <form action="/api/products" method="POST" className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           className="input input-bordered w-full"
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           className="textarea textarea-bordered w-full"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           className="input input-bordered w-full"
//           required
//         />
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           className="input input-bordered w-full"
//           required
//         />
//         <button type="submit" className="btn btn-primary w-full">
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    price: "",
    description: "",
    available_pieces: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
        available_pieces: Number(formData.available_pieces),
      }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Plant added successfully!");
      setFormData({ name: "", img_url: "", price: "", description: "", available_pieces: "" });
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add New Plant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Plant Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="img_url"
          placeholder="Image URL"
          value={formData.img_url}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="available_pieces"
          placeholder="Available Pieces"
          value={formData.available_pieces}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
}
