export default function Search({ onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Zoeken..."
        onChange={(e) => onChange(e.target.value)}
      />

      <style jsx>{`
        input[type="text"] {
          width: 100%;
          height: 48px;
          background-color: var(--surface-color);
          border: none;
          border-radius: 3px;
          padding: 8px 16px;
          color: var(--text-color);
          outline: none;

          transition: all 0.5s ease;
          box-shadow: 0px 5px 0px var(--surface-color-dark);
          transform: translateY(-5px);
        }
      `}</style>
    </>
  )
}
