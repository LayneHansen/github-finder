import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
import '../../index.css'
// import Spinner from "../layout/Spinner";
// import UserItem from "./UserItem";
// import { Alert } from "react-daisyui";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const {setAlert} = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert('Please enter search text.', 'error')
    } else {
      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type: 'GET_USERS', payload: users})

      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
      <p className="bg-auto text-neutral-100 text-center text-xl font-bold pb-5">Find a Developer/Repo</p>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 border-stone-400 border-2 border-double input input-lg 
                  text-stone-400 hover:border-stone-200 hover:bg-emerald-800 hover:text-stone-200"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg border-stone-400 border-2
                hover:border-stone-200 hover:bg-emerald-800"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className="btn btn-ghost btn-lg">
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
