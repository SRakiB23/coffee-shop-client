import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateCoffee() {
  const coffee = useLoaderData();
  const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your Coffee Has Been Updated", "Sucess");
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold">Update Coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/*form row for name and quantity*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Availble Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Coffee Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/*form row for supplier and taste*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier Name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          {/*form row for Category and details*/}
          <div className="md:flex gap-4 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="PhotoURL"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="bg-gray-800 btn btn-block text-white"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateCoffee;
