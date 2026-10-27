# full-stack-car-crm

Car Dealership CRM — Full-stack enterprise platform managing customer leads, vehicle sales, inventory, salesperson targets/commissions, bookings, and after-sales service.

---

## 🏗 System Architecture

- **Frontend**: Vue 3 + Vite + Ant Design Vue + SCSS (located in `./vue`)
- **Backend**: NestJS (TypeScript) + REST API (located in `./backend`)
- **Database**: PostgreSQL 16
- **Containerization**: Docker & Docker Compose

---

## 🚀 Quick Start with Docker Compose

To spin up the entire stack (PostgreSQL, NestJS backend, and Vue frontend):

```bash
# 1. Copy environment variables
cp .env.example .env

# 2. Build and start all services
docker compose up --build -d

# 3. Check running containers
docker compose ps
```

### Services Access
| Service | URL / Port | Description |
| :--- | :--- | :--- |
| **Frontend** | [http://localhost:8080](http://localhost:8080) | Vue 3 Dashboard UI (via Nginx) |
| **Backend API** | [http://localhost:3001/api](http://localhost:3001/api) | NestJS REST API |
| **PostgreSQL** | `localhost:5432` | Relational Database (`car_crm`) |

To stop all services:
```bash
docker compose down
```

---

## 💻 Local Development

### 1. Backend (NestJS)

```bash
cd backend
npm install --legacy-peer-deps
npm run start:dev
```
Backend will be live at `http://localhost:3001/api`.

### 2. Frontend (Vue 3)

```bash
cd vue
npm install
npm run dev
```
Frontend development server will run at `http://localhost:5173`.

---

## 📂 Project Structure

```
full-stack-car-crm/
├── backend/            # NestJS API application & Dockerfile
├── vue/                # Vue 3 Frontend application & Dockerfile
├── docker-compose.yml  # Multi-container orchestration (DB, API, Frontend)
├── .env.example        # Environment variables template
├── .gitignore          # Root gitignore rules
└── README.md           # Documentation
```

---

## 📄 License
UNLICENSED
