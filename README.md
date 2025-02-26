# Vite + React Application in Typescript

**MODIFY THIS README FILE TO YOUR PROJECTS ALIGN WITH YOUR PROJECT**

This is a template for a standard react application.
The applications uses multiple libraries to handle simple tasks like fetching, routing, and queries.

The app uses [React v18](https://18.react.dev/)

- [Tanstack React Router](https://tanstack.com/router/v1)
- [Tanstack React Query](https://tanstack.com/query/v5)
- [Axios](https://axios-http.com/docs/intro)
- [TailwindCSS](https://tailwindcss.com/)

If any of these technologies are unfamiliar to you please check the documentation and get familiar with them.

## Prerequisites

- **Node.js**: Version 16.x or later. Download from [nodejs.org](https://nodejs.org/)
- **npm**: Version 7.x or later (comes with Node.js)

## Getting Started

Follow these instructions to set up and run the project locally.

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

This will start the Vite development server.  
You can view the application in your browser at http://localhost:3000.

## Documentation

### Style guide

Be sure to read the style guide for this project in [here](/).

### Project folder structure

Notice that this might differ from the default vite + react project structure.

    .
    ├── dist        # Compiled files
    ├── docs        # Documentation
    ├── src
    │   ├── assets              # Assets used in the app like images.
    │   ├── components          # Global React components
    │   ├── contexts            # React context folder
    │   ├── hooks               # React hooks folder
    │   ├── layouts             # App layouts
    │   ├── public              # Static assets like images, icons, etc.
    │   ├── routes              # Application routes
    │   ├── utils               # Utility functions
    │   ├── index.css           # Main css file
    │   ├── main.ts             # Entry point of the application
    │   └── routerTree.gen.ts   # Automatically generated file-based routes (! DO NOT TOUCH !)
    ├── index.html          # HTML template
    ├── vite.config.ts      # Vite configuration file
    ├── tailwind.config.js  # Tailwind configuration file
    ├── postcss.config.js   # PostCSS configuration file
    ├── tsr.config.json     # Tanstack router configuration file
    ├── tsconfig.json       # Typescript configuration file
    └── package.json        # Project dependencies and scripts

### Routes structure (File-Based Routing)

We are using [Tanstack Router](https://tanstack.com/router/v1/) to handle the routing in this app.  

    .
    └── src
        └── routes 
            ├── about
            |   ├── components                  # Route based components, used by 'about/index.tsx'
            |   |   └── contacts.tsx
            |   └── index.tsx
            ├── notes
            |   ├── components                  # Route based components, used by 'notes/index.$noteId.tsx' and 'notes/create-note.tsx'
            |   |   ├── create-note-form.tsx
            |   |   └── note.tsx
            │   ├── index.$noteId.tsx
            │   └── create-note.tsx
            ├── index.tsx
            └── __root.tsx

To know more about how the routing is generated go look here: [File-Based Routing](https://tanstack.com/router/v1/docs/framework/react/guide/file-based-routing).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

