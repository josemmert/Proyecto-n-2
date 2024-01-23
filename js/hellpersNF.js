
export function getRoleUserLog(){
    const user= JSON.parse(sessionStorage.getItem('userLog'))
   if(user!==null && user.role==='administrador'){
    
    return 'admin'
}else{
    
    return 'invitado'
}
};

export function SaveRolUser(user){
    sessionStorage.setItem('user', JSON.stringify(user)) 
}


    