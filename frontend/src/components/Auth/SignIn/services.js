import axios from "axios";

export async function loginUser(username, password, navigate) {
  const payload = { username, password };
  console.log(username);
  console.log(password);
  await axios
    .post("http://localhost:5000/api/users/signin", payload)
    .then((response) => {
      localStorage.setItem("access-token", JSON.stringify(response.data.token));
      const fullName = localStorage.setItem("user", response.data.FullName);
      const userName = localStorage.setItem("username", response.data.username);
      const managerName = localStorage.setItem(
        "managerName",
        response.data.managerName
      );
      // navigate('/dashboard');
    })
    .catch((error) => {
      console.log(error);
      alert("These credentials do not match our records.");
    });
  if (username) {
    //const data1 = await isNotifi(username);
    //const data2 = await isSelectedUser(username);
    const data1 = await axios
      .get(`http://localhost:5000/api/notifications?receiptName=${username}`)
      .then((res) => {
        var notifi = res.data;
        console.log(notifi);
        return notifi;
      })
      .catch((error) => {
        console.log(error);
      });
    const data2 = await axios
      .get(`http://localhost:5000/api/users/selectedUser?username=${username}`)
      .then((res) =>
        res.data.map((results, index) => {
          return results.role_id.name;
        })
      )
      .then((newData) => {
        var isResouce = newData;
        console.log(isResouce);
        localStorage.setItem("roleName", isResouce);
        return isResouce;
      })
      .catch((err) => {
        console.log(err);
      });
    if (data1 > 0 && data2 == "resource") {
      //alert('you can go further');
      navigate("/dashboard");
      alert("You have Notification");
    } else if (data1 == 0 && data2 == "resource") {
      alert("You have no project assigned");
    } else if (data1 >= 0 && data2 == "manager") {
      navigate("/dashboard");
      alert("You have Notification");
    } else {
      console.log("else");
    }
  }
}
