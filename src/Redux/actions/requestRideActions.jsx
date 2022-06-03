// import { REQUEST_SUCCESS, REQUEST_ERROR, SERVER_ERROR } from "../types/types";

// import rideRequest from "../../../api/rideRequestAPI";

// export const loginAction = (body, history) => async (dispatch) => {
//   try {
//     let result = await rideRequest(body);
//     const { user, token } = result.data;

//     localStorage.setItem("token", JSON.stringify(token));
//     history.push("/home");

//     await dispatch({
//       type: REQUEST_SUCCESS,
//       payload: {
//         token,
//         user,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     if (error.response.status && error.response.status === 400) {
//       await dispatch({
//         type: REQUEST_ERROR,
//         payload: {
//           type: "RIDE REQUEST Error",
//           status: error.response.status,
//           message: error.response.data.msg,
//           display: true,
//         },
//       });
//     } else {
//       await dispatch({
//         type: SERVER_ERROR,
//         payload: {
//           type: "Server/Network Error",
//           message: "There was an error with the network",
//           status: error.response.status,
//           display: false,
//         },
//       });
//     }
//   }
// };
