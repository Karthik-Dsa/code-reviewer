# ⚔️ Jedi Code Council - AI-Powered Code Review Tool

<div align="center">

![Star Wars Themed Code Review](https://img.shields.io/badge/May_the_Force-Be_With_Your_Code-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css)

</div>

## 🌟 About

**Jedi Code Council** is an AI-powered code review application built for **The UI Strikes Back** hackathon. It uses Groq's Llama 3.1 70B model to analyze code and dynamically render UI components based on detected issues, using Star Wars theming throughout.

> **Note**: The original specification mentioned Tambo SDK (`@tamboai/react`), but since this package is not publicly available, we've implemented a robust alternative using Groq's JSON mode and React's dynamic component system. See [IMPLEMENTATION.md](./IMPLEMENTATION.md) for details.

## 📸 Screenshots

### Main Interface
![Jedi Code Council Home](https://github.com/user-attachments/assets/413d9039-4c64-4784-8fd3-89c4346eeee6)

### Code Input Example
![Code Input](https://github.com/user-attachments/assets/2c3ca55f-8ba0-4cb3-a169-52c588644478)

### Custom CSS Design (No Tailwind)
![CSS-based Design](https://github.com/user-attachments/assets/6a4171f6-19bf-40f6-afa8-37a9e05901ba)

### ✨ Key Features

- 🔍 **Intelligent Code Analysis**: Detects security vulnerabilities, performance issues, and code smells
- 🎨 **Dynamic UI Components**: AI decides which components to render based on analysis
- ⚡ **Powered by Groq**: Ultra-fast inference with Llama 3.1 70B
- 🎭 **Star Wars Theme**: Immersive Jedi Council chamber experience
- 💬 **Chat Interface**: Conversational code review experience
- 📊 **Code Quality Scoring**: Overall quality metrics with detailed breakdowns
- 🎓 **Learning Resources**: Curated educational materials based on detected issues

## 🚀 Tech Stack

- **Frontend**: React 18+ with Next.js 14 App Router
- **AI**: Groq API with Llama 3.1 70B Versatile
- **Styling**: Custom CSS with CSS Modules (no external CSS frameworks)
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📦 Installation

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/Karthik-Dsa/code-reviewer.git
cd code-reviewer
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
GROQ_API_KEY=your_groq_api_key_here
```

Get your Groq API key from [https://console.groq.com](https://console.groq.com)

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Detailed Setup Guide

For detailed setup instructions, including prerequisites, troubleshooting, and development tips, see [SETUP.md](./SETUP.md).

## 🎯 Usage

1. **Select Language**: Choose from JavaScript, TypeScript, Python, or Java
2. **Paste Code**: Copy and paste your code into the textarea
3. **Review**: Click "Review Code" to submit to the Jedi Council
4. **Analyze**: The AI will analyze your code and render appropriate components
5. **Learn**: Review the findings and educational resources provided

## 🧩 Dynamic Components

The AI dynamically renders these components based on analysis:

### 1. SecurityVulnerabilityCard
- **When**: Security issues detected (SQL injection, XSS, hardcoded secrets)
- **Severity Levels**: Dark Side Threat (high), Sith Influence (medium), Padawan Mistake (low)
- **Shows**: Issue description, affected line, recommended fix

### 2. PerformanceIssuePanel
- **When**: Performance problems found (N+1 queries, unnecessary loops)
- **Shows**: Issue type, location, impact assessment, optimization suggestions

### 3. CodeSmellAlert
- **When**: Code smells detected (long methods, duplicate code, god objects)
- **Shows**: Smell description, explanation, refactoring pattern recommendation

### 4. RefactoringSuggestion
- **When**: Better code structure is possible
- **Shows**: Side-by-side diff view (before/after), explanation, benefits

### 5. LearningResourcesList
- **When**: Educational resources are relevant
- **Shows**: Curated links to documentation, tutorials, articles, videos

### 6. CodeQualityScore
- **Always**: Rendered for every analysis
- **Shows**: Overall score (0-100), detailed metrics (security, performance, maintainability)

## 🎨 Star Wars Theming

The application uses consistent Star Wars terminology:

- **Good Code**: "Strong in the Force you are!"
- **Issues Found**: "Disturbances in the Force detected"
- **High Severity**: "Dark Side Threat" 🔴
- **Medium Severity**: "Sith Influence" 🟡
- **Low Severity**: "Padawan Mistake" 🔵
- **Refactoring**: "Path to the Light Side"
- **Resources**: "Jedi Archives"

Color scheme: Dark background with blue/green lightsaber accents.

## 🔧 Configuration

### Groq Models

The application uses `llama-3.1-70b-versatile` by default. You can modify this in `lib/groq.ts`:

```typescript
model: 'llama-3.1-70b-versatile',  // Best for code analysis
// or
model: 'llama-3.1-8b-instant',     // Faster, good for basic reviews
// or
model: 'mixtral-8x7b-32768',       // Large context window
```

## 📁 Project Structure

```
code-reviewer/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          # API endpoint for code analysis
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page component
├── components/
│   ├── CodeQualityScore.tsx      # Quality scoring component
│   ├── CodeSmellAlert.tsx        # Code smell alerts
│   ├── LearningResourcesList.tsx # Educational resources
│   ├── PerformanceIssuePanel.tsx # Performance issues
│   ├── RefactoringSuggestion.tsx # Refactoring suggestions
│   └── SecurityVulnerabilityCard.tsx # Security vulnerabilities
├── lib/
│   └── groq.ts                   # Groq API integration
├── types/
│   └── index.ts                  # TypeScript type definitions
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Karthik-Dsa/code-reviewer)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add your `GROQ_API_KEY` environment variable
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🏆 Hackathon

Built for **The UI Strikes Back** hackathon - showcasing dynamic UI components powered by AI.

## 🙏 Acknowledgments

- Groq for ultra-fast AI inference
- Star Wars universe for inspiration
- The open-source community

---

<div align="center">

**"Do or do not. There is no try."** - Master Yoda

Made with ⚡ by the Force

</div>