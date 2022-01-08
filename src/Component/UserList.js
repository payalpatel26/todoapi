import React from "react";
import { connect } from "react-redux";

const UserList = (props) => {
  const { user } = props;
  if (!user) {
    return null;
  } else {
    return <div>{user.name}</div>;
  }
};

const mapStateTopProps = (state, ownProps) => {
  return { user: state.userlist.find((u) => u.id === ownProps.Uid) };
};

export default connect(mapStateTopProps)(UserList);
