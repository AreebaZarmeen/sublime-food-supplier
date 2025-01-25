import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Helmet } from 'react-helmet'; // For SEO optimization

function Home() {
  return (
    <div style={styles.container}>
      {/* SEO Optimization */}
      <Helmet>
        <title>Welcome to Sublime Food Supplier</title>
        <meta name="description" content="Global exporter of fresh fruits and vegetables. Quality and sustainability are our priority." />
      </Helmet>

      <h1 style={styles.heading}>Welcome to Sublime Food Supplier</h1>
      <p style={styles.introText}>
        We are a leading global exporter of fresh fruits and vegetables. Our journey is driven by our commitment to quality, sustainability, and fresh produce that arrives on time, every time. Whether you are a retailer, wholesaler, or distributor, we ensure top-quality produce that meets the demands of your business.
      </p>

      {/* Section 1: Our Fields */}
      <div style={styles.section}>
        <div style={styles.imageWrapper}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/field.jpeg`} 
            alt="Farming Fields" 
            style={styles.image} 
            role="img" 
            aria-label="Farming fields where produce is grown"
          />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Our Fields: Where Quality Begins</h3>
          <p style={styles.text}>
            At Sublime Food Supplier, we own and partner with select farms that cultivate a wide variety of fruits and vegetables. Our fields are carefully managed using sustainable farming practices to ensure that we deliver fresh, high-quality produce to our customers all over the world. We grow crops that meet the highest standards of taste, nutrition, and quality, ensuring you receive the best nature has to offer.
          </p>
          <p style={styles.text}>
            Our farming experts monitor the growth of our crops closely, ensuring the optimal conditions for growth and harvesting. From the soil to the harvest, every step of the process is carefully planned and executed to preserve the freshness and flavor of our produce.
          </p>
        </div>
      </div>

      {/* Section 2: Field Cleaning */}
      <div style={styles.section}>
        <div style={styles.imageWrapper}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/tree.jpeg`} 
            alt="Farming" 
            style={styles.image} 
            role="img" 
            aria-label="Tree farming"
          />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Field Cleaning: Ensuring Purity and Freshness</h3>
          <p style={styles.text}>
            After harvest, our produce undergoes a meticulous cleaning process. We use filtered water to remove any dirt, pesticides, or residues from the fields, ensuring that each item is pristine and safe for consumption. Our washing process guarantees that only the highest quality produce makes it to the next stage.
          </p>
          <p style={styles.text}>
            We take great pride in maintaining cleanliness and hygiene at every step. Our sorting and grading systems further ensure that the best produce is selected for packaging, while any substandard items are removed to maintain product consistency and excellence.
          </p>
        </div>
      </div>

      {/* Section 3: Packaging */}
      <div style={styles.section}>
        <div style={styles.imageWrapper}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/orangepackBox.jpeg`} 
            alt="Packaging Process" 
            style={styles.image} 
            role="img" 
            aria-label="Packing fresh produce"
          />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Packaging: Preserving Freshness for Global Delivery</h3>
          <p style={styles.text}>
            Once cleaned and sorted, our produce is carefully packaged using eco-friendly materials. We employ modern packaging techniques to ensure that each item is securely packed to avoid damage during transport while preserving its freshness.
          </p>
          <p style={styles.text}>
            From recyclable boxes to breathable films, we use only the best packaging materials to ensure that the produce remains fresh throughout the shipping process. Our packaging also meets international standards for safety, hygiene, and sustainability.
          </p>
          <div style={styles.imageGrid}>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/orangeBucket.jpeg`} 
              alt="Packaging Process" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Orange packaging"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/Grapes.jpeg`} 
              alt="Packaging Process" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Grapes packaging"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/potatoPack.jpeg`} 
              alt="Packaging Process" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Potato packaging"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/MangoBox.jpeg`} 
              alt="Packaging Process" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Mango packaging"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Transportation */}
      <div style={styles.section}>
        <div style={styles.imageWrapper}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/container.jpeg`} 
            alt="Transportation" 
            style={styles.image} 
            role="img" 
            aria-label="Shipping container"
          />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Transportation: Timely, Safe Delivery Worldwide</h3>
          <p style={styles.text}>
            Once our produce is packed, it is ready for delivery. We use temperature-controlled containers to ship our produce globally, ensuring that the freshness is maintained throughout the journey. Our logistics team works around the clock to ensure timely deliveries across continents.
          </p>
          <p style={styles.text}>
            Our global network of trusted transport partners ensures that our products are delivered safely, on time, and in the best possible condition. From farms to your doorstep, we make sure that every delivery is seamless and efficient.
          </p>
        </div>
      </div>

      {/* Section 5: Why Choose Us? */}
      <div style={styles.section}>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Why Choose Sublime Food Supplier?</h3>
          <ul style={styles.list}>
            <li><strong>Freshness Guaranteed:</strong> Only the freshest produce, every time.</li>
            <li><strong>Sustainability Focus:</strong> We prioritize eco-friendly practices throughout our entire process.</li>
            <li><strong>Global Reach:</strong> Reliable delivery to any part of the world with fast, efficient logistics.</li>
            <li><strong>Customer-Centered:</strong> We offer tailored solutions to meet your unique business needs and requirements.</li>
            <li><strong>Competitive Pricing:</strong> We offer great value for the best quality produce, helping your business thrive.</li>
          </ul>
        </div>
      </div>

      {/* Section 6: Explore Our Products */}
      <div style={styles.section}>
        <div style={styles.imageWrapper}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/Orange.jpeg`} 
            alt="Fresh Produce" 
            style={styles.image} 
            role="img" 
            aria-label="Fresh oranges"
          />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Explore Our Products</h3>
          <p style={styles.text}>
            Discover the wide variety of fresh fruits and vegetables we offer. We carefully select only the best produce to meet the demands of our clients worldwide. Our range includes seasonal favorites, exotic fruits, and vegetables that are harvested at their peak of ripeness.
          </p>
          <div style={styles.imageGrid}>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/mangoBucket.jpg`} 
              alt="Fresh Produce" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Mangoes"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/rawPotato.jpeg`} 
              alt="Fresh Produce" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Fresh potatoes"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/Grapes.jpeg`} 
              alt="Fresh Produce" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Fresh grapes"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/orangeBucket.jpeg`} 
              alt="Fresh Produce" 
              style={styles.gridImage} 
              role="img" 
              aria-label="Oranges in a bucket"
            />
          </div>
          <p style={styles.text}>
            Whether you need citrus fruits, berries, leafy greens, or root vegetables, we have a product that fits your needs. Each item is packed with nutrients and flavor, ensuring your customers are satisfied with every bite.
          </p>
        </div>
      </div>

      {/* Section 7: Contact Us */}
      <div style={styles.section}>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Get in Touch Today</h3>
          <p style={styles.text}>
            Ready to place an order or need more information? Reach out to us today! Our team is always available to assist with your fresh produce needs and help you find the perfect solutions for your business.
          </p>
          <p style={styles.text}>
            Don't hesitate to <Link to="/ContactUS" style={styles.contactLink}>contact us</Link> for inquiries, quotes, or any other assistance. We're here to help you get the best produce on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: '20px',
  },
  introText: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#555',
  },
  section: {
    display: 'flex',
    marginBottom: '40px',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  imageWrapper: {
    flex: '1',
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  textWrapper: {
    flex: '2',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#333',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
    fontSize: '16px',
    color: '#666',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px',
    marginTop: '20px',
  },
  gridImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  contactLink: {
    color: '#4CAF50',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  contactLinkHover: {
    color: '#3e8e41',
  },
  // Add media queries for responsiveness
  '@media (max-width: 768px)': {
    section: {
      flexDirection: 'column',
    },
    imageWrapper: {
      paddingRight: '0',
      marginBottom: '20px',
      flex: '1 1 100%',
    },
    textWrapper: {
      flex: '1 1 100%',
    },
    imageGrid: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // Adjust grid for mobile
    },
  },
};

export default Home;
