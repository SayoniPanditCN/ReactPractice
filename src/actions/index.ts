export const increment = () => {
     return{
        type: "INCREMENT",
     }
}
export const addlist = (payload: any) => {
   return{
      type: "ADDLIST",
      payload: payload
   }
}