# Task Management App

This is a **Task Management App** built with **React**, **Vite**, and **TypeScript**. The app uses **ShadCN UI** components, **Tailwind CSS** for styling, and leverages **Context API** and **localStorage** for state management and data persistence. The interface allows users to create, view, edit, and delete tasks with options to mark them as important.

![Task Management App Screenshot](./path-to-screenshot.png)
![image](https://github.com/user-attachments/assets/d4adb971-324c-4f39-ad78-c1b9718a88ca)
![image](https://github.com/user-attachments/assets/385809a5-9230-414e-97f7-4e8814aedfda)
![image](https://github.com/user-attachments/assets/33da4bda-4153-4bf4-b518-5330a99d5e6e)
![image](https://github.com/user-attachments/assets/0fe555c7-3d22-41dc-95f4-a56248b51148)
![image](https://github.com/user-attachments/assets/4244372b-a71f-45da-89ec-410165b037be)
![image](https://github.com/user-attachments/assets/fbc03422-811c-40ad-af14-63badf1cf10d)




## Features

- **Task List**: View all tasks, categorized as "Today," "Important," and "All Tasks."
- **Create Tasks**: Add new tasks with a description.
- **Mark Important**: Mark tasks as important with a star icon.
- **Edit & Delete**: Ability to edit task details or delete them.
- **Persistent Data**: All tasks are stored locally in the browser using `localStorage` and retrieved on page reload.


## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **TypeScript**: Typed JavaScript for better development experience.
- **ShadCN UI**: Used for UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Context API**: For global state management.
- **localStorage**: For persisting tasks across sessions.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# task-management-app
