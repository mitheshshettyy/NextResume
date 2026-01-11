# NextResume

**AI-Powered Resume Builder.** Create professional, ATS-friendly resumes in minutes with the power of AI.

## 🚀 Features

- **AI Resume Generation**: specialized AI models to help craft perfect descriptions and summaries.
- **Interactive Editor**: Real-time resume builder with a rich textual interface.
- **Professional Templates**: A variety of distinct, professional templates to choose from.
- **PDF Export**: High-quality PDF export (printable and ATS-ready).
- **User Dashboard**: Manage multiple resumes, track progress, and organize your job search.
- **Secure Authentication**: User accounts managed via Clerk (or Custom Auth).

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ established
- npm / yarn / pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/mitheshshettyy/NextResume.git
    cd NextResume
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root directory and add the necessary environment variables (e.g., Database URL, Auth secrets).

4.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
d:/P/NextResume/
├── app/                # Next.js App Router pages and layouts
│   ├── dashboard/      # User dashboard
│   ├── editor/         # Resume editor interface
│   └── ...
├── components/         # Reusable React components
│   ├── landing/        # Landing page components
│   └── ui/             # Shadcn UI primitives
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
