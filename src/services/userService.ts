import { httpClient } from "./httpClient";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Example API service functions
export const userService = {
  // Get all users
  getUsers: async (): Promise<User[]> => {
    return httpClient.get("/users");
  },

  // Get user by ID
  getUserById: async (id: number): Promise<User> => {
    return httpClient.get(`/users/${id}`);
  },

  // Create new user
  createUser: async (userData: Omit<User, "id">): Promise<User> => {
    return httpClient.post("/users", userData);
  },

  // Update user
  updateUser: async (id: number, userData: Partial<User>): Promise<User> => {
    return httpClient.put(`/users/${id}`, userData);
  },

  // Delete user
  deleteUser: async (id: number): Promise<void> => {
    return httpClient.delete(`/users/${id}`);
  },
};
