import "./index.css";
import { fetchUsers} from "../../Redux/Action/Action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.list);
  const loading = useSelector((state) => state.loading);
 

  const deleteUserRow = (Id) => {
    // dispatch(deleteUser(Id));
  };

  return (
    <div className="App">
      <h1>Fetching API</h1>
      <ul className="ul">
        {counter.map((item) => (
          <li key={item.id}>
            <div className="align">
              <p>{item.title}</p>
              <button
                onClick={() => {
                  deleteUserRow(item.id);
                }}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
