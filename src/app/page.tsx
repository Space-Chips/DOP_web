import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>DEAROLDPHOTOS</div>
        <nav>
          <a href="#" className={styles.btnSmall}>Download App</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Old Photos,<br />
              <span className={styles.highlight}>New Soul.</span>
            </h1>
            <div className={styles.heroText}>
              Restore, colorize, and narrate your family history with state-of-the-art AI.
              Don't let your memories fade to gray.
            </div>
            <a href="#" className={styles.btnLarge}>Start Restoring Now</a>
          </div>

          <div className={`${styles.photoCard} brutalBorder`}>
            <div className={styles.photoPlaceholder}>
              VINTAGE<br />MEMORY
            </div>
            <p className={styles.photoCaption}>BEFORE & AFTER</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2026 DEAROLDPHOTOS. ALL RIGHTS RESERVED.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy-policy" className={styles.footerLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
          </div>
        </div>
      </footer>

      <div className="marquee">
        <div className="marqueeContent">
          AI RESTORATION • COLORIZATION • FAMILY HISTORY • SMART UPSCALING • OPENROUTER INTEGRATED •
          AI RESTORATION • COLORIZATION • FAMILY HISTORY • SMART UPSCALING • OPENROUTER INTEGRATED •
        </div>
      </div>
    </div>
  );
}
