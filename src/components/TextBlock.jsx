function TextBlock({ children, title, maxWidth = 540 }) {
    return (
      <section style={{ maxWidth: `${maxWidth}px` }}>
        {title && <h2>{title}</h2>}
        <p>{children}</p>
      </section>
    );
}

export default TextBlock