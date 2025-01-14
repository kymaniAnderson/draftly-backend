# ✏️ Draftly - AI-Assisted Proposal Generator (Nest.js with Prisma and Neon/Postgres)

### 📄 Description
Draftly is a web application designed to help users create professional proposals with AI assistance. This version uses **Nestjs** and integrates **Prisma** as the ORM as well as Neon to host the postgres server.

### 🚀 Features
- AI-powered proposal generation
- Secure authentication with Auth0
- Customizable templates and content
- Export proposals as PDF
---

### 🛠️ Installation & Setup
#### 1. Clone the Repository
```bash
git clone https://github.com/kymaniAnderson/draftly-backend.git
cd draftly-backend
```

#### 2. Install dependencies
```bash
yarn install
```

#### 3. Configure Neon
- Create a PostgreSQL database on Neon
- Copy the connection string for the next step

#### 4. Configure OpenAI
- Create an OpenAI dev account
- Copy the API for a new application string 

#### 5. Create .env file
Structure:
```bash
DATABASE_URL=<YOUR_DATABASE_URL>
OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
```

#### 6. Run prisma commands
```bash
npx prisma generate
npx prisma migrate dev
```

### ▶️ Run the application
#### 1. Start the development server
```bash 
yarn start:dev
```