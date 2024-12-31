import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content w-3/4">
          <div className="card bg-base-100 mx-auto w-full shadow-2xl">
            <form className="card-body bg-[#F3F3F3]">
              <div className="flex items-center gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Contact Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Type Here"
                className="textarea textarea-bordered textarea-lg w-full resize-none"
              ></textarea>
              <ReCAPTCHA sitekey={`${import.meta.env.VITE_CAPTCHA_KEY}`} />
                <button className="btn w-1/2 mx-auto mt-3 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-semibold">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
