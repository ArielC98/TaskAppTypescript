
export interface User {
  email: string;
  password: string;
  username: string;
}

export const mockUsers: User[] = [
  {
    email: 'test@example.com',
    password: '123456',
    username: 'testuser'
  },
  {
    email: 'jane@example.com',
    password: 'password123',
    username: 'jane_doe'
  }
];