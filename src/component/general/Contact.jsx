

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact me!</h1>
      <br/>
      

        {/* copied from https://google-map-generator.com/ but only keep the <iframe> */}
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Atlanta&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      
        <br/>
        <br/>
      <h4>Phone</h4>
      <p>307 000 0000</p>

      <h4>Email</h4>
      <p>lieukhuong@gmail.com</p>

      <h4>Address</h4>
      <p>Atlanta GA USA</p>
    </div>
  );
};

export default Contact;
