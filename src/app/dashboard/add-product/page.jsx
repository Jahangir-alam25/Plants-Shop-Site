import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AddProductPage() {
  const session = await getServerSession();

  // if (!session) {
  //   redirect("/login"); // Redirect unauthenticated users
  // }
 
  // Render form
  return (
    <div className="max-w-lg mx-auto bg-base-100 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form action="/api/products" method="POST" className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
    </div>
  );
}
