# 🚀 Interactive Dashboard with Next.js, Tailwind, Framer Motion & Three.js

This project is a **modern interactive dashboard** built with  
[Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), and [Three.js](https://threejs.org/).  
It fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and provides a clean UI with animations, search, pagination, and 3D elements.

---

## ✨ Features

- 📋 **User List Page** – Fetch and display users in a table  
- 🔍 **Search Feature** – Filter users by name or email  
- 📄 **Pagination** – Limit users per page with navigation controls  
- 👤 **User Details Page** – Click a user to view full details (company, address, website, etc.)  
- 🎨 **Responsive Design** – Works seamlessly on mobile and desktop  
- ⚡ **Animations** – Smooth transitions using **Framer Motion**  
- 🧊 **3D Elements** – Interactive 3D box rendered using **Three.js + React Three Fiber**  
- 🌐 **API Integration** – Uses `axios` to fetch data from JSONPlaceholder  

---

## 🛠️ Tech Stack

- **Frontend Framework:** [Next.js 13+ (App Router)](https://nextjs.org/)  
- **UI Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **Animations:** [Framer Motion](https://www.framer.com/motion/)  
- **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)  
- **HTTP Client:** [Axios](https://axios-http.com/)  

---

## 📂 Project Structure

src/
├── app/ /n
- │ ├── users/ # User list & search page
- │ ├── users/[id]/ # User details dynamic route
-- │ └── layout.js # Root layout
-- ├── components/
-- │ ├── ThreeScene.jsx # 3D animated box (Three.js)
-- │ ├── UserRow.jsx # User row for table
-- │ ├── SearchBar.jsx # Search input
-- │ ├── Pagination.jsx # Pagination controls
-- │ └── Footer.jsx # Professional footer
-- └── styles/
-- └── globals.css # Tailwind setup

---

## 🚦 Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/dashboard-app.git
cd dashboard-app

### Install Dependencies
npm install
# or
yarn install
