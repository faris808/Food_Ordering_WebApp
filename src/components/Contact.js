const Contact = () => {
    return (
      <div className="m-auto w-[600px] h-[780px] flex flex-col px-24 py-16 my-8 rounded-xl bg-sky-200">
        <h2 className="text-center font-bold text-3xl mb-3">Contact Us</h2><hr className="mb-11 h-3"></hr>
        <div className="input-field mb-4 text-lg">
          <label>
            Name:
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Full Name"
              className="bg-gray-100 rounded-3xl w-[100%] px-6 py-[10px] outline-none mt-1"
              required
            />
          </label>
        </div>
        <div className="input-field mb-4 text-lg">
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              className="bg-gray-100 rounded-3xl w-[100%] px-6 py-[10px] outline-none mt-1"
              required
            />
          </label>
        </div>
        <div className="input-field mb-4 text-lg">
          <label>
            Phone Number:
            <input
              type="number"
              name="phone number"
              placeholder="Enter Phone Number"
              className="bg-gray-100 rounded-3xl w-[100%] px-6 py-[10px] outline-none mt-1"
              required
            />
          </label>
        </div>
        <div className="input-field mb-4 text-lg">
          <label>
            Message :
            <textarea
              name="message"
              placeholder="Enter Message"
              cols="80"
              rows="5"
              className="bg-gray-100 rounded-3xl w-[100%] px-6 py-[10px] outline-none mt-1"
              required
            >
            </textarea>
          </label>
        </div>
        <div className="m-auto">
          <button className="h-[50px] w-[150px] outline-none border-none text-white bg-red-600 hover:bg-red-700 rounded-3xl transition-all duration-300 ease-in-out text-lg font-semibold mt-3">Submit</button>
        </div>
      </div>
    );
  };
  export default Contact;