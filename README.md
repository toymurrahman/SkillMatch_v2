# SkillMatch – Freelance Job Bidding Platform

SkillMatch is a full-featured job placement web application that connects clients and freelancers. Clients can post jobs, and freelancers can browse listings and place bids. The platform includes dashboards, bidding workflows, job filtering, and secure authentication.

## 🔗 Live Demo
[Live Website](https://skillmatch-914bf.web.app/) 

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- TanStack React Query
- Firebase (Auth)
- LocalForage

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT (Authentication)

---

## 🚀 Features

- **Job Posting & Management:** Clients can post, edit, and delete job listings.
- **Freelancer Bidding:** Freelancers can browse jobs and submit bids.
- **Search & Filtering:** Find jobs by category, skills, budget, and date.
- **User Dashboards:** Separate views for clients and freelancers to manage activity.
- **Authentication:** Firebase Auth and JWT for secure, role-based access control.

---

## 📁 Folder Structure

```bash
skillmatch/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── hooks/
│   │   └── utils/
│   └── public/
├── server/             # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/

```
📦 Installation
Frontend
```bash

cd client
npm install
npm run dev
```

Backend
```bash

cd server
npm install
npm run dev
```
Make sure to create a .env file in both client/ and server/ directories with your configuration values (Firebase, MongoDB URI, JWT secret, etc.).

🧑‍💻 Author
Developer: Toymur Rahman
Email: rahmantoymur2@gmail.com
Portfolio:https://toymur-portfolio.vercel.app
