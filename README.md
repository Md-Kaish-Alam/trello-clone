# TaskFlow - Task Management Web Application

TaskFlow is a sophisticated task management web application designed to help users manage their tasks efficiently within a collaborative environment. It offers a range of features from task organization to activity tracking, all wrapped in a user-friendly interface.

**Try it out now: [TaskFlow Live Demo](https://task-managment-app-eta.vercel.app/)**

![landing page](https://github.com/Md-Kaish-Alam/trello-clone/assets/82415398/b1de2e08-8f7e-48a8-9766-252ce5dc1e33)

## Key Features

- **Authentication**: Secure login using [Clerk](https://clerk.dev/docs).
- **Workspaces**: Create organizations/workspaces for collaborative task management.
- **Board Management**: Users can create, rename, and delete boards to organize tasks.
- **Task Customization**: Tasks can be created, described, renamed, reordered, and deleted easily.
- **Activity Logging**: Monitor activities across the entire organization for transparency.
- **Subscription Model**: Utilize [Stripe](https://stripe.com/docs) for handling subscriptions, enabling unlimited boards for organizations.
- **Visual Enhancements**: Utilize the [Unsplash API](https://unsplash.com/developers) for dynamic, beautiful cover images.
- **Modern Tech Stack**: Built with [Next.js](https://nextjs.org/docs), [TailwindCSS](https://tailwindcss.com/docs), [ShadcnUI](https://shadcn.github.io/ui/), [Prisma](https://www.prisma.io/docs/), and more.

## Technologies Used

- **Next.js 14**: A React framework for production, handling server-side rendering and static site generation. [Docs](https://nextjs.org/docs)
- **TailwindCSS**: A utility-first CSS framework for rapid UI development. [Docs](https://tailwindcss.com/docs)
- **ShadcnUI**: A React-based UI library that complements TailwindCSS. [Docs](https://shadcn.github.io/ui/)
- **Clerk**: For secure and easy user authentication. [Docs](https://clerk.dev/docs)
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript. [Docs](https://www.typescriptlang.org/docs/)
- **MySQL & Prisma ORM**: For database management and object-relational mapping. [Prisma Docs](https://www.prisma.io/docs/)

## Application Screenshots

**User Dashboard Page** - Here users can managed there boards, and see the all activiy from the different organization members.

![user dashboard page](https://github.com/Md-Kaish-Alam/trello-clone/assets/82415398/00fd7f35-f30d-44c4-8291-b8a05582e268)

**Organization Activity Section** - Here users can see all the activity from the different members of the specific organization.

![activity page](https://github.com/Md-Kaish-Alam/trello-clone/assets/82415398/22bdccc8-1804-450b-afef-ae1554d7aa01)

**Organization Setting section** - Here users can invite the member , rename the organization name and other organizations settings.

![organization settings page](https://github.com/Md-Kaish-Alam/trello-clone/assets/82415398/7311fc55-a6b2-4780-b19d-c5715557ddd2)

**Within specific board card management** - Users can create, delete, update there card and also drag and drop between different list.

![card management](https://github.com/Md-Kaish-Alam/trello-clone/assets/82415398/ac59bca3-6fb2-47e1-b635-8b71ddeb3acc)

**Card detail** - Here users can see the whole information about the card like description, activity, date of creation etc.

![card detail section](https://github.com/Md-Kaish-Alam/trello-clone/assets/82415398/f996fcf4-dc8c-4729-8c6f-a6fb1a4e15d5)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version recommended)
- A MySQL database
- Clerk account for authentication
- Stripe account for managing subscriptions
- Unsplash API key for fetching cover images

Before you begin, ensure you have the latest version of npm installed:

```bash
npm install npm@latest -g
```

### Installation

- **Clone the repository**

```bash
git clone https://github.com/Md-Kaish-Alam/trello-clone.git
cd taskflow
```

- **Install dependencies**
```bash
npm install
```

- **Set up environment variables**
Create a `.env.local` file at the root of the project directory. Add the following variables:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# database with postgres and prisma client
DATABASE_URL=

# unsplash keys
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

# stripe payment
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

# APP URLS
NEXT_PUBLIC_APP_URL=http://localhost:3000
```  

- **Run Prisma migration**(Optional)
```bash
npx prisma migrate dev
```

- **Start the development server**
```bash
npm run dev
```
This command starts the developement server on `http://localhost:3000/`. Open your browser and navigate to this address to view the application.

## Folder Structure
Below is an overview of the key directories and files within the taskflow project:

```bash
taskflow/
│
├── pages                   # All your pages & API routes
│   ├── _app.tsx            # Custom App component
│   ├── index.tsx           # The homepage
│   └── about.tsx           # An example about page
│
├── app                     # Directory for App Router components
│   ├── layout.tsx          # Main layout used by App Router
│   └── loading.tsx         # Loading component for transitions
│
├── components              # Reusable components
│   ├── NavBar.tsx          # Navigation bar component
│   └── Footer.tsx          # Footer component
│
├── public                  # Static files like images and fonts
│   ├── favicon.ico
│   └── vercel.svg
│
├── styles                  # Global styles
│   └── globals.css
│
├── prisma                  # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations
│
├── lib                     # Library code for shared logic
│   ├── prisma.ts           # Prisma client instantiation
│   └── utils.ts            # Utility functions
│
├── .env.local              # Local environment variables
├── .gitignore              # Standard gitignore file
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project README file


```

## Deployment

Deploying your TaskFlow application can be done with various hosting services, but here we'll focus on deploying with [Vercel](https://vercel.com), the creators of Next.js. Vercel simplifies the deployment process and offers a seamless experience for Next.js applications.

### Steps for Deployment on Vercel:

1. **Sign Up/Login to Vercel**: First, create an account on Vercel if you don't already have one.

2. **Connect Your GitHub Repository**: Once logged in, you can connect your GitHub account and select the repository where your TaskFlow app resides.

3. **Configure Your Project**: After selecting your repository, Vercel will prompt you to configure your project. You should specify the build commands and output directory if they're not automatically detected. For a typical Next.js app, the default settings usually work out of the box.

4. **Environment Variables**: Input the necessary environment variables that your application requires (e.g., `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`, `STRIPE_SECRET_KEY`, `CLERK_FRONTEND_API`, `DATABASE_URL`). Vercel allows you to set these securely in the project settings.

5. **Deploy**: With your project configured, you can proceed with the deployment. Vercel will build your application and provide a URL to access it live on the web.

6. **Continuous Deployment**: Any subsequent pushes to your repository (e.g., to the main branch) will trigger automatic deployments, ensuring your live application is always up to date.

For alternative deployment options and more detailed instructions, refer to the official [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Conclusion

TaskFlow represents a culmination of modern web development practices, designed to streamline task management processes in a visually appealing and user-friendly interface. It leverages a powerful stack comprising Next.js 14, TailwindCSS, Clerk for authentication, and much more, offering robust functionality and a seamless user experience.

As TaskFlow continues to evolve, we aim to incorporate more features and integrations based on user feedback and technological advancements. We welcome contributions from the developer community to help make TaskFlow an even more powerful tool for teams worldwide.

Thank you for considering TaskFlow for your task management needs. We're excited to see how you use it to boost your productivity and manage your projects more effectively.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
