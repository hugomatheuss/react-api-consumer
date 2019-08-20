export default () => ({
    root: {
      width: '100%',
      background: '#eee',
      position: 'relative',
      overflow: 'hidden',
      flexWrap: 'nowrap',
      minHeight: '100vh',
      zIndex: 1,
      borderTop: '3px solid #666',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      margin: '10px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
})