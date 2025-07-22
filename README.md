# Nodejs Blog REST API

## Description

This repository contains a Node.js blog API .It provides a basic RESTful APIs using Node.js, Express.js, MongoDB, and Cloudinary for media storage.

---

## Table of Contents

- [Installation](#installation)  
- [Usage](#usage)  
- [Features](#features)  
- [Technology](#technology)  
- [Decision](#decision)  

---

## Installation

Install MongoDB and clone the project:

```bash
git clone https://github.com/your-username/BLOG-REST-API.git
cd BLOG-REST-API
npm install

---

## Usage

```bash
npm start
```
---

## Features

- Authentication and Authorization
- Add, Update, Delete blog posts
- Search and filter blogs with pagination
- Sending email
- Flexible and easy-to-use API endpoints
- Scalable and well-documented codebase

---

## Technology

1. Used node.js runtime environment for server side
2. Express.js web framework
3. To validate request, I have used express-validator
4. SendGrid is used to send email

---

## Decision

1. Why nodejs/Express?:  Node. js uses non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.
2. I have used pagination instead of loading all data at a time. Initially, it loads 10 items
3. Authentication, authorization, user verify, recover password are added to this app

---
