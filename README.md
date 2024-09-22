
### Project Name: **Orders & Products Management System**

---

### Project Overview

This is a **Single Page Application (SPA)** built using **Vue 3** with Vue Router and Vuex for state management. The application is designed to help users manage orders and products in an organized and efficient manner. The app also integrates with **Socket.IO** to track the number of active sessions in real-time. The entire project is packaged using **Docker**, making it easy to deploy with all necessary dependencies and configurations.

---

### Features

1. **Order Management:**
   - Add new orders.
   - View existing orders.
   - Delete orders with confirmation.

2. **Product Management:**
   - Add products to each order.
   - Display product prices in multiple currencies (e.g., USD, UAH).
   - Fallback to default prices (`00 USD 00 UAH`) if no prices exist.

3. **Real-time Session Tracking:**
   - Active session count is displayed using **Socket.IO**.
   - Real-time updates for active users connected to the system.

4. **Responsive Design:**
   - The app is fully responsive and works across different screen sizes and devices.

5. **Custom Modal Dialog for Order Deletion:**
   - Styled confirmation dialog for deleting orders.
   - Cancel and confirm delete buttons with custom design.

6. **Date and Time Display:**
   - The current time is displayed and updated every minute using the `Intl.DateTimeFormat` API.

---

### Technologies Used

1. **Frontend:**
   - **Vue 3**: Main frontend framework for building the SPA.
   - **Vue Router**: Handling navigation between different pages.
   - **Vuex**: For global state management, especially for orders and products.
   - **Bootstrap 5**: For basic UI styling and layout.
   - **Vite**: Build tool for faster development and production builds.

2. **Backend:**
   - **Node.js**: Used to run the WebSocket server.
   - **Express**: Basic server setup for WebSocket communication.
   - **Socket.IO**: Real-time bi-directional communication to track active sessions.

3. **Docker:**
   - Containerized the entire application using a Docker image for easy deployment.
   - Handles all dependencies and environment setup.

---

### Installation Instructions

#### 1. Cloning the Project
```bash
git clone https://github.com/yourusername/orders-products.git
cd orders-products
```

#### 2. Running the Project Locally

Make sure you have **Docker** installed.

##### Step 1: Build Docker Image

```bash
docker build -t orders-products-app .
```

##### Step 2: Run Docker Container

```bash
docker run -p 5173:5173 -p 3000:3000 orders-products-app
```

This will expose ports:
- **5173**: For the frontend Vue application.
- **3000**: For the Socket.IO server.

#### 3. Access the Application

Open a browser and go to `http://localhost:5173` to access the frontend.

---

### Usage Instructions

#### Order Management
1. Navigate to the **Orders** section to view the list of all current orders.
2. To delete an order, click the trash icon next to the order, and confirm the action in the modal dialog.

#### Product Management
1. Navigate to the **Products** section to view and manage the products associated with orders.
2. If no price exists for a product, the default value `00 USD 00 UAH` is displayed.

#### Real-time Session Tracking
1. On the top right corner of the page, the current number of active sessions (users) is displayed.
2. This count updates automatically whenever a new user connects or disconnects.

---

### Folder Structure

```bash
orders-products/
│
├── src/
│   ├── components/         # Vue components
│   ├── views/              # Pages for the SPA (Orders, Products)
│   ├── router.js           # Vue Router configuration
│   ├── store/              # Vuex store for managing global state
│   └── main.js             # Main entry file for the Vue app
│
├── server.js               # Express and Socket.IO server for session tracking
├── Dockerfile              # Dockerfile for containerizing the app
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── vite.config.js          # Vite configuration for building the app
```

---

### Scripts

- **Start Development Server:**

```bash
npm run dev
```
This will start both the **Vite dev server** and the **Socket.IO server** in parallel.

- **Build for Production:**

```bash
npm run build
```
This will create an optimized build of the frontend app.

- **Preview Production Build:**

```bash
npm run preview
```
This will preview the production build locally.

---

### Known Issues

- Make sure that both ports `5173` and `3000` are available on your machine to avoid conflicts.
- The application uses CORS policies for Socket.IO, allowing connections from any origin for development purposes.

---

### Future Improvements

- Add product filters and search functionality.
- Implement user authentication and authorization.
- Add error handling for WebSocket connection failures.

---

### License

This project is licensed under the **MIT License**.

