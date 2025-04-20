export function getJsonFromUrlParam(paramName) {
       const params = new URLSearchParams(window.location.search);
       const data = params.get(paramName);
       console.log("Полученные данные для параметра:", paramName, "->", data);

       return data ? JSON.parse(data) : [];
   }