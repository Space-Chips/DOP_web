import Link from "next/link";
import styles from "./privacy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>DEAROLDPHOTOS</Link>
        <nav>
          <Link href="/" className="btnSmall" style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '1rem', 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            textDecoration: 'none', 
            color: 'var(--text)', 
            background: 'var(--accent)', 
            border: '3px solid var(--border)', 
            boxShadow: '4px 4px 0px var(--shadow)',
            display: 'inline-block'
          }}>Back to Home</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.text}>
              At DearOldPhotos, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our application and website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.text}>
              When you use DearOldPhotos, we may collect the following information:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Account information (email address) when you sign up.</li>
              <li className={styles.listItem}>Photos you upload for restoration or colorization.</li>
              <li className={styles.listItem}>Usage data and analytics to improve our services.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Data</h2>
            <p className={styles.text}>
              Your data is used to:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Provide photo restoration and colorization services.</li>
              <li className={styles.listItem}>Authenticate your account via Supabase.</li>
              <li className={styles.listItem}>Process image enhancement requests via OpenRouter.</li>
              <li className={styles.listItem}>Improve the application performance and user experience.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Data Sharing & Services</h2>
            <p className={styles.text}>
              We use trusted third-party services to operate DearOldPhotos:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><strong>Supabase:</strong> For database management and authentication.</li>
              <li className={styles.listItem}><strong>OpenRouter:</strong> For processing images using state-of-the-art AI models.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Your Rights</h2>
            <p className={styles.text}>
              You have the right to access, update, or delete your personal information. If you wish to delete your account and all associated data, you can do so directly within the application settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Contact Us</h2>
            <p className={styles.text}>
              If you have any questions about this Privacy Policy, please contact us through the application or our website.
            </p>
          </section>

          <p className={styles.text} style={{ marginTop: '2rem', fontStyle: 'italic' }}>
            Last updated: February 25, 2026
          </p>
        </div>
      </main>

      <div className="marquee">
        <div className="marqueeContent">
          PRIVACY • SECURITY • YOUR DATA IS YOURS • PRIVACY • SECURITY • YOUR DATA IS YOURS • 
          PRIVACY • SECURITY • YOUR DATA IS YOURS • PRIVACY • SECURITY • YOUR DATA IS YOURS • 
        </div>
      </div>
    </div>
  );
}
