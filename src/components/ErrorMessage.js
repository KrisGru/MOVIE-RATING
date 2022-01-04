const Message = ({ show, handleClose, errorText }) => {
  const showHideClassName = show ? "message display-block" : "message display-none";
  return (
    <div className={showHideClassName}>
      <section className="message-main">
        <p>{errorText}</p>
        <p>Try another title!</p>
        <button className="btn" type="button" onClick={handleClose}>CLOSE MESSAGE</button>
      </section>
    </div>
  );
};

export default Message;
