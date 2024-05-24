## Sardar of Physics

A robust course selling platform built with Next.js and TypeScript, designed to connect teachers and students. Teachers can create and manage courses, while students can browse and purchase these courses. The platform utilizes MySQL for database management, Clerk for authentication, Mux for video streaming, and Uploadthing for cloud storage.

### Features

- **User Authentication**: Powered by Clerk, ensuring secure and seamless login and registration for users.
- **Course Management**: Teachers can create, edit, and manage their courses.
- **Video Streaming**: High-quality video streaming provided by Mux.
- **Cloud Storage**: Secure file storage and retrieval with Uploadthing.
- **Database**: MySQL for robust data management.

### Tech Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Next.js API routes
- **Database**: MySQL
- **Authentication**: Clerk
- **Video Streaming**: Mux
- **Cloud Storage**: Uploadthing

### Environment Variables

To run this project, you need to set up the following environment variables:

**`.env.local`**

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
CLERK_API_KEY=<Your Clerk API Key>
NEXT_PUBLIC_MUX_ENV_KEY=<Your Mux Environment Key>
MUX_TOKEN_ID=<Your Mux Token ID>
MUX_TOKEN_SECRET=<Your Mux Token Secret>
UPLOADTHING_API_KEY=<Your Uploadthing API Key>
DATABASE_URL=mysql://<username>:<password>@<host>:<port>/<database_name>
NEXT_PUBLIC_TEACHER_ID=<Teacher User ID>
```

### Local Development

Follow these steps to run the project locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/course-selling-platform.git
    cd course-selling-platform
    ```

2. **Install Dependencies**

    Ensure you have Node.js and npm installed, then run:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env.local` file in the root of your project and add the environment variables listed above.

4. **Run Database Migrations**

    Make sure your MySQL server is running and then run the migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Start the Development Server**

    ```bash
    npm run dev
    ```

    Your application should now be running on [http://localhost:3000](http://localhost:3000).

### Future Plans

This repository will be made private as it is a project for a client. Ensure to clone or fork it while it is still public.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or issues, please contact [Your Name](mailto:your.email@example.com).
