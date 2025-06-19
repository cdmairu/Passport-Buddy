export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePhoto?: string;
  friends: string[];
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Flight {
  _id: string;
  user: string;
  airline: string;
  flightNumber: string;
  date: Date;
  origin: string;
  destination: string;
  originCoords?: { lat: number; lng: number };
  destinationCoords?: { lat: number; lng: number };
  distance?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  _id: string;
  author: string;
  mediaUrl?: string;
  caption: string;
  location?: string;
  flightId?: string;
  privacy: 'public' | 'friends' | 'private';
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
}
