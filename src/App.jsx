import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import initialCarData from "./data/data.js";
function App() {
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    make: "",
    model: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      console.log("initial useEffect running");
      setCars(initialCarData);
      return () => {
        console.log("cleaning [] useEffect");
      };
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log("[cars] state changed! triggering useEffect...");
    console.log(cars);
    return () => {
      console.log("cleaning [cars] useEffect");
    };
  }, [cars]);

  const getNewId = () => {
    return cars.length + 1;
  };
  const addCarToCarState = (newCar) => {
    console.log(newCar);
    console.log(cars);
    setCars([...cars, newCar]);
  };
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let car = {
      id: getNewId(),
      make: formData.make,
      model: formData.model,
    };

    addCarToCarState(car);
  };

  return (
    <>
      <div>
        <h1>Car Data</h1>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Make</td>
              <td>Model</td>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <td>{car.id}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Make
          <input
            type="text"
            name="make"
            onChange={handleChange}
            value={formData.make}
            required
          />
        </label>

        <label>
          Model
          <input
            type="text"
            name="model"
            onChange={handleChange}
            value={formData.model}
            required
          />
        </label>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}

export default App;
