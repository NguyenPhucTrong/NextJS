const facebook = () => {
  const handleButton = () => {
    alert("me");
  };
  return (
    <div>
      facebook page
      <div>
        <button onClick={() => handleButton()}>Back Home</button>
      </div>
    </div>
  );
};

export default facebook;
