export const styles = {
  pageBackground: {
    backgroundColor: 'transparent',
    minHeight: '100vh',
    overflowY: 'auto',
    paddingBottom: '120px',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
  },
  headerArea: {
    textAlign: 'center',
    marginBottom: '3rem',
    marginTop: '1rem',
  },
  titleText: {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    margin: '0 0 0.5rem 0',
    letterSpacing: '-0.02em',
  },
  subtitleText: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  overviewSection: {
    borderRadius: '16px',
    padding: '2rem',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    margin: '0 0 0.5rem 0',
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    marginTop: 0
  },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
  },
  overviewCard: {
    borderRadius: '12px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  overviewCardLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    margin: '0.5rem 0 0.25rem 0',
  },
  overviewCardValue: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  daysList: {
    display: 'flex',
    flexDirection: 'column',
  }
};
