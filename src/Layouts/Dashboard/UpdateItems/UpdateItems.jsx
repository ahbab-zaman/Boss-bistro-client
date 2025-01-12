import { useLoaderData, useNavigate } from "react-router-dom";
import TitleSection from "../../../Components/TitleSection/TitleSection";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const imageApiKey = import.meta.env.VITE_IMAGE_API;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
const UpdateItems = () => {
  const { name, recipe, category, price, _id } = useLoaderData();
  // console.log(data)
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseInt(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/manageItems");
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <TitleSection subHeading="update item"></TitleSection>

      <div className="p-6">
        <div className="px-8 py-6 bg-base-200">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Recipe Name
                </span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                defaultValue={name}
                placeholder="Recipe Name"
                className="input input-bordered w-full"
              />
            </label>
            <div className="flex justify-start gap-4">
              <div className="w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold">
                    Category*
                  </span>
                </div>
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">salad</option>
                  <option value="pizza">pizza</option>
                  <option value="dessert">dessert</option>
                  <option value="soup">soup</option>
                  <option value="drinks">drinks</option>
                </select>
              </div>
              <div className="w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold">
                    Price*
                  </span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="text"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="label">
              <span className="label-text text-lg font-semibold">
                Recipe Details*
              </span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              defaultValue={recipe}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg resize-none w-full"
            ></textarea>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-semibold flex items-center gap-1"
              >
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItems;
