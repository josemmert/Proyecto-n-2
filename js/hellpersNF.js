
export function getRoleUserLog(){
    const user= JSON.parse(sessionStorage.getItem('user'))
   if(user!==null && user.role==='admin'){
    
    return 'admin'
}else{
    
    return 'invitado'
}
};

export function SaveRolUser(user){
    sessionStorage.setItem('user', JSON.stringify(user)) //guarda el user que pase en login
        };


    