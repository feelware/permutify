function TextBlock({ children, title, maxWidth = 400, style = {} }) {
    return (
      <section style={{ maxWidth: `${maxWidth}px`, ...style }}>
        {title && <h2>{title}</h2>}
        <p>{children}</p>
      </section>
    );
}

export default TextBlock