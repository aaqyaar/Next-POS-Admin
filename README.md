# NextPOS (Admin App)

This is a POS for next generation. It's a web app that can be used in any device. It's a PWA (Progressive Web App) that can be installed in any device. It's a SPA (Single Page Application)

## Features

Main features of this app are:

marked with [x] are completed, [] are not completed

- [x] PWA (Progressive Web App)
- [x] Authentication (Login, Logout, Register, Forgot Password, Reset Password)
- [x] Dashboard (Visual Reports)
- [] Products (Items)
- [] Categories (Product Groups)
- [] Customers (Clients)
- [] Suppliers (Vendors)
- [] Sales (Orders)
- [] Purchases (Orders)
- [] Reports (Sales, Purchases, Products, Customers, Suppliers)
- [] Settings
- [] Users Management
- [] Roles Based Access Control
- [] Permissions Management
- [] Profile Management

## Installation

1. Clone this repository

```bash
git clone https://github.com/aaqyaar/Next-POS-Admin/
```

2. Run `yarn install`
3. Run `yarn dev`

## Configuration

1. Copy `.env.example` to `.env`
2. Edit `.env` and set all the required information

```bash
cp .env.example .env
```

## Usage

1. Run `yarn dev`
2. Visit `http://localhost:3000`
3. Login with default credentials (see below)

```ts
const username: string = "abdizamed";
const password: string = "12345678";
```

4. Enjoy!
