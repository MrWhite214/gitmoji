export default function Card({ gitmoji }) {
  return (
    <>
      <article>
        <div className="header">{gitmoji.emoji}</div>
        <div className="content">
          <h3>{gitmoji.code}</h3>
          <p>{gitmoji.description}</p>
        </div>
      </article>

      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 0;
          background-color: var(--surface-color);
          color: var(--text-color);
          box-shadow: 0px 5px 0px var(--surface-color-dark);
          text-align: center;
          transition: box-shadow 0.3s;
          border-radius: 3px;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .header {
          height: 0;
          padding-top: calc(50% / 16 * 9);
          padding-bottom: calc(50% / 16 * 9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          background-color: rebeccapurple;
          color: white;
        }

        .content {
          flex: 1;
          padding: 24px;
        }

        .content h3 {
          word-break: break-all;
        }
      `}</style>
    </>
  )
}
