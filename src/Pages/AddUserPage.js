import { nanoid } from '@reduxjs/toolkit';
import { addUsers } from 'Redux/users/usersSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Label, Input, Button } from 'Pages/AddUserPage.styled';

export const AddUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name: e.target.elements.name.value,
      age: e.target.elements.age.value,
    };
    dispatch(addUsers(newUser));
    navigate('/');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input type="text" name="name" />
      </Label>
      <Label>
        Age:
        <Input type="number" name="age" />
      </Label>
      <Button type="submit">Save</Button>
    </Form>
  );
};
