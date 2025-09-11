import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  avatar?: string
  emailVerified: boolean
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null

  // Actions
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  setLoading: (loading: boolean) => void
  logout: () => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      token: null,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setToken: (token) => set({ token }),

      setLoading: (isLoading) => set({ isLoading }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          token: null,
        }),

      clearAuth: () =>
        set({
          user: null,
          isAuthenticated: false,
          token: null,
          isLoading: false,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
