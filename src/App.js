import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-world-logo-design-template-d7f49bfb3e84ff71df9c32987a39ded3_screen.jpg?ts=1585497427"
          alt="logo"
        />
        <h2 className="welcome">Business World Welcomes you to the stage</h2>
        <div className="list">
          <li>Home</li>
          <li>Clients</li>
          <li>Gallery</li>
          <li>About us</li>
          <li>Contact Us</li>
        </div>
      </nav>
      <div className="container2">
        <aside className="aside">
          <h3 className="title">
            <h2>CATEGORIES</h2>
          </h3>
          <div className="options">
            <button id="grocery" className="li1">
              Grocery
            </button>
            <br />
            <button id="hotel" className="li2">
              Hotels
            </button>
            <br />
            <button id="sports" className="li3">
              Sports
            </button>
            <br />
            <button id="medicine" className="li4">
              Medicines
            </button>
            <br />
            <button id="autoServices" className="li5">
              Auto Service
            </button>
          </div>
        </aside>
        <main className="main">
          <div className="image">
            <img
              id="post-image"
              className="imag"
              src="https://media.istockphoto.com/id/1157106624/photo/all-your-necessities-stored-in-one-place.jpg?s=612x612&w=0&k=20&c=fANV-CP9N_Dt5lVoKWiZdAch60-2IOeHEm_pnvgk348="
              alt="image"
            />
          </div>
          <div id="post-description" className="description">
          Inside a grocery store, you will find multiple aisles of shelves stocked with a variety of products. The store layout is typically organized by product category, with similar items placed together, making it easy for customers to find what they are looking for. Many grocery stores also have departments such as a bakery, deli, and pharmacy.Grocery stores often provide a range of services such as in-store bakery, butcher, and deli services. Customers can order fresh bread, pastries, and cakes from the bakery, while the butcher department offers a range of fresh meat, poultry, and seafood that can be cut to order. The deli department offers pre-packaged and freshly made sandwiches, salads, and other prepared foods.In addition to food and household products, grocery stores often offer a range of services such as pharmacy services, photo printing, and Western Union money transfers. They may also have loyalty programs that offer customers discounts, coupons, and other incentives for shopping at the store.
          </div>
        </main>
        <footer className="footer">
          <div className="InfoContact">
            <p>
              <img className="address" src="address.png" alt="" />
              <h5>
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </h5>
            </p>
          </div>
          <div className="mail">
            <p>
              <img className="emailMail" src="email-mail.svg" alt="" />
              <h5>example2020@gmail.com</h5>
            </p>
          </div>
          <div className="phone">
            <p>
              <img className="phoneCall" src="phone-call.svg" alt="" />
              <h5>(904) 443-0343</h5>
            </p>
          </div>
          <div className="social">
            <div className="socialLinks">
              <h3>Social Links</h3>
            </div>
            <div className="path3">
              <img src="/Path 3.svg" alt="insta" />
            </div>
            <div className="path2">
              <img src="/Path 2.svg" alt="Twitter" />
            </div>
            <div className="path1">
              <img src="/Path 1.svg" alt="Facebook" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}


const postImage = document.getElementById("post-image");
const groceryPost = document.getElementById("grocery");
const postDescription = document.getElementById("post-description");
if(groceryPost){
groceryPost.addEventListener("click", function () {
  postImage.src =
    "https://media.istockphoto.com/id/1157106624/photo/all-your-necessities-stored-in-one-place.jpg?s=612x612&w=0&k=20&c=fANV-CP9N_Dt5lVoKWiZdAch60-2IOeHEm_pnvgk348=";
  postImage.alt = "Grocery Image";

  postDescription.textContent =
    "Inside a grocery store, you will find multiple aisles of shelves stocked with a variety of products. The store layout is typically organized by product category, with similar items placed together, making it easy for customers to find what they are looking for. Many grocery stores also have departments such as a bakery, deli, and pharmacy.Grocery stores often provide a range of services such as in-store bakery, butcher, and deli services. Customers can order fresh bread, pastries, and cakes from the bakery, while the butcher department offers a range of fresh meat, poultry, and seafood that can be cut to order. The deli department offers pre-packaged and freshly made sandwiches, salads, and other prepared foods.In addition to food and household products, grocery stores often offer a range of services such as pharmacy services, photo printing, and Western Union money transfers. They may also have loyalty programs that offer customers discounts, coupons, and other incentives for shopping at the store.";
})}


