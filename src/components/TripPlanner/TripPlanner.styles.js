export const styles = {
  pageWrapper: {
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: 'transparent'
  },
  mainCard: {
    borderRadius: '24px',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '1000px',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '2.5rem',
    marginTop: '-5vh'
  },
  headerRow: {
    gridColumn: 'span 12',
    marginBottom: '0.5rem',
    borderBottom: '1px solid var(--border-light)',
    paddingBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  headerLeft: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start'
  },
  backBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    border: '1px solid var(--border-light)',
    color: 'var(--text-secondary)',
    transition: 'all 0.2s',
    marginTop: '0.25rem',
    backgroundColor: '#fff'
  },
  phaseTextContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem'
  },
  phaseTitle: {
    fontSize: '0.75rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  },
  phaseLine: {
    width: '12px',
    height: '1px',
    backgroundColor: 'var(--border-light)'
  },
  phaseSubtitle: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--text-tertiary)'
  },
  mainTitle: {
    fontSize: '1.75rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
    margin: 0
  },
  dotsContainer: {
    display: 'flex',
    gap: '4px'
  },
  leftSide: {
    gridColumn: 'span 9',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    borderRight: '1px solid var(--border-light)',
    paddingRight: '2rem'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
  },
  labelStyle: {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-tertiary)',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  inputStyle: {
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid var(--border-light)',
    fontSize: '0.925rem',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    backgroundColor: 'var(--bg-light-gray)',
    color: 'var(--text-primary)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  readOnlyDate: {
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid var(--border-light)',
    fontSize: '0.925rem',
    width: '100%',
    backgroundColor: '#f1f5f9',
    color: 'var(--text-tertiary)',
    fontWeight: '600'
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  sliderDesc: {
    fontSize: '0.8rem',
    color: 'var(--text-tertiary)',
    fontWeight: '500'
  },
  sliderValue: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: 'var(--accent-teal)'
  },
  budgetBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--bg-light-gray)',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    border: '1px solid var(--border-light)'
  },
  currencyLabel: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--text-tertiary)'
  },
  budgetInput: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    width: '80px',
    textAlign: 'right',
    fontWeight: '800',
    fontSize: '1rem',
    color: 'var(--text-primary)'
  },
  rightSide: {
    gridColumn: 'span 3',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    paddingLeft: '1rem'
  },
  travelerTypeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  travelerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  travelerLabel: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  travelerDesc: {
    fontSize: '0.7rem',
    color: 'var(--text-tertiary)',
    fontWeight: '500'
  },
  stepperContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--bg-light-gray)',
    padding: '4px 6px',
    borderRadius: '8px'
  },
  stepperBtn: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    border: '1px solid var(--border-light)',
    backgroundColor: '#fff',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepperValue: {
    fontWeight: '700',
    fontSize: '0.9rem',
    width: '16px',
    textAlign: 'center'
  },
  transportSection: {
    marginTop: 'auto',
    paddingTop: '1.5rem',
    borderTop: '1px solid var(--border-light)'
  },
  transportList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  transportOptSelected: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    border: '1px solid var(--accent-teal)',
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
    color: 'var(--accent-teal)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
    textAlign: 'left'
  },
  transportOptDefault: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    border: '1px solid var(--border-light)',
    backgroundColor: '#fff',
    color: 'var(--text-secondary)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
    textAlign: 'left'
  },
  transportOptText: {
    fontSize: '0.875rem',
    fontWeight: '700'
  },
  transportSelectedRing: {
    marginLeft: 'auto',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '3px solid var(--accent-teal)'
  },
  footer: {
    gridColumn: 'span 12',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  },
  continueBtn: {
    backgroundColor: 'var(--accent-dark)',
    color: '#fff',
    padding: '1.125rem 5rem',
    borderRadius: '16px',
    fontSize: '1.1rem',
    fontWeight: '700',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 15px 30px -10px rgba(15, 23, 42, 0.3)',
    border: 'none',
    cursor: 'pointer'
  }
};
