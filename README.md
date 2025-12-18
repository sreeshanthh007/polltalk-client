# 🗳️ PollTalk Client – Real-Time Polling Application (Frontend)

PollTalk Client is the **frontend application** for the PollTalk platform. It allows users to participate in polls, vote in real time, and view live poll results. The client is designed to be simple, fast, and interactive.

---

## ✨ Features

### 🔹 User Side

* 🗳️ View **static polls** (predefined questions & options)
* ✅ Vote on polls
* 📊 View **live poll results** (real-time updates)
* 🔄 Automatic UI updates using sockets
* 💬 Simple and clean user interface

---

## 🏗️ Tech Stack

* **React**
* **TypeScript**
* **Socket.io Client** (real-time voting & updates)
* **CSS / Tailwind CSS** (styling)

---

## 📁 Project Structure (Simplified)

  ```
  src/
├── components/
│   ├── animations/
│   │   └── TypingIndicatorAnimation.tsx
│   │
│   ├── client/
│   │   ├── chat/
│   │   │   ├── ChatHeader.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   └── Poll.tsx
│   │   │
│   │   └── form/
│   │       └── SubmitPageForm.tsx
│   │
│   ├── pages/
│   │   └── client/
│   │       ├── SubmitPage.tsx
│   │       └── chat/
│   │           └── ChatPage.tsx
│   │
│   └── ui/
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── scroll-area.tsx
│
├── contexts/
│   ├── ChatContext.tsx
│   ├── PollContext.tsx
│   └── SocketContext.tsx
│
├── lib/
│   ├── socket.ts
│   └── utils.ts
│
├── provider/
│   ├── ChatProvider.tsx
│   ├── PollProvider.tsx
│   └── SocketProvider.tsx
│
├── routes/
│   ├── client/
│   │   ├── ClientRoutes.tsx
│   │   └── PublicRoutes.tsx
│   │
│   └── protected/
│       └── ClientProtectedRoutes.tsx
│
├── types/
│   └── socket/
│       └── socket.ts
│
└── main.tsx        # App entry point

  ```

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Environment Variables

Create a `.env` file:

```
VITE_SOCKET_URL=http://localhost:3000
```

### 3️⃣ Run the client

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🔗 API Integration
* Socket.io used for real-time voting and live result updates

---

PollTalk Client focuses on **real-time interaction**, **simplicity**, and **instant feedback**, making it suitable for live polling, surveys, and interactive demos.
