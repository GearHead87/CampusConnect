# 📂 gearhead87-campusconnect - Next.js 14 (App Router) Project Structure

## 🔄 Flow of Folder Structure
```
app > components > lib > contexts > store
```

## 📌 Overview
This project follows Next.js 14's App Router structure, ensuring better organization, scalability, and maintainability.

### 📍 Folder Breakdown
- **app/** – Manages routing, layouts, pages, and API endpoints.
- **components/** – Holds reusable UI elements.
- **lib/** – Stores shared utilities, config, constants, and API handlers.
- **contexts/** – Provides global state management.
- **store/** – Manages state using Redux, Zustand, or React Server Actions.

---

## 📦 **Folder Breakdown**

### 🚀 **app/** (Replaces Routes & Pages)
- Contains all route segments as folders (e.g., `app/authentication`, `app/profile`, etc.).
- Each route segment can have:
  - `page.tsx` (renders UI)
  - `layout.tsx` (shared layouts)
  - `loading.tsx` (skeleton loaders)
  - `not-found.tsx` (custom 404 pages)
  
#### 📌 **API Routes**
Located inside `app/api/`. Handles API requests with Next.js server actions.
- `app/api/auth/` - Authentication routes.
- `app/api/bounty/` - Bounty-related endpoints.
- `app/api/company/` - Company data & job postings.
- `app/api/notifications/` - Notifications endpoints.
- `app/api/posts/` - Post CRUD operations.
- `app/api/users/` - User-related actions.

---

### 🛠 **components/**

#### 📌 **Authentication** (`app/authentication/components`)
- `continue-with.tsx` - Social login buttons.
- `quote.tsx` - Motivational quote component.
- `sso.tsx` - Single Sign-On integration.
- `create-account/` - Account creation form components.
- `user-auth-form/` - Login form UI.

#### 📌 **Shared Components** (`app/components`)
- `home/` - Homepage UI components.
- `layout/` - Reusable layout components like `site-header`, `site-footer`.
- `cv/` - Student profile UI components.
- `jobs/` - Job-related UI components.
- `notifications/` - Notification UI.
- `profile/` - Profile page UI.
- `search/` - Search-related UI.

---

### 📚 **lib/** (Library Folder)
- `common/` – Shared utilities and helpers.
- `config/` – Stores app-wide configurations.
- `constants/` – Holds constant values used throughout the app.
- `restAPI/` – API request handlers using Next.js server actions.
- `utils/` – Utility functions.

---

### 🌍 **contexts/**
- Provides global state using React Context API.
- Examples:
  - `AuthContext.tsx` - Manages authentication state.
  - `ThemeContext.tsx` - Controls dark/light mode.

---

### 🏪 **store/**
- Manages global state using Redux, Zustand, or React Server Actions.
- Example stores:
  - `useAuthStore.ts` - Authentication state.
  - `usePostStore.ts` - Post-related state management.

---

## 📝 **Additional Notes**
- The `app/` folder is the root for routing in Next.js 14.
- The `lib/` folder organizes utilities and API-related logic.
- The `contexts/` folder manages React Context API for global state.
- The `store/` folder is used for managing state with Redux, Zustand, or React Server Actions.
- The `components/` folder is split into various subfolders for better structure.

This structure optimizes development for Next.js 14 by keeping logic and UI separate, ensuring cleaner and more scalable code. 🚀

