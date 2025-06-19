export interface User {
  id: string;
  username: string;
  email: string;
  profilePhoto?: string;
  joinDate: Date;
}

export interface Flight {
  id: string;
  user: string;
  airline: string;
  flightNumber: string;
  date: Date;
  origin: string;
  destination: string;
  distance?: number;
}

export interface Post {
  id: string;
  author: User;
  mediaUrl?: string;
  caption: string;
  location?: string;
  flightId?: string;
  privacy: 'public' | 'friends' | 'private';
  createdAt: Date;
}
