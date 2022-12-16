export interface UserState {
  data: User | undefined;
  status: "idle" | "pending" | "succeeded" | "rejected";
  isLoggedIn: boolean;
}

export interface User {
  uid: string | null;
  email: string | null;
  name: string | null;
}
