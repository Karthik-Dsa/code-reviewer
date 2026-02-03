# 🚀 Local Environment Setup Guide

This guide will walk you through setting up the **Jedi Code Council** project on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (version 18.x or higher recommended)
   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - To check if you have Node.js installed:
     ```bash
     node --version
     ```
   - You should see something like `v18.x.x` or `v20.x.x`

2. **npm** (comes with Node.js) or **yarn**
   - npm is included with Node.js
   - To check npm version:
     ```bash
     npm --version
     ```
   - You should see version `8.x` or higher

3. **Git**
   - Download from: [https://git-scm.com/](https://git-scm.com/)
   - To check if Git is installed:
     ```bash
     git --version
     ```

### Required API Keys

- **Groq API Key**: You'll need a free API key from Groq
  - Sign up at: [https://console.groq.com](https://console.groq.com)
  - Navigate to API Keys section and create a new key

## 📥 Installation Steps

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/Karthik-Dsa/code-reviewer.git
cd code-reviewer
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install the following dependencies:
- **next** (v16.1.6+) - React framework
- **react** (v19.0.0+) - UI library
- **react-dom** (v19.0.0+) - React DOM renderer
- **groq-sdk** (v0.3.0+) - Groq AI API client
- **react-syntax-highlighter** (v16.1.0+) - Code syntax highlighting

And these development dependencies:
- **typescript** (v5.3.3+) - TypeScript compiler
- **@types/node** - Node.js type definitions
- **@types/react** - React type definitions
- **@types/react-dom** - React DOM type definitions
- **@types/react-syntax-highlighter** - Syntax highlighter type definitions

**Alternative**: If you prefer using yarn:
```bash
yarn install
```

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` in your favorite text editor and add your Groq API key:
   ```env
   GROQ_API_KEY=your_actual_groq_api_key_here
   ```

   Replace `your_actual_groq_api_key_here` with the API key you got from [https://console.groq.com](https://console.groq.com)

⚠️ **Important**: Never commit your `.env.local` file to Git. It's already included in `.gitignore` to prevent accidental commits.

### Step 4: Start the Development Server

Run the development server:

```bash
npm run dev
```

You should see output similar to:
```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 2.5s
```

### Step 5: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

You should see the Jedi Code Council interface! 🎉

## 🔧 Available Commands

Here are all the commands you can use:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server (requires `npm run build` first) |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Project Structure

```
code-reviewer/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── analyze/       # Code analysis endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── CodeQualityScore.tsx
│   ├── CodeSmellAlert.tsx
│   ├── LearningResourcesList.tsx
│   ├── PerformanceIssuePanel.tsx
│   ├── RefactoringSuggestion.tsx
│   └── SecurityVulnerabilityCard.tsx
├── lib/                   # Utility functions
│   └── groq.ts           # Groq API integration
├── types/                 # TypeScript type definitions
│   └── index.ts
├── .env.example          # Environment variables template
├── .env.local            # Your local environment variables (create this)
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## 🐛 Troubleshooting

### Port Already in Use

If you see an error like `Port 3000 is already in use`, you can:

1. Kill the process using port 3000:
   ```bash
   # On macOS/Linux
   lsof -ti:3000 | xargs kill -9
   
   # On Windows (PowerShell)
   Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
   ```

2. Or run on a different port:
   ```bash
   PORT=3001 npm run dev
   ```

### Module Not Found Errors

If you see "Module not found" errors:

1. Delete `node_modules` and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```

2. Reinstall dependencies:
   ```bash
   npm install
   ```

### API Key Issues

If code analysis fails:

1. Verify your `.env.local` file exists and contains `GROQ_API_KEY`
2. Check that there are no extra spaces or quotes around your API key
3. Ensure your API key is valid at [https://console.groq.com](https://console.groq.com)
4. Restart the development server after changing `.env.local`

### TypeScript Errors

If you see TypeScript compilation errors:

1. Clear the Next.js cache:
   ```bash
   rm -rf .next
   ```

2. Rebuild:
   ```bash
   npm run dev
   ```

### Build Errors

If `npm run build` fails:

1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```

2. Check Node.js version (should be 18.x or higher):
   ```bash
   node --version
   ```

3. Clear cache and rebuild:
   ```bash
   rm -rf .next
   npm run build
   ```

## 📝 Development Tips

### Hot Reload

The development server supports hot reload - any changes you make to the code will automatically refresh in your browser.

### Code Editor Setup

For the best development experience, we recommend:

- **VS Code** with extensions:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense

### Debugging

1. Use browser DevTools (F12) to debug client-side code
2. Use `console.log()` statements in your components
3. Check the terminal for server-side errors

## 🔐 Security Notes

- Never commit your `.env.local` file
- Never share your Groq API key publicly
- Keep your dependencies up to date with `npm update`

## 📚 Next Steps

Once you have the project running:

1. Read the [README.md](./README.md) for feature documentation
2. Check [IMPLEMENTATION.md](./IMPLEMENTATION.md) for technical details
3. Try analyzing some code through the interface
4. Explore the component files in `/components` to understand how they work

## 🆘 Getting Help

If you encounter issues not covered here:

1. Check the [GitHub Issues](https://github.com/Karthik-Dsa/code-reviewer/issues)
2. Review the [Groq Documentation](https://console.groq.com/docs)
3. Review the [Next.js Documentation](https://nextjs.org/docs)

---

**May the Force be with your setup!** ⚔️
