import React from 'react';

function Fruits() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>

      {/* Grapes Section */}
      <div id="grapes-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/Grapes.jpeg`} alt="Grapes" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Grapes</h3>
          <p style={styles.description}>
            Our grapes are handpicked from the finest vineyards, ensuring their natural sweetness and juiciness. Each bunch is a testament to quality, bursting with flavor and packed with essential nutrients like fiber, vitamin C, and antioxidants.
            <div style={styles.question}>Why Choose Our Grapes?</div>
            <ul>
              <li style={styles.point}>Freshly harvested and locally sourced.</li>
              <li style={styles.point}>Packed with antioxidants and nutrients.</li>
              <li style={styles.point}>Delivered in eco-friendly, secure packaging to maintain freshness.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Snacking on the go.</li>
              <li style={styles.point}>Adding to fruit salads.</li>
              <li style={styles.point}>Enhancing your baking and cooking.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Potatoes Section */}
      <div id="potato-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/potatoPack.jpeg`} alt="Potatoes" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Potatoes</h3>
          <p style={styles.description}>
            Our potatoes are farm-fresh, carefully cleaned, and packed to preserve their natural earthy flavor. Rich in potassium and vitamin C, these potatoes are perfect for every culinary creation.
            <div style={styles.question}>Why Choose Our Potatoes?</div>
            <ul>
              <li style={styles.point}>Locally grown for superior quality.</li>
              <li style={styles.point}>Packed in durable, breathable packaging to ensure freshness.</li>
              <li style={styles.point}>Versatile for a variety of dishes.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Mashed potatoes and fries.</li>
              <li style={styles.point}>Baking, roasting, and stews.</li>
              <li style={styles.point}>Creating hearty, comfort food dishes.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Mango Section */}
      <div id="mango-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/MangoBox.jpeg`} alt="Mango" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Mango</h3>
          <p style={styles.description}>
            Known as the "King of Fruits," our mangoes are sweet, juicy, and harvested at peak ripeness. They are carefully packed to retain their tropical aroma and vibrant color.
            <div style={styles.question}>Why Choose Our Mangoes?</div>
            <ul>
              <li style={styles.point}>Rich in vitamins and antioxidants.</li>
              <li style={styles.point}>Packed in protective boxes to ensure safe delivery.</li>
              <li style={styles.point}>Naturally ripened for ultimate sweetness.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Fresh snacking.</li>
              <li style={styles.point}>Smoothies and desserts.</li>
              <li style={styles.point}>Fruit salsas and exotic salads.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Orange Section */}
      <div id="orange-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/Orange.jpeg`} alt="Orange" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Orange</h3>
          <p style={styles.description}>
            Our oranges are freshly picked to deliver a burst of tangy sweetness. Packed with vitamin C, they’re perfect for boosting your immune system and brightening your day.
            <div style={styles.question}>Why Choose Our Oranges?</div>
            <ul>
              <li style={styles.point}>Carefully selected for perfect ripeness.</li>
              <li style={styles.point}>Delivered in secure, ventilated packaging to retain freshness.</li>
              <li style={styles.point}>Sweet and juicy with a vibrant flavor.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Juices and smoothies.</li>
              <li style={styles.point}>Fresh snacking.</li>
              <li style={styles.point}>Baking and desserts.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Melon Section */}
      <div id="melons-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/melons.jpg`} alt="Melon" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Melon</h3>
          <p style={styles.description}>
            Our melons are hand-selected for their juicy sweetness and high quality. Hydrating and packed with vitamins A and C, they are the perfect summer treat.
            <div style={styles.question}>Why Choose Our Melons?</div>
            <ul>
              <li style={styles.point}>Freshly sourced from trusted farms.</li>
              <li style={styles.point}>Packed with care to preserve their natural flavor.</li>
              <li style={styles.point}>Guaranteed sweetness and texture.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Refreshing summer snacks.</li>
              <li style={styles.point}>Fruit salads and smoothies.</li>
              <li style={styles.point}>Desserts like sorbets and ice cream.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Apple Section */}
      <div id="apple-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/apples.jpg`} alt="Apple" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Apple</h3>
          <p style={styles.description}>
            Our apples are crisp, juicy, and naturally sweet, perfect for any time of the day. They are rich in fiber and antioxidants, promoting overall health.
            <div style={styles.question}>Why Choose Our Apples?</div>
            <ul>
              <li style={styles.point}>Handpicked for ultimate freshness.</li>
              <li style={styles.point}>Delivered in protective packaging.</li>
              <li style={styles.point}>Naturally sweet with a satisfying crunch.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Snacking and lunchboxes.</li>
              <li style={styles.point}>Baking pies and crumbles.</li>
              <li style={styles.point}>Adding to fresh salads.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Grapefruit Section */}
      <div id="grapefruit-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/grapefruite.jpg`} alt="Grapefruit" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Grapefruit</h3>
          <p style={styles.description}>
            Our grapefruits are juicy and refreshing, offering a perfect balance of sweet and tangy flavors. Packed with vitamin C and antioxidants, they’re great for hydration and immunity.
            <div style={styles.question}>Why Choose Our Grapefruits?</div>
            <ul>
              <li style={styles.point}>Carefully selected for their vibrant flavor.</li>
              <li style={styles.point}>Delivered in secure, eco-friendly packaging.</li>
              <li style={styles.point}>Low in calories and nutrient-rich.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Morning breakfasts.</li>
              <li style={styles.point}>Healthy snacks.</li>
              <li style={styles.point}>Refreshing fruit salads.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Guava Section */}
      <div id="guava-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/guava.jpg`} alt="Guava" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Guava</h3>
          <p style={styles.description}>
            Our guavas are bursting with tropical flavor and packed with nutrients like vitamin C and fiber. Perfect for snacking or using in creative recipes.
            <div style={styles.question}>Why Choose Our Guavas?</div>
            <ul>
              <li style={styles.point}>Harvested at peak ripeness for unmatched taste.</li>
              <li style={styles.point}>Delivered in premium, protective packaging.</li>
              <li style={styles.point}>Naturally sweet with a tropical flair.</li>
            </ul>
            <div style={styles.question}>Perfect for:</div>
            <ul>
              <li style={styles.point}>Fresh snacking.</li>
              <li style={styles.point}>Smoothies and juices.</li>
              <li style={styles.point}>Homemade jams and desserts.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: '30px',
    fontSize: '32px',
    fontWeight: '600',
  },
  section: {
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    transition: 'transform 0.3s ease',
  },
  sectionHover: {
    transform: 'scale(1.05)',
  },
  imageWrapper: {
    flex: 1,
    paddingRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  textWrapper: {
    flex: 2,
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#007bff',
    marginBottom: '15px',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  description: {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.8',
    fontWeight: '400',
    letterSpacing: '0.5px',
    textAlign: 'left',
    padding: '10px 0',
    borderLeft: '5px solid #4CAF50',
    paddingLeft: '15px',
    backgroundColor: '#f0f8ff',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  },
  question: {
    fontWeight: '600',
    fontSize: '20px',
    color: 'black',
    marginTop: '20px',
  },
  point: {
    marginTop: '10px',
    marginLeft: '20px',
    listStyleType: 'circle',
    fontSize: '16px',
    color: '#555',
  },
};

export default Fruits;
