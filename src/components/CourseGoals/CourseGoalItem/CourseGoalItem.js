import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');
  console.log(props);
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    console.log(props.id);
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
