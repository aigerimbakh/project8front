export const addNotice = (text) => {
   return {
     type: 'ADD_NOTICE',
     payload: text
   };
 };
 
 export const deleteNotice = (index) => {
   return {
     type: 'DELETE_NOTICE',
     payload: index
   };
 };
 
 export const editNotice = (index, text) => {
   return {
     type: 'EDIT_NOTICE',
     payload: { index, text }
   };
 };
 