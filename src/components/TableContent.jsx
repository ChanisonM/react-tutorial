import React, { useState } from "react";

const TableContent = () => {
  const [list, setList] = useState([
    {
      id : 1 ,
      fristName: "Chanison",
      lastName: "Aupathin",
      age: 26,
    },
    {
      id : 2 ,
      fristName: "Arocha",
      lastName: "Aupathin",
      age: 19,
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {list.map((items , index) => 
            <tr>
              <th scope="row">{items.id}</th>
              <td>{items.fristName}</td>
              <td>{items.lastName}</td>
              <td>{items.age}</td>

            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
