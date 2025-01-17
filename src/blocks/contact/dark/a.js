import React from "react";
import PropTypes from  "prop-types";

function DarkContactA(props) {
  return (
    <section className="text-gray-500 bg-gray-900 body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          title="map"
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(.16)" }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-500">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <input
            className={`bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-${props.theme}-500 text-base px-4 py-2 mb-4`}
            placeholder="Email"
            type="email"
          ></input>
          <textarea
            className={`bg-gray-800 text-white rounded border border-gray-700 focus:outline-none h-32 focus:border-${props.theme}-500 text-base px-4 py-2 mb-4 resize-none`}
            placeholder="Message"
          ></textarea>
          <button className={`text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
            Button
          </button>
          <p className="text-xs text-gray-600 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}

DarkContactA.defaultProps = {
  theme: 'indigo'
};

DarkContactA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default DarkContactA;
