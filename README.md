# 🛒 Shopping List UI

An interactive and scalable shopping list application built using **React**, **TypeScript**, **Vite**, and **Ant Design**.
The app demonstrates clean architecture, state management, dynamic filtering, and UI best practices.

---

## 🚀 Features

### 🧾 Core Functionality

* Add new shopping items with:

  * Name, Category, Subcategory
  * Quantity, Price, Date
* Display items in a structured table
* Automatically calculate **Total (Quantity × Price)**

---

### 🔍 Filtering & Search

* Filter by:

  * Category
  * Subcategory (dependent on category)
* Real-time search (applied on top of filters)
* Combined filtering logic (AND condition)

---

### 📊 Data Visualization

* "View Report" opens a **modal popup**
* Displays charts using **Chart.js**
* Chart data is dynamically computed from items

---

### 📈 Table Enhancements

* Sorting (Price, Quantity, Date)
* Dynamic **"New" tag** for recently added items
* Clean and responsive table UI

---

### 🔄 Infinite Scroll (Scalable Logic)

* Implements **infinite scroll logic**
* Works on:

  * Filtered data (not raw data)

---

## 📤 Export Functionality
* Export filtered shopping list data as JSON
* Export reflects currently applied filters
* Enables easy data sharing

---

### 🎨 UI & UX

* Fully responsive layout using Ant Design Grid (`Row`, `Col`)
* Clean alignment and spacing
* Consistent design using Ant Design components

---

### 🌙 Dark Mode

* Global theme toggle using Ant Design `ConfigProvider`
* State managed at root (`App.tsx`)
* Applies across entire application

---

## 🧠 Architecture Highlights

* **Single Source of Truth** → `Home.tsx`
* **Separation of Concerns**

  * UI → Components
  * Logic → Home / utils
* **Derived State Pattern**

  * `filteredItems` computed, not stored
* **Reusable & scalable structure**

---

## 🗂️ Project Structure

```bash
src/
├── components/
│   ├── common/
│   │   ├── AppHeader.tsx
│   │   ├── BarChart.tsx
│   │    
│   └── shopping/
│       ├── ShoppingForm.tsx
│       ├── Filters.tsx
│       ├── ShoppingTable.tsx
│       ├── ReportCharts.tsx
│       ├── PageHeader.tsx
│       └── constants/
│           └── constants.ts
├── pages/
│   └── Home.tsx
├── types/
│   └── shopping.ts
├── utils/
│   └── ShoppingItemUtils.ts
├── mock/
│   ├── data.json
│   └── generator/
│       └── dataGenerator.ts
```

---

## 🛠️ Tech Stack

* ⚛️ React
* 🟦 TypeScript
* ⚡ Vite
* 🎨 Ant Design
* 📊 Chart.js + react-chartjs-2
* 📅 Day.js

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (v16+ recommended)

---

### Installation

```bash
git clone <repo-url>
cd shopping-list-ui
npm install
```

---

### Run Development Server

```bash
npm run dev
```

App will be available at:
👉 http://localhost:5173

---

### Build for Production

```bash
npm run build
```

---

### Linting

```bash
npm run lint
```

---

## 💡 Key Design Decisions

* Form state handled using Ant Design Form (no manual state)
* Filters stored in Home (centralized logic)
* Categories in form → **hardcoded**
* Categories in filters → **derived from data**
* Infinite scroll implemented without backend (UI-level pagination)
* Modal controlled from parent (Home)

---

## 🚀 Future Improvements

* Backend integration (API + pagination)
* Edit/Delete functionality
* Persistent storage (localStorage / DB)
* Advanced analytics in reports

---

## 📄 License

MIT
