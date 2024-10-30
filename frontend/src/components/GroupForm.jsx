const GroupForm = () => {

    const onSubmit = () => {

    }

    return (
        <div
          className="col-md-6"
          style={{
            backgroundColor: "green",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <h2 className="text-white">Createa new group:</h2>
          <input type="text" id="group-name" />
          <button onClick={onSubmit}>Create</button>
        </div>
      );
}

export default GroupForm;