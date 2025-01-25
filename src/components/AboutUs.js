import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>

      <div style={styles.content}>
        <p style={styles.introText}>
          At <strong>Sublime Food Suppliers</strong>, we are committed to delivering the <strong>freshest</strong> and <strong>highest-quality fruits</strong> and vegetables, sourced directly from local farms and trusted global partners. Founded in <strong>2020</strong>, our company has quickly established itself as a reliable and sustainable exporter, providing a diverse range of produce to clients across the globe. We pride ourselves on our <strong>strong ethical values</strong>, our passion for quality, and our commitment to serving our customers with excellence.
        </p>

        <p style={styles.paragraph}>
          We believe in building <strong>strong relationships</strong> with local farmers and agricultural communities, supporting their growth while ensuring that our customers receive produce that is not only fresh but also <strong>ethically sourced</strong> and <strong>sustainably grown</strong>. By working closely with these farming communities, we ensure that the highest standards of quality are met while also contributing to the local economy and promoting environmentally-friendly farming practices.
        </p>

        <p style={styles.paragraph}>
          Our mission is simple: to bring you <strong>the best of nature's bounty</strong>. Whether you are a wholesaler, retailer, or distributor, we provide reliable, timely, and safe deliveries of <strong>premium-quality fruits and vegetables</strong>. Each piece of produce is carefully selected, cleaned, packed, and shipped to maintain its <strong>freshness</strong>, flavor, and nutritional value, so you can trust that you’re offering only the finest to your customers.
        </p>

        <p style={styles.paragraph}>
          Since our founding, we have focused on:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Sustainability</strong>: Committed to eco-friendly packaging and sustainable farming methods, we reduce our environmental footprint with every shipment.</li>
          <li style={styles.listItem}><strong>Customer Satisfaction</strong>: We prioritize customer satisfaction above all else. From the moment you place an order to the timely delivery of your goods, we work tirelessly to ensure that your needs are met with care and attention.</li>
          <li style={styles.listItem}><strong>Innovation</strong>: We continually strive to improve our processes, from growing and harvesting to cleaning, packing, and delivery, incorporating the latest industry trends to ensure we provide the best service possible.</li>
          <li style={styles.listItem}><strong>Global Reach</strong>: Though we take pride in supporting local farmers, our global network allows us to provide high-quality produce to businesses worldwide. We are proud to serve customers in <strong>various countries</strong> and expand our reach every year.</li>
        </ul>

        <p style={styles.paragraph}>
          At Sublime Food Suppliers, we don’t just deliver produce; we deliver <strong>freshness, quality, and trust</strong>. We are more than just an exporter — we are a partner you can rely on to bring the finest produce from the farm to your customers, every time.
        </p>

        <p style={styles.paragraph}>
          We are excited to continue growing with our partners, exploring new opportunities, and contributing to a <strong>healthier and more sustainable food system</strong>. Our commitment to quality, sustainability, and customer care remains at the heart of everything we do.
        </p>
      </div>
    </div>
  );
}

// Responsive styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.8',
    padding: '5%',
    margin: '0 auto',
    maxWidth: '90%',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: '20px',
    fontSize: 'calc(1.5rem + 1vw)',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  introText: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'justify',
  },
  content: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.8',
  },
  paragraph: {
    marginBottom: '15px',
    textAlign: 'justify',
    fontSize: 'calc(0.9rem + 0.3vw)',
    color: '#444',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
    fontSize: 'calc(0.8rem + 0.3vw)',
    color: '#555',
  },
  listItem: {
    marginBottom: '10px',
    fontSize: 'calc(0.9rem + 0.2vw)',
    lineHeight: '1.6',
  },
};

export default AboutUs;
