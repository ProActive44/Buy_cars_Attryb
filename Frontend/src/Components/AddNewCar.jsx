import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

const AddNewCar = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    kmsOnOdometer: 0,
    majorScratches: 0,
    originalPaint: false,
    accidentsReported: 0,
    previousBuyers: 0,
    registrationPlace: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-gray-700 p-4 rounded-lg mb-32">
      <form className="text-left" onSubmit={handleSubmit}>
        <FormControl className="mb-4">
          <FormLabel>Upload an Image</FormLabel>
          <Input type="file" required />
        </FormControl>
        <FormControl className="mb-4">
          <FormLabel>Title:</FormLabel>
          <Input
            type="text"
            placeholder="Car Title"
            name="title"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className="mb-4">
          <FormLabel>Price:</FormLabel>
          <Input
            type="number"
            placeholder="Car Price"
            min="0"
            name="price"
            required
            onChange={handleChange}
          />
        </FormControl>

        <FormControl className="mb-4">
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Add a short description"
            name="description"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className="mb-4">
          <FormLabel>Odometer's current value:</FormLabel>
          <Input
            type="number"
            placeholder="kms on Odometer"
            name="kmsOnOdometer"
            min="0"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className="mb-4">
          <FormLabel>Major Scratches:</FormLabel>
          <Input
            type="number"
            placeholder="No of major scratches"
            min="0"
            name="majorScratches"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className="mb-4">
          <FormLabel>No of Accidents:</FormLabel>
          <Input
            type="number"
            placeholder="No of Accidents"
            min="0"
            name="accidentsReported"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className="mb-4">
          <FormLabel>No of Previous Buyers:</FormLabel>
          <Input
            type="number"
            placeholder="No of Previous Buyers"
            min="0"
            name="previousBuyers"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className="mb-4">
          <FormLabel>Registration Place:</FormLabel>
          <Input
            type="text"
            placeholder="Registration Place"
            name="registrationPlace"
            required
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className="mb-4">
          <Checkbox name="originalPaint" onChange={handleChange}>
            Original Paint
          </Checkbox>
        </FormControl>
        <Button type="submit">Add new car</Button>
      </form>
    </div>
  );
};

export default AddNewCar;
