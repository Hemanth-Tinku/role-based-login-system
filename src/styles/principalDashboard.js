export const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: '0 auto',
        padding: '20px',
        maxWidth: '1200px',
    },
    content: {
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '10px',
    },
    subheading: {
        fontSize: '1.5rem',
        color: '#555',
        marginBottom: '20px',
    },
    teacherList: {
        listStyleType: 'none',
        paddingLeft: '0',
    },
    teacherItem: {
        backgroundColor: '#ffffff',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '6px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    teacherInfo: {
        fontSize: '1.2rem',
        color: '#333',
    },
    approved: {
        color: 'green',
        fontWeight: 'bold',
    },
    pending: {
        color: 'orange',
        fontWeight: 'bold',
    },
    approveButton: {
        padding: '6px 12px',
        fontSize: '1rem',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    approveButtonHover: {
        backgroundColor: '#218838',
    },
    noTeachers: {
        fontSize: '1.2rem',
        color: '#888',
        fontStyle: 'italic',
    },
};