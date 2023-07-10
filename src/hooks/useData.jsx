import React from "react";

function useData() {
  const [user, setUser] = React.useState(null);

  //AMBIL DATA DARI LOCAL STORAGE
  React.useEffect(() => {
    const resultUser = localStorage.getItem("useresultU");
    if (resultUser) {
      setUser(JSON.parse(user));
    }
  });

  return { user };
}

export default useData;
