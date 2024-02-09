import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    data();
  }, []);
  const data = () => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => {
        setInformation(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {information.map((user, index) => {
        return (
          <div key={index}>
            <div className="flex justify-center items-center w-30 border-black  border-2 flex-wrap sm:w-1/2 lg:w-1/3">
              <div>
                <img src={user.picture.large} alt="" />
              </div>
              <div className="p-10">
                <p className="font-bold">
                  {user.name.first} {user.name.last}
                </p>
                <p>{user.gender}</p>
                <p>{user.phone}</p>
              </div>
              {console.log(user.name.first)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
