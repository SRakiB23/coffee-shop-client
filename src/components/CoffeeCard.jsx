import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CoffeeCard({ coffee, coffees, setCoffees }) {
  const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee Has Been Deleted", "Sucess");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div
      className="card card-side bg-base-100"
      style={{ display: "flex", height: "50%" }}
    >
      <div style={{ flex: "1", display: "flex", flexDirection: "" }}>
        <div>
          <img
            src={photo}
            alt="Movie"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item">View</button>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn join-item">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-600"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;
