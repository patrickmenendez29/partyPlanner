import "../styles/footer.css"


function getCopyrightSymbol() {
    return String.fromCharCode(169);
}

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright {getCopyrightSymbol()} 2023 Patrick Menendez</p>
    </div>
  );
}
