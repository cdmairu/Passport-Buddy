# Passport-Buddy Folder Structure Documentation

## Frontend Structure (frontend/src/)

### Components Directory
The components directory is organized by feature areas, with each subdirectory containing related UI components.

#### /components/common
Contains reusable UI components used throughout the application.
- Header.tsx - Main navigation header with user menu and app branding
- Footer.tsx - Application footer with links and information
- Layout.tsx - Main application layout wrapper that provides consistent structure
- LoadingSpinner.tsx - Loading indicators for async operations
- Button.tsx - Standardized button component with different variants
- Modal.tsx - Reusable modal dialog component for overlays and confirmations

#### /components/feed
Components specifically for displaying and interacting with the social feed.
- FeedPost.tsx - Individual post component displaying user content
- FeedContainer.tsx - Main container that manages feed data and layout
- PostInteractions.tsx - Like buttons, comment counts, and reaction controls
- PostMedia.tsx - Component for displaying images and videos in posts

#### /components/profile
Components for user profile pages and profile-related functionality.
- ProfileHeader.tsx - User profile photo, username, and basic information display
- ProfileGrid.tsx - Grid layout for displaying user's posts and content
- TicketStubs.tsx - Visual representation of user's flight history
- TravelStats.tsx - Statistics display for miles flown, countries visited, etc.
- FriendsList.tsx - Component for displaying and managing user's friends
- PrivacyToggle.tsx - Controls for setting post and profile visibility

#### /components/post
Components for creating and editing posts.
- PostCreator.tsx - Main form for creating new travel posts
- MediaUpload.tsx - File upload component for images and videos
- LocationPicker.tsx - Component for selecting airports and locations
- CaptionInput.tsx - Text input with formatting options for post captions
- PrivacySelector.tsx - Dropdown for choosing post visibility settings

#### /components/map
Components for the interactive map and globe visualization.
- GlobeView.tsx - 3D globe component using Three.js or react-globe.gl
- MapView.tsx - 2D map alternative using Leaflet or Mapbox
- FlightPath.tsx - Component for drawing flight routes between airports
- FlightMarkers.tsx - Airport markers and points of interest on the map
- MapFilters.tsx - Controls for filtering flights by date, continent, or other criteria

#### /components/auth
Components for user authentication and account management.
- LoginForm.tsx - User login form with email/password inputs
- RegisterForm.tsx - User registration form with validation
- AuthGuard.tsx - Higher-order component for protecting authenticated routes

### Pages Directory
Top-level page components that represent different application screens.

#### /pages/explore
- ExplorePage.tsx - Main discover/feed page showing posts from all users
- FriendsOnlyFeed.tsx - Private feed showing only friends' content

#### /pages/profile
- ProfilePage.tsx - User profile view showing posts, stats, and information
- EditProfile.tsx - Profile editing interface for updating user information
- UserSettings.tsx - Account settings and preferences management

#### /pages/create
- CreatePostPage.tsx - Full-page interface for creating new posts
- EditPostPage.tsx - Interface for editing existing posts

#### /pages/map
- MapPage.tsx - Full-screen interactive map/globe view
- FlightHistory.tsx - Dedicated page for visualizing user's complete flight history

#### /pages/auth
- LoginPage.tsx - Login screen layout and form
- RegisterPage.tsx - User registration screen
- ForgotPasswordPage.tsx - Password reset interface

### Services Directory
API integration and external service management.

#### /services/api
Frontend API service modules for communicating with the backend.
- authAPI.ts - Authentication endpoints (login, register, logout)
- postsAPI.ts - Posts CRUD operations and feed data
- flightsAPI.ts - Flight logging and retrieval endpoints
- usersAPI.ts - User profile management and search
- friendsAPI.ts - Friends and follow system endpoints
- statsAPI.ts - Travel statistics and analytics data

#### /services/external
Integration with third-party services and APIs.
- airlabsAPI.ts - Airport data and route information from AirLabs
- openskyAPI.ts - Real-time flight tracking data
- cloudinaryAPI.ts - Media upload and management service

### Hooks Directory
Custom React hooks for reusable stateful logic.
- useAuth.ts - Authentication state management and user session
- usePosts.ts - Posts data fetching, caching, and CRUD operations
- useFlights.ts - Flight data management and statistics
- useStats.ts - Travel statistics calculation and display
- useGeolocation.ts - User location detection and airport suggestions
- useMediaUpload.ts - File upload progress and error handling
- useWebSocket.ts - Real-time updates and notifications

