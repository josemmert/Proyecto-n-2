
export function getRoleUserLog(){
    const user= JSON.parse(sessionStorage.getItem('userLog'))
   if(user!==null && user.role==='administrador'){
    
    return 'admin'
}else if(user!==null && user.role!=='administrador'){

    return 'invitado'
}else {
    
    return null
}
};
