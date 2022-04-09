import React from "react";

const CreateForm = () => {
  return (
    <section>
      <h1>Create Your Experience</h1>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor="text">Description</label>
          <input type="text" id="text" required />
        </div>
      </form>
    </section>
  );
};

export default CreateForm;
