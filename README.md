# 🌍 World Country App

A full-stack React Native app built using **Expo**, **GraphQL Yoga**, **Prisma**, and **SQLite** that lets you explore and add countries with full backend support.

## 🔧 Technologies Used

### Frontend (React Native + Expo)
- Expo Router
- Apollo Client
- React Native Modal
- FlatList
- TypeScript

### Backend (GraphQL Yoga + Prisma + SQLite)
- GraphQL resolvers
- Prisma ORM for DB access
- SQLite for storage

## 📁 Folder Structure

```

world-country-app/
├── country-list-app/      # Frontend (React Native Expo)
└── country-backend/       # Backend (GraphQL Yoga + Prisma)

````

## 🚀 How to Run

### 1. Clone the Repo
```bash
git clone https://github.com/YOUR_USERNAME/world-country-app.git
cd world-country-app
````

### 2. Start Backend

```bash
cd country-backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

### 3. Start Frontend

```bash
cd ../country-list-app
npm install
npx expo start
```

Make sure to update the Apollo `uri` in frontend to match your backend IP like:

```ts
uri: "http://192.168.1.5:4000/graphql"
```

## 📸 Screenshots

![{26990C81-7FF4-4DF4-97A5-ADE22DDCE4EE}](https://github.com/user-attachments/assets/81c077c7-1e38-4b08-abdd-61e4b4219991)
![{27025A27-963C-4F26-9CC8-1F4D876740CE}](https://github.com/user-attachments/assets/3eee7fe9-a3cb-4a4d-9ab6-d46c4edfcde3)
![{64CFA8C1-27D9-43A0-879B-EAA1528CFC96}](https://github.com/user-attachments/assets/644681f7-fc5c-41cc-8d82-1c128c7801d4)


## 🙌 Credits

Made with ❤️ using GraphQL and React Native.

```

---

Let me know when you're ready — I can help you update the README live if needed.
```
# world-country-app
