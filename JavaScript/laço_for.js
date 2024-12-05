/**Laço de repetição For
 Laços oferecem um jeito fácile rápido de executar uma ação repetidas vezes. 
 */

/*for (let i = 0; i <10001; i++){
    document.getElementById("teste").innerHTML += i + ", ";
}*/
 var ano = new Date().getFullYear();
for (let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='" + i + ">" + i + "</option>";
}