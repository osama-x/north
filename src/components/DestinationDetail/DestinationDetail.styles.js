export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    overflowY: 'auto',
    position: 'relative',
    backgroundColor: 'transparent',
    width: '100%',
    padding: '2rem 0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 2rem',
    position: 'relative',
    paddingBottom: '5rem',
  },
  topNav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '1rem'
  },
  iconBtn: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--accent-teal)',
    color: 'var(--text-primary)',
    padding: '0.6rem 1.5rem',
    borderRadius: '99px',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  backBtn: {
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '99px',
    fontSize: '1rem',
    fontWeight: '700',
    border: '2px solid rgba(255, 255, 255, 0.9)',
    marginTop: '2rem'
  },
  headerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    marginBottom: '2.5rem'
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
    textShadow: '0 2px 10px rgba(255,255,255,0.7)',
    lineHeight: '1',
    marginBottom: '0.5rem'
  },
  tagline: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--accent-teal)',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em'
  },
  summaryCard: {
    maxWidth: '800px',
    padding: '1.5rem 2.5rem',
    borderRadius: '24px',
  },
  summaryText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    fontWeight: '500'
  },
  updatesSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem'
  },
  newsPill: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.8rem 2rem',
    borderRadius: '99px',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '900px',
  },
  newsLabel: {
    fontSize: '0.85rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  newsLine: {
    width: '1px',
    height: '24px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  marqueeContainer: {
    flex: 1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative'
  },
  marqueeContent: {
    display: 'inline-block',
    animation: 'marquee 25s linear infinite',
    minWidth: '200%'
  },
  newsItem: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '3rem',
    width: '100%'
  },
  activitiesCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  staysCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  sectionHeader: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    paddingLeft: '0.5rem',
    borderLeft: '4px solid var(--accent-teal)'
  },
  activitiesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  activityCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.25rem',
    borderRadius: '20px',
    gap: '1.25rem'
  },
  activityIcon: {
    fontSize: '2.5rem',
    background: 'rgba(255,255,255,0.6)',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px'
  },
  activityInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  activityTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  activityType: {
    fontSize: '0.85rem',
    color: 'var(--text-tertiary)',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: '0.2rem'
  },
  staysList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  stayCard: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: '24px',
    padding: '1rem'
  },
  stayImagePlaceholder: {
    width: '100%',
    height: '140px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(5,150,105,0.2) 0%, rgba(14,165,233,0.1) 100%)',
    marginBottom: '1rem'
  },
  stayInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  stayTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  stayRating: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    marginTop: '0.2rem'
  },
  stayPrice: {
    fontWeight: '800',
    color: 'var(--accent-teal)',
    fontSize: '1.1rem'
  }
};
