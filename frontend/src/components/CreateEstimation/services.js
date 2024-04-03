import axios from "axios";
// new estimate
export async function newEstimate(
  title,
  proposalType,
  preparedby,
  clientName,
  date,
  version,
  description,
  proj_status,
  selectedUser
) {
  await axios
    .post(
      `http://localhost:5000/api/projects/?proj_name=${title}&proj_type=${proposalType}&prepared_by=${preparedby}&proposal_for=${clientName}&created_date=${date}&proj_description=${description}&proj_status=${proj_status}&version=${version}&resource_name=${selectedUser}`
    )
    .then((response) => {
      console.log(response.data);
      alert("New project created successfully");
      // navigate('/timeline');
    })
    .catch((error) => {
      console.log(error);
    });
}
// get resources list of login user
// export async function getList(setSelectValues) {

// }

// send notification to resource
export async function sendNotification(
  title,
  options,
  isRead,
  totalcount,
  navigate
) {
  var key = localStorage.getItem("username");
  await axios
    .post(
      `http://localhost:5000/api/notifications/?senderName=${key}&receiptName=${options}&projectName=${title}&read=${isRead}&count=${totalcount}`
    )
    .then((response) => {
      console.log(response.data);
      alert("Notification sent successfully");
      navigate("/dashboard");
    })
    .catch((error) => {
      console.log(error);
    });
}

// axios
//   .get(
//     `http://localhost:5000/api/users/selectedUser/?username=${options}`
//   )
//   .then((response) => {
//     console.log('response' ,response.data);
//     var res = response.data;
//     var result = res.map(function(item) {
//     return item['_id'];
//     });
//     console.log(result);
//     const str = result.toString();
//     console.log(str);

//     setSelectedUser(str);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
