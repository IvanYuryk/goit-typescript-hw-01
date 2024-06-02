type UserProfile = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<UserProfile>) {
  // Тут може бути реалізація оновлення користувача
  console.log('Updating user with values:', initialValues);
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

createOrUpdateUser({ 
  name: 'NewName' 
});

createOrUpdateUser({ 
  name: 'NewName',
  email: 'newemail@mail.com' 
});

createOrUpdateUser({ 
  name: 'Alice', 
  surname: 'Johnson', 
  email: 'alice.johnson@mail.com', 
  password: 'newpassword123' 
});
