import React, { useState } from "react";
import Input from "./Input";
import Table from "./Table";

const StateStore = () => {
  const [filterQuery, setFilterQuery] = useState("");

  const handleSubmit = (val) => setFilterQuery(val);

  return (
    <>
      <Input onSubmit={handleSubmit} />
      <div>
        <Table filterQuery={filterQuery} />
      </div>
    </>
  );
};

export default React.memo(StateStore);
