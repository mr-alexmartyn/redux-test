import { nanoid } from '@reduxjs/toolkit';

export const AddUserPage = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name: e.target.elements.name.value,
      age: e.target.elements.age.value,
    };
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Age:
        <input type="number" name="age" />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
