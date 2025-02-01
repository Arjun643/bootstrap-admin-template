# React Data Grid Application

This project is a modern React application featuring AG Grid integration for powerful data table functionality with pagination.

## Features

- 📊 AG Grid integration for advanced table features
- 📱 Responsive design
- 🔄 Server-side pagination
- 🎨 Customizable table themes
- 🔍 Advanced filtering and sorting
- 📱 Mobile-friendly interface
- 🔐 Authentication using DummyJSON API

## Tech Stack

- React
- TypeScript
- AG Grid Enterprise
- Yarn package manager

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Demo Credentials

To test the application, use these credentials:

```
Username: emilys
Password: emilyspass
```

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Authentication API

The project uses DummyJSON Auth API for authentication. Example usage:

```typescript
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional
  }),
  credentials: 'include'
})
.then(res => res.json())
.then(data => {
  // Handle authentication response
});
```

## Available Scripts

### `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn lint`

Runs ESLint to check code quality and formatting.

## AG Grid Implementation

This project uses AG Grid Enterprise for table functionality. Key features include:

- Server-side pagination
- Custom cell renderers
- Advanced filtering
- Column resizing and reordering
- Row selection
- Export functionality

Example usage:

```typescript
<AgGridReact
    columnDefs={columnDefs}
    rowData={rowData}
    pagination={true}
    paginationPageSize={10}
    // ... other configurations
/>
```

## Project Structure

```
src/
├── components/
│   └── DataGrid/
├── pages/
├── services/
├── types/
└── utility/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Configuration Files

The project includes several configuration files:

- `.prettierrc.json` - Code formatting rules
- `.lintstagedrc.json` - Pre-commit lint configuration
- `.releaserc` - Release configuration
- `.commitlintrc.json` - Commit message linting rules
- `tsconfig.json` - TypeScript configuration

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

For AG Grid documentation, visit [AG Grid Documentation](https://www.ag-grid.com/documentation).

