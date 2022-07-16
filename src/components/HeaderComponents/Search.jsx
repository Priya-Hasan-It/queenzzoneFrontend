import React from "react";
import { Chat, HandbagFill, Heart, SearchIcon } from "../../svg";

const Search = () => {
  return (
    <div>
      <section className="search">
        <div className="container c_flex">
          <div className="">
            <Chat color="#CAF0F8" height="50" width="50" />
          </div>

          <div className="search-box d-flex bg-light rounded-4 align-items-center ">
            <input
              className="block bg-transparent border-0"
              type="text"
              placeholder="Search and hit enter..."
            />
            <div className="me-2 p-2">
              <SearchIcon color="#37bdd8" height="40" width="40" />
            </div>
          </div>

          <div className="">
            <Heart color="#CAF0F8" height="40" width="40" />
          </div>
          <div className="">
            <HandbagFill color="#CAF0F8" height="40" width="40" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