### Context Directory
React Context providers for global state management.
- AuthContext.tsx - User authentication state and session management
- PostsContext.tsx - Posts and feed data shared across components
- ThemeContext.tsx - Application theme and styling preferences
- NotificationContext.tsx - Toast notifications and alert management

### Utils Directory
Utility functions and helper modules.
- dateHelpers.ts - Date formatting, timezone handling, and calculations
- distanceCalculator.ts - Haversine formula implementation for flight distances
- imageHelpers.ts - Image compression, resizing, and validation
- validators.ts - Form validation functions and rules
- constants.ts - Application-wide constants and configuration values
- storage.ts - Local storage and session storage helper functions

### Types Directory
TypeScript type definitions and interfaces.
- index.ts - Main type exports and shared interfaces
- User types, Post types, Flight types, API response types

### Assets Directory
Static assets and media files.

#### /assets/images
Static images, logos, and graphics used in the application.

#### /assets/icons
Icon files and SVG assets for UI elements.

### Styles Directory
Global styles, themes, and CSS modules.
- Global CSS files, theme definitions, and styled-components themes

## Backend Structure (backend/src/)

### Controllers Directory
Request handlers and business logic for API endpoints.
- authController.ts - User registration, login, logout, and session management
- userController.ts - Profile management, user search, and friends system
- postController.ts - Post CRUD operations, media handling, and privacy controls
- flightController.ts - Flight logging, history retrieval, and data validation
- statsController.ts - Travel statistics calculation and aggregation
- feedController.ts - Feed generation, content filtering, and personalization

### Models Directory
Database schemas and data models using Mongoose.
- User.ts - User accounts, profiles, authentication, and friend relationships
- Post.ts - Travel posts with media, captions, location, and privacy settings
- Flight.ts - Flight logs with airports, dates, distances, and calculations
- Comment.ts - Comments on posts with user references and timestamps
- Like.ts - Post likes and reactions with user tracking
- Friendship.ts - Friend relationships and follow connections

### Routes Directory
Express.js route definitions and endpoint organization.
- auth.ts - Authentication routes (POST /auth/login, /auth/register, etc.)
- users.ts - User management routes (GET/PUT /users/:id, friend operations)
- posts.ts - Post management routes (CRUD operations, likes, comments)
- flights.ts - Flight logging routes (CRUD operations, statistics)
- feed.ts - Feed routes (personalized feed, discovery, filtering)
- upload.ts - Media upload routes and file handling

### Middleware Directory
Express.js middleware functions for request processing.
- auth.ts - JWT token verification and user authentication
- validation.ts - Request data validation and sanitization
- upload.ts - File upload handling and storage configuration
- rateLimit.ts - API rate limiting and abuse prevention
- errorHandler.ts - Global error handling and response formatting
- cors.ts - Cross-origin resource sharing configuration

### Services Directory
Business logic and external service integration.

#### /services/external
Integration with third-party APIs and services.
- airlabsService.ts - Airport data fetching and route information
- openskyService.ts - Real-time flight tracking and aircraft data
- cloudinaryService.ts - Media upload, storage, and URL generation
- emailService.ts - Email notifications and user communications

#### /services/calculations
Mathematical calculations and data processing.
- distanceService.ts - Haversine distance calculations between airports
- statsService.ts - Travel statistics aggregation and analytics
- geoService.ts - Geographic data processing, countries, and continents

### Utils Directory
Utility functions and helper modules for the backend.
- hashPassword.ts - Password hashing and verification using bcrypt
- generateToken.ts - JWT token creation and management
- validateInput.ts - Input sanitization and security validation
- logger.ts - Application logging and error tracking
- emailTemplates.ts - HTML email templates for notifications
- constants.ts - API constants, configuration values, and enums

### Types Directory
TypeScript interfaces and type definitions for the backend.
- Database model interfaces, API request/response types, external API types

### Config Directory
Configuration files and environment setup.
- Database connection configuration, external API settings, application constants

## Database Structure
The application uses MongoDB with the following main collections:
- users - User accounts and profiles
- posts - Travel posts and media
- flights - Flight logs and travel data
- comments - Post comments and interactions
- likes - Post likes and reactions
- friendships - User relationship data

## Development Workflow
1. Start with authentication system (users, login, registration)
2. Implement basic post creation and feed functionality
3. Add flight logging and airport integration
4. Implement media upload and storage
5. Build user profiles and social features
6. Add travel statistics and analytics
7. Create interactive map and visualization
8. Polish UI/UX and add advanced features

This structure supports incremental development, where each feature can be built independently while maintaining clear separation of concerns and code organization.