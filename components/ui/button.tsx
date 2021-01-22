import { forwardRef } from "react"

function Button(props, ref) {
  return (
    <>
      <a {...props}>{props.children}</a>
      <style jsx>{`
        a {
          display: block;
          transform: translateY(-5px);
          background-color: var(--surface-color);
          color: var(--text-color);
          box-shadow: 0px 5px 0px var(--surface-color-dark);
          font-weight: 500;
          min-height: 48px;
          min-width: 48px;
          line-height: 48px;
          padding: 0 16px;
          margin-top: 5px;
          cursor: pointer;
          outline: none;
          border: none;
          border-radius: 3px;
          text-align: center;
        }

        a:hover {
          box-shadow: 0px 3px 0px var(--surface-color-dark);
          transform: translateY(-3px);
        }

        a:active {
          box-shadow: 0px 0px 0px var(--surface-color-dark);
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}

// fix "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?"
const Button_ = forwardRef(Button)

export default Button_
