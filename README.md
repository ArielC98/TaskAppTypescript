# 📋 Task Manager App

A simple and user-friendly task management web app built with **TypeScript**, **Firebase Authentication**, and **Bootstrap** (with MDBootstrap components). This project demonstrates clean code structure, modular design, and common UX features such as password reset, login persistence, and personalized greetings.

---

## 🚀 Features

- 🔐 **Secure Login with Firebase Authentication**
- ✅ **Add / View / Delete Tasks** (persisted with `localStorage`)
- 📧 **Password Reset** via email
- 📌 **"Remember Me"** checkbox to store and auto-fill the last used email
- 🙋‍♂️ **Personalized Greeting** with the user's name (if set in Firebase)
- 📱 **Responsive design** using Material Design for Bootstrap

---

## 🧱 Technologies Used

- **TypeScript**
- **Firebase Authentication**
- **HTML5 + CSS3**
- **MDBootstrap** (Material Design for Bootstrap)
- **LocalStorage** (for persisting tasks per session)

---


## ✅ How to Use

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Set up Firebase:**

   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project and enable **Email/Password authentication**
   - Replace `firebase.ts` with your project’s credentials

3. **Run locally:**

   - Open `index.html` in your browser using Live Server or any HTTP server

---

## 🔐 Authentication Notes

- Uses `signInWithEmailAndPassword()` from Firebase Auth
- Includes password reset via email prompt
- Stores the logged-in user in `localStorage` to greet them by name
- "Remember Me" functionality saves the last used email (but not the password)

---

---

## 🧑‍💻 Author

**Ariel Calderon**  


---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).