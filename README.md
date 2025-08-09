# 👕 CRWN Clothing - E-Commerce Store

A modern, responsive e-commerce clothing store built with React, featuring a beautiful UI and full shopping functionality.

![CRWN Clothing](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-11.7.3-orange?style=for-the-badge&logo=firebase)
![Styled Components](https://img.shields.io/badge/Styled--Components-6.1.19-pink?style=for-the-badge&logo=styled-components)

## 🚀 Features

-   **🛍️ Product Categories**: Browse through hats, jackets, sneakers, women's, and men's clothing
-   **🛒 Shopping Cart**: Add items to cart with real-time updates
-   **👤 User Authentication**: Sign up and sign in functionality powered by Firebase
-   **💳 Checkout Process**: Complete purchase flow with cart management
-   **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
-   **🎨 Modern UI**: Beautiful, intuitive interface with smooth animations
-   **🔍 Product Search**: Easy navigation through different product categories

## 🛠️ Tech Stack

-   **Frontend**: React 19.1.0
-   **Routing**: React Router DOM 6.30.0
-   **Styling**: SCSS + Styled Components
-   **Authentication**: Firebase 11.7.3
-   **Testing**: React Testing Library
-   **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd crwn-clothing
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm start
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── button/         # Custom button component
│   ├── cart-dropdown/  # Shopping cart dropdown
│   ├── cart-icon/      # Cart icon with item count
│   ├── cart-item/      # Individual cart item display
│   ├── categories/     # Product categories grid
│   ├── checkout-item/  # Checkout page item display
│   ├── directory-item/ # Category directory items
│   ├── form-input/     # Reusable form input component
│   ├── navigationBar/  # Main navigation bar
│   ├── productCard/    # Product display cards
│   ├── sign-in/        # Sign in form
│   └── sign-up/        # Sign up form
├── routes/             # Page components and routing
│   ├── AuthenticationRoute/  # User authentication pages
│   ├── Category/             # Individual category pages
│   ├── categories-preview/   # Category preview components
│   ├── checkoutRoute/        # Checkout process
│   ├── homeRoute/           # Home page
│   ├── shopRoute/           # Shop page
│   └── trialRoute/          # Trial/calculator page
├── contexts/           # React context providers
├── utilities/          # Helper functions and utilities
├── assets/            # Images and static assets
└── App.js             # Main application component
```

## 🎯 Available Scripts

-   **`npm start`** - Runs the app in development mode
-   **`npm test`** - Launches the test runner in interactive mode
-   **`npm run build`** - Builds the app for production
-   **`npm run eject`** - Ejects from Create React App (one-way operation)

## 🔧 Configuration

### Firebase Setup

To enable authentication and database features, you'll need to configure Firebase:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Add your Firebase configuration to the project
3. Enable Authentication and Firestore in your Firebase project

### Environment Variables

Create a `.env` file in the root directory and add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🎨 Styling

The project uses a combination of SCSS and Styled Components for styling:

-   **SCSS**: For global styles and component-specific styling
-   **Styled Components**: For dynamic, component-level styling
-   **Responsive Design**: Mobile-first approach with breakpoints

## 🧪 Testing

Run tests with:

```bash
npm test
```

The project includes:

-   Unit tests for components
-   Integration tests for user flows
-   Accessibility testing

## 📱 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   Built with [Create React App](https://github.com/facebook/create-react-app)
-   Styled with [Styled Components](https://styled-components.com/)
-   Powered by [Firebase](https://firebase.google.com/)
-   Icons and assets from various sources

---

**Happy Shopping! 🛍️**
