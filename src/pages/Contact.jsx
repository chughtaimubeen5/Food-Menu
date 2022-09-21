import React from "react";
import Category from "../components/UI/category/Category";
import ContactDetail from "../components/UI/contactsDetail/ContactsDetail";

const Contact = () => {
  return (
    <div style={{ margin: "0 3rem", textAlign: "center" }}>
      <h2>Contact Details</h2>

      <ContactDetail />

      <iframe
        width="100%"
        height="400"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Plot%20R%20824%2C%20Sector%2016-A%2F4%20Sector%2016%20A%20Buffer%20Zone%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan+(TBD%20Solutions)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      >
        <a href="https://www.maps.ie/coordinates.html">find my location</a>
      </iframe>
    </div>
  );
};

export default Contact;
