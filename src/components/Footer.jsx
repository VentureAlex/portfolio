export default function Footer({ name }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {name}. Designed with inspiration from{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">
          Brittany Chiang
        </a>
        . Built with React + Vite, deployed on Vercel.
      </p>
    </footer>
  )
}
