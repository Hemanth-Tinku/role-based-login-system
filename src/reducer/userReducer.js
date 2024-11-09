const initialState = {
    principal: { userName: 'principal', password: '1234', role: 'principal' },
    teachers: [],
    students: [],
    currentUser: {}
};

const saveToLocalStorage = (state) => {
    localStorage.setItem('userState', JSON.stringify(state));
};

const getInitialState = () => {
    const cachedUsersData = localStorage.getItem('userState');
    return cachedUsersData ? JSON.parse(cachedUsersData) : initialState;
};


const userReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case 'ADD_TEACHER': {
            const updatedState = {
                ...state,
                teachers: [...state.teachers, { ...action.payload, approved: false }]
            };
            saveToLocalStorage(updatedState);
            return updatedState;
        }

        case 'ADD_STUDENT': {
            const updatedState = {
                ...state,
                students: [...state.students, { ...action.payload }]
            };
            saveToLocalStorage(updatedState);
            return updatedState;
        }

        case 'LOGIN_USER': {
            const updatedState = {
                ...state,
                currentUser: { ...action.payload }
            };
            saveToLocalStorage(updatedState);
            return updatedState;
        }

        case 'APPROVE_TEACHER': {
            const updatedState = {
                ...state,
                teachers: state.teachers.map(teacher =>
                    teacher.userName === action.payload ? { ...teacher, approved: true } : teacher
                )
            };
            saveToLocalStorage(updatedState);
            return updatedState;
        }

        default: {
            return state;
        }
    }
};

export { userReducer, getInitialState };
