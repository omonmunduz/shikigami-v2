This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Upload thing
Created account on uploadthing. got API keys. Use to upload images/files.

## Shadcn UI for component UIs

## Local development Database
## Use MySQL Workbanch. 
Install it.

## Create application in Clerk.dev for auth
Copy API keys
Install clerk themes



## Theming
For dark and light mode themes shadcn ui darkmode was used.
For reference: https://ui.shadcn.com/docs/dark-mode/next

## Database

## Planet Scale Database
Create a planet scale database and install a planet scale cli https://github.com/planetscale/cli

Connect the current device to planet scale 

win + x to run powershell -> pscale auth login

## create a new branch 
                    (the name of the database you created on planet scale)
psacle branch create name branchName

start the above

pscale connect dbName branchName --port 3309  (only after succesfully running this command the app can connect to pscale db)

example mysql://root@127.0.0.1:3309/databaseNameCratedEarlier


Prisma ORM was used.

bunx prisma generate to generate models
bunx prisma db push to update the database
bunx prisma studio to launch prisma studio UI