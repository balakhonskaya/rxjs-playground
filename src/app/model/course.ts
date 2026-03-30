export interface Course {
  id: number;
  description: string;
  iconUrl: string;
  courseListIcon: string;
  longDescription: string;
  category: string;
  lessonsCount: number;
}

export interface CoursesResponse {
  payload: { [key: string]: Course };
}