const hotelImage = document.getElementById("post-image");
const hotelPost = document.getElementById("hotel");
const hotelDescription = document.getElementById("post-description");
if(hotelPost){
hotelPost.addEventListener("click", function () {
  hotelImage.src =
    "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=";
  hotelImage.alt = "Hotel Image";

  hotelDescription.textContent =
    "Marriott Hotels is a global hospitality brand that operates a chain of upscale hotels and resorts in over 131 countries. The brand is known for providing high-quality service, luxurious amenities, and personalized experiences to guests.A Marriott hotel typically features modern, elegant architecture and interior design, with comfortable and spacious guest rooms and suites equipped with a range of amenities, such as high-speed internet, flat-screen TVs, minibars, and luxurious bedding. Marriott hotels also often offer additional amenities such as fitness centers, spas, swimming pools, and fine-dining restaurants.The brand has a range of hotel categories that cater to different needs and preferences, such as the luxury Marriott Hotels and Resorts, the lifestyle-focused Marriott Autograph Collection, the extended-stay Marriott Residence Inn, and the eco-friendly Marriott Element.Marriott hotels also provide a range of services for guests, such as 24/7 front desk service, concierge assistance, business centers, and meeting and event facilities. They also have loyalty programs, such as Marriott Bonvoy, that offer exclusive benefits, discounts, and rewards to members.";
})}


const sportsImage = document.getElementById("post-image");
const sportsPost = document.getElementById("sports");
const sportsDescription = document.getElementById("post-description");
if(sportsPost){
sportsPost.addEventListener("click", function () {
  sportsImage.src =
    "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11617253510926.jpg";
  sportsImage.alt = "Grocery Image";

  sportsDescription.textContent =
    "In a sports showroom, you will find a variety of products that cater to different sports and activities, such as running, soccer, basketball, tennis, and golf. The store usually features a wide range of sports shoes, including training shoes, running shoes, and cleats. They also have a range of sports apparel, including t-shirts, shorts, pants, and jackets, made with high-quality materials that are designed to be comfortable, durable, and stylish.Puma sports showrooms are often designed with a modern, sleek aesthetic, with large displays and open spaces that allow customers to browse products easily. The store layout is typically organized by sport and gender, with specialized sections for men, women, and children's apparel and footwear.In addition to sportswear, Puma sports showrooms also offer a range of accessories such as bags, hats, socks, and fitness trackers. These products are designed to complement the Puma brand's athletic aesthetic and provide functionality to athletes and fitness enthusiasts.";
})}


const medicineImage = document.getElementById("post-image");
const medicinePost = document.getElementById("medicine");
const medicineDescription = document.getElementById("post-description");
if(medicinePost){
medicinePost.addEventListener("click", function () {
  medicineImage.src =
    "https://omsi.in/wp-content/uploads/2018/04/Online-Medical-Store-Madurai.jpg";
  medicineImage.alt = "Grocery Image";

  medicineDescription.textContent =
    "In an Apollo Medical Store, you will find a range of medications that are prescribed by healthcare professionals, including prescription drugs for various illnesses, medical devices, and health supplements. The store also has a team of licensed pharmacists and trained staff who can provide guidance and advice on the proper use of medications and help answer any questions related to the products.In addition to medications, an Apollo Medical Store typically offers a range of health and wellness products such as vitamins, herbal supplements, and personal care items such as skincare and hygiene products. These products are carefully selected and quality-tested to ensure they meet the high standards of the brand.To provide a seamless customer experience, Apollo Medical Store often utilizes technology solutions to offer online ordering, home delivery, and appointment scheduling for health services. The store also prioritizes customer service, providing personalized attention to every customer and ensuring that their needs and concerns are addressed promptly and efficiently.";
})}


const autoServicesImage = document.getElementById("post-image");
const autoServicesPost = document.getElementById("autoServices");
const autoServicesDescription = document.getElementById("post-description");
if(autoServicesPost){
autoServicesPost.addEventListener("click", function () {
  postImage.src =
    "https://www.shutterstock.com/image-photo/auto-service-business-caucasian-supervisor-260nw-1165603573.jpg";
  autoServicesImage.alt = "Grocery Image";

  autoServicesDescription.textContent =
    "Inside an Audi showroom, you will find a large open space where new and used vehicles are on display, along with interactive displays that provide information about the features and capabilities of different models. Audi showrooms also typically have areas dedicated to customization options such as paint colors, interior materials, and trim levels, allowing customers to create a personalized Audi that meets their specific needs and preferences.In addition to vehicle displays, Audi auto service showrooms also provide a range of services related to car maintenance and repairs. Certified technicians are available to provide routine maintenance services such as oil changes, tire rotations, and brake checks, as well as more complex repairs that require specialized knowledge and tools.Finally, Audi showrooms often provide a range of additional services such as financing options, insurance, and warranty programs. Audi is known for offering exceptional customer service, so you can expect a high level of support and attention throughout the entire car-buying and ownership experience.";
})}

alert("Navigate through 'CATEGORIES'");

export default App;
