const initialState = {
   notices: []
 };
 
 const noticeReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'ADD_NOTICE':
       return {
         ...state,
         notices: [...state.notices, action.payload]
       };
     case 'DELETE_NOTICE':
       return {
         ...state,
         notices: state.notices.filter((_, index) => index !== action.payload)
       };
     case 'EDIT_NOTICE':
       const { index, text } = action.payload;
       const updatedNotices = [...state.notices];
       updatedNotices[index] = text;
       return {
         ...state,
         notices: updatedNotices
       };
     default:
       return state;
   }
 };
 
 export default noticeReducer;
 