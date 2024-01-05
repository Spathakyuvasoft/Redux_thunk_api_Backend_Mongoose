import { useEffect } from "react";
import { fetchUsers, deleteUser } from "../../Redux/Action/Action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Table.css";

const Table = () => {
  const userTable = useSelector((state) => state.list);
  const userId = useSelector((state) => state.srNo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const userRowEdit = (index) => {
    const { personId, _id } = index;
    // dispatch({ type: "Edit_User", payload: _id });
    // dispatch(fetchUsers());
    navigate(`/Form/${_id}`);
  
  };

  return (
    <div className="App">
      <Link to="/Form">
        <button>Add User Data</button>
      </Link>
      <div>
        {userTable.length === 0 ? (
          <p>No data to show</p>
        ) : (
          <table className="table">
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            {userTable.map((each, index) => {
              return (
                <tr key={each.personId}>
                  <th className="view">{each.personId}</th>
                  <th className="view">{each.name}</th>
                  <th className="view">{each.phone}</th>
                  <th className="view">{each.email}</th>
                  <th>
                    <button
                      onClick={() => {
                        dispatch(deleteUser(each._id));
                      }}
                    >
                      Delete
                    </button>
                    /
                    <button
                      onClick={() => {
                        userRowEdit(each);
                      }}
                    >
                      Edit
                    </button>
                  </th>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
