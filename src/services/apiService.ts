import { httpClient } from "./httpClient";
import type { Plan } from "../store/useAppStore";

// User API Response Types
export interface UserApiResponse {
  name: string;
  lastName: string;
  birthDay: string;
}

// Plans API Response Types
export interface PlansApiResponse {
  list: Plan[];
}

// API Service for Rimac endpoints
export const apiService = {
  // Get user data by document number
  getUserByDocument: async (docNumber: string): Promise<UserApiResponse> => {
    try {
      const response = await httpClient.get(`/user.json`);
      // Note: docNumber parameter is for future API enhancement
      console.log(`Fetching user data for document: ${docNumber}`);
      return response as unknown as UserApiResponse;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },

  // Get available insurance plans
  getPlans: async (): Promise<PlansApiResponse> => {
    try {
      const response = await httpClient.get(`/plans.json`);
      return response as unknown as PlansApiResponse;
    } catch (error) {
      console.error("Error fetching plans data:", error);
      throw error;
    }
  },
};
