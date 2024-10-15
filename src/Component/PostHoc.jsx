import React from "react";

const PostHoc = (WrapComponent) => {
  const hello =  (props) => {
    // Define the capitalizeTitle function inside the HOC
    const capitalizeTitle = (data) => {
      return data.map((item) => ({
        ...item,
        // Capitalize the first letter of each title
        title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
      }));
    };

    // Pass the capitalizeTitle function as a prop to the wrapped component
    return <WrapComponent {...props} capitalizeTitle={capitalizeTitle} />;
  };
  return hello;
};

export default PostHoc;