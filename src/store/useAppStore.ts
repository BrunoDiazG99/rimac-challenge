import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface UserData {
  name: string;
  lastName: string;
  birthday: string;
  docType: string;
  docNumber: string;
  phoneNumber: string;
  age: number;
}

interface AppState {
  // User data
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
  clearUserData: () => void;

  // Plans data
  plans: Plan[];
  setPlans: (plans: Plan[]) => void;
  clearPlans: () => void;

  // Selected plan
  selectedPlan: string | null;
  selectedPlanPrice: number;
  setSelectedPlan: (planName: string, planPrice: number) => void;

  // Insurance type selection
  selectedInsuranceType: "para-mi" | "para-alguien-mas" | null;
  setSelectedInsuranceType: (
    type: "para-mi" | "para-alguien-mas" | null
  ) => void;

  // Reset all data
  resetStore: () => void;

  // Reset selected plan data
  resetSelectedPlans: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      // User data
      userData: null,
      setUserData: (userData) => set({ userData }),
      clearUserData: () => set({ userData: null }),

      // Plans data
      plans: [],
      setPlans: (plans) => set({ plans }),
      clearPlans: () => set({ plans: [] }),

      // Selected plan
      selectedPlan: null,
      selectedPlanPrice: 0,
      setSelectedPlan: (planName, planPrice) =>
        set({ selectedPlan: planName, selectedPlanPrice: planPrice }),

      // Insurance type selection
      selectedInsuranceType: null,
      setSelectedInsuranceType: (type) => set({ selectedInsuranceType: type }),

      // Reset all data
      resetStore: () =>
        set({
          userData: null,
          plans: [],
          selectedPlan: null,
          selectedInsuranceType: null,
        }),

      resetSelectedPlans: () =>
        set({
          selectedPlan: null,
          selectedInsuranceType: null,
          selectedPlanPrice: 0,
        }),
    }),
    {
      name: "app-store",
    }
  )
);
