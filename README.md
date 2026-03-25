
# Shopping List UI

An interactive shopping list web application built with **React**, **TypeScript**, **Vite**, and **Ant Design**. Visualizations are provided with **Chart.js**.

## Features

- Add, edit, and remove shopping list items
- Categorize and subcategorize items
- Track quantity, price, and date added
- See computed totals for each item
- Filter and sort items by various fields
- Responsive, modern UI with Ant Design
- Data visualizations with Chart.js

## Tech Stack

- [React](https://react.dev/) (v19)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)
- [Day.js](https://day.js.org/) for date handling

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd shopping-list-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

- `src/components/shopping/` — Shopping list UI components (table, form, charts, etc.)
- `src/types/` — TypeScript types (e.g., ShoppingItem)
- `public/` — Static assets
- `index.html` — Main HTML entry

## License

MIT
