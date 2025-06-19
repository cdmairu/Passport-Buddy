# Components Structure

## /common
- Header.tsx - Navigation header
- Footer.tsx - App footer  
- Layout.tsx - Main app layout
- LoadingSpinner.tsx - Loading states
- Button.tsx - Reusable button component
- Modal.tsx - Modal dialogs

## /feed
- FeedPost.tsx - Individual post in feed
- FeedContainer.tsx - Main feed wrapper
- PostInteractions.tsx - Like/comment buttons
- PostMedia.tsx - Image/video display

## /profile  
- ProfileHeader.tsx - Profile photo, username, stats
- ProfileGrid.tsx - Grid of user posts
- TicketStubs.tsx - Flight history display
- TravelStats.tsx - Miles, flights, countries stats
- FriendsList.tsx - User's friends
- PrivacyToggle.tsx - Post visibility controls

## /post
- PostCreator.tsx - New post form
- MediaUpload.tsx - Image/video upload
- LocationPicker.tsx - Airport/location selector
- CaptionInput.tsx - Text input with formatting
- PrivacySelector.tsx - Public/private toggle

## /map
- GlobeView.tsx - 3D globe with Three.js
- MapView.tsx - 2D map alternative
- FlightPath.tsx - Lines between airports
- FlightMarkers.tsx - Airport points
- MapFilters.tsx - Year/continent filters

## /auth
- LoginForm.tsx - User login
- RegisterForm.tsx - User registration
- AuthGuard.tsx - Protected route wrapper
