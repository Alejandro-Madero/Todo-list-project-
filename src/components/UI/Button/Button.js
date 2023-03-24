import styles from "./Button.module.css";

const Button = (props) => {
  console.log(styles);
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

//Styled component button:

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: ${(props) => (props?.invalid ? "red" : "#8b005d")};
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   border-radius: 5px;
//   width: 100%;

//   @media (min-width: 768px) {
//     width: 20rem;
//   }

//   &:focus {
//     outline: transparent;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

export default Button;
