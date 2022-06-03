export const sanitize = (data) => {
    const { clientName, clientEmail, clientPhoneNumber } = data;
    console.log("SANITIZE!!!!!!!!");
    let invalidItems = /[<>/]/g;

    // if (invalidItems.test(name)) {
    //   console.log("MET CONDITION");
    //   setMsg({
    //     text: "Information includes invalid characters < > or /.",
    //     type: "error",
    //   });
    //   console.log("HELLO");
    //   return false;
    // }
    // if (invalidItems.test(username)) {
    //   setMsg({
    //     text: "Information includes invalid characters < > or /.",
    //     type: "error",
    //   });
    //   return false;
    // }
    // if (invalidItems.test(password)) {
    //   setMsg({
    //     text: "Information includes invalid characters < > or /.",
    //     type: "error",
    //   });
    //   return false;
    // }
    return true;
  };