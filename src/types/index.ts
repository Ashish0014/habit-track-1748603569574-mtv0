export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface Habit {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  target_count: number;
  current_count: number;
  start_date: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
}

export interface HabitProgress {
  id: string;
  habit_id: string;
  date: string;
  completed: boolean;
  notes?: string;
}

export type ApiResponse<T> = {
  data: T;
  error: null;
} | {
  data: null;
  error: string;
};