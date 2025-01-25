import React from 'react';

function Fruits() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>

      {/* Transport by Road */}
      <div id="road-transport" style={styles.categoryContainer}>
        <h2 style={styles.categoryHeading}>Transport by Road</h2>
        
        {/* Banana Section */}
        <div id="banana-section" style={styles.section}>
          <div style={styles.imageWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/banana.jpg`} alt="Banana" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.sectionTitle}>Banana</h3>
            <div style={styles.description}>
              <p>
               
Our bananas are not only deliciously sweet and creamy but also packed with a wide array of essential nutrients that contribute to overall health and well-being. Rich in potassium, they help support heart health and maintain proper muscle and nerve function. In addition to potassium, they are an excellent source of vitamin C, which boosts the immune system, promotes healthy skin, and aids in the absorption of iron. Bananas are also high in dietary fiber, which promotes digestive health and helps regulate blood sugar levels, making them a great option for those looking to manage their weight or improve digestion. Whether enjoyed as a quick snack or added to smoothies, oatmeal, or baked goods, bananas provide an energy-boosting option that satisfies both your taste buds and your nutritional needs. Perfect for an on-the-go snack, they offer a natural, wholesome way to fuel your day.
              </p>
              <div style={styles.question}>Why Choose Our Bananas?</div>
              <ul>
                <li style={styles.point}>Harvested at peak ripeness for natural sweetness.</li>
                <li style={styles.point}>Perfect for snacking, smoothies, and baking.</li>
                <li style={styles.point}>Rich in essential nutrients for daily energy.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Transport by Air */}
      <div id="air-transport" style={styles.categoryContainer}>
        <h2 style={styles.categoryHeading}>Transport by Air</h2>
        
        {/* LadyFinger (Okra) Section */}
        <div id="LadyFinger-section" style={styles.section}>
          <div style={styles.imageWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/lady finger.jpg`} alt="Okra" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.sectionTitle}>LadyFinger (Okra)</h3>
            <div style={styles.description}>
              <p>
              Our ladyfinger (okra) is a fresh and tender vegetable, bursting with flavor and versatility, making it an ideal ingredient for a wide variety of dishes. Known for its smooth, crisp texture and mild taste, it adds a unique touch to stews, curries, and salads. Packed with fiber, it supports digestive health and helps regulate cholesterol levels. Its rich vitamin C content boosts the immune system, promotes healthy skin, and helps the body absorb iron more effectively. In addition, ladyfinger is a great source of antioxidants, which help combat free radicals in the body, promoting overall health and reducing inflammation. Whether sautéed, grilled, or used in soups, our ladyfinger is a nutritious and delicious way to elevate your meals with its delightful flavor and health benefits.
              </p>
              <div style={styles.question}>Why Choose Our Ladyfinger (Okra)?</div>
              <ul>
                <li style={styles.point}>Handpicked for tenderness and quality.</li>
                <li style={styles.point}>Rich in nutrients and perfect for curries.</li>
                <li style={styles.point}>Fresh and full of natural flavor.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bitter Gourd (Karela) Section */}
        <div id="karela-section" style={styles.section}>
          <div style={styles.imageWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/karela.jpg`} alt="Karela" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.sectionTitle}>Bitter Gourd (Karela)</h3>
            <div style={styles.description}>
              <p>
              Our bitter gourd (karela) is a nutrient-dense powerhouse, perfect for health-conscious individuals looking to enhance their diet with a natural, low-calorie option. Known for its distinct bitter flavor, bitter gourd is packed with a wide range of vitamins and minerals, including vitamin C, vitamin A, iron, and folate, all of which play crucial roles in maintaining a healthy immune system, improving vision, and supporting overall well-being. Its high antioxidant content helps combat oxidative stress, reduce inflammation, and promote better skin health. Additionally, bitter gourd is known for its blood sugar-regulating properties, making it a great choice for individuals with diabetes or those looking to maintain balanced blood glucose levels. With its detoxifying effects and ability to promote healthy digestion, our bitter gourd is an excellent addition to any diet, whether enjoyed in stir-fries, curries, or juices.</p>
              <div style={styles.question}>Why Choose Our Bitter Gourd (Karela)?</div>
              <ul>
                <li style={styles.point}>Farm-fresh and packed with nutrients.</li>
                <li style={styles.point}>Perfect for healthy dishes and medicinal use.</li>
                <li style={styles.point}>Carefully selected for premium quality.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coriander (Dhania) Section */}
        <div id="dhania-section" style={styles.section}>
          <div style={styles.imageWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/dhania.jpg`} alt="Dhania" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.sectionTitle}>Coriander (Dhania)</h3>
            <div style={styles.description}>
              <p>
              Our coriander (dhania) is aromatic, fresh, and vibrant, making it the perfect herb for garnishing and elevating the flavor profile of any dish. Its distinct, refreshing fragrance adds a burst of freshness to curries, salads, soups, and even smoothies. Rich in essential nutrients, coriander is packed with vitamins A, C, and K, which support immune health, promote healthy skin, and aid in bone health. It is also a powerhouse of antioxidants, which help protect the body from oxidative stress and reduce inflammation. Beyond its flavor-enhancing properties, coriander is known for its digestive benefits, helping to soothe the stomach and promote healthy digestion. Whether used as a garnish or as a key ingredient, our coriander adds a deliciously zesty touch and a wealth of health benefits to your meals.</p>
              <div style={styles.question}>Why Choose Our Coriander (Dhania)?</div>
              <ul>
                <li style={styles.point}>Freshly harvested for vibrant aroma.</li>
                <li style={styles.point}>Adds a burst of flavor to any dish.</li>
                <li style={styles.point}>Carefully packaged to preserve freshness.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Peas (Mutter) Section */}
        <div id="peas-section" style={styles.section}>
          <div style={styles.imageWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/peas.jpg`} alt="Peas" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.sectionTitle}>Peas (Mutter)</h3>
            <div style={styles.description}>
              <p>
              Our peas (mutter) are delightfully sweet, tender, and bursting with freshness, making them a versatile and nutritious addition to a wide range of dishes. Whether used in savory curries, hearty soups, vibrant salads, or flavorful rice dishes, peas bring a natural sweetness and soft texture that complement any recipe. They are an excellent source of essential nutrients, including vitamins A, C, and K, which support eye health, boost immunity, and promote healthy bones. Rich in plant-based protein and dietary fiber, peas also aid in digestion, help regulate blood sugar levels, and keep you feeling full and satisfied. Additionally, they contain antioxidants and phytonutrients that support overall health and well-being. Perfect for enhancing both flavor and nutrition, our peas are a must-have ingredient for creating wholesome and delicious meals.              </p>
              <div style={styles.question}>Why Choose Our Peas (Mutter)?</div>
              <ul>
                <li style={styles.point}>Freshly picked for maximum sweetness.</li>
                <li style={styles.point}>Great for curries, soups, and salads.</li>
                <li style={styles.point}>Rich in protein and dietary fiber.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Transport by Sea */}
      <div id="sea-transport" style={styles.categoryContainer}>
        <h2 style={styles.categoryHeading}>Transport by Sea</h2>

        {/* Onion Section */}
        <div id="onions-section" style={styles.section}>
          <div style={styles.imageWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/onion.jpg`} alt="Onions" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.sectionTitle}>Onions</h3>
            <div style={styles.description}>
              <p>
              Our onions are flavorful, aromatic, and incredibly versatile, making them a staple ingredient in kitchens around the world. Their bold, savory taste enhances the flavor of countless dishes, from soups and stews to stir-fries, salads, and marinades. Whether sautéed to golden perfection, caramelized for a touch of sweetness, or used raw for a sharp, crisp bite, onions add depth and complexity to any recipe. Beyond their culinary appeal, onions are rich in antioxidants, including quercetin, which helps reduce inflammation and supports heart health. They are also packed with essential nutrients like vitamin C, vitamin B6, and manganese, which contribute to a strong immune system, healthy metabolism, and overall well-being. With their unique blend of flavor and health benefits, our onions are an indispensable addition to your pantry, perfect for creating both everyday meals and gourmet delights.              </p>
              <div style={styles.question}>Why Choose Our Onions?</div>
              <ul>
                <li style={styles.point}>Carefully sourced for consistent quality.</li>
                <li style={styles.point}>Long shelf life and optimal freshness.</li>
                <li style={styles.point}>Ideal for cooking, salads, and garnishing.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Potatoes Section */}
        <div id="potato-section" style={styles.section}>
          <div style={styles.imageWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/potato.jpg`} alt="Potatoes" style={styles.image} />
          </div>
          <div style={styles.textWrapper}>
            <h3 style={styles.sectionTitle}>Potatoes</h3>
            <p style={styles.description}>
            Our potatoes are farm-fresh and carefully selected to ensure the highest quality, delivering a natural, earthy flavor that enhances every dish. Meticulously cleaned and packed to preserve their freshness, these versatile potatoes are a must-have ingredient for countless culinary creations. Whether mashed, roasted, fried, or used in soups, stews, or salads, their creamy texture and rich taste make them a favorite in kitchens worldwide. In addition to their delicious flavor, our potatoes are a nutritional powerhouse, packed with potassium to support heart health and vitamin C to boost immunity and promote healthy skin. They are also a good source of dietary fiber, aiding in digestion and helping you feel fuller for longer. Perfect for everything from hearty meals to quick snacks, our potatoes are a wholesome and delicious addition to any recipe.            </p>
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
            Our oranges are freshly picked at peak ripeness to ensure a vibrant burst of tangy sweetness in every bite. Juicy and full of flavor, they are the perfect balance of sweetness and citrusy zest, making them a refreshing snack or a delightful addition to your favorite recipes. Packed with vitamin C, our oranges are a natural way to strengthen your immune system, promote healthy skin, and boost your energy levels. In addition to vitamin C, they are rich in dietary fiber, antioxidants, and essential nutrients like potassium, which support heart health and aid in maintaining hydration. Whether enjoyed as a snack, juiced for a refreshing drink, or used to enhance desserts and salads, our oranges bring a splash of sunshine and nutrition to your day.            </p>
            <div style={styles.question}>Why Choose Our Oranges?</div>
            <ul>
              <li style={styles.point}>Carefully selected for perfect ripeness.</li>
              <li style={styles.point}>Rich in antioxidants, ideal for juicing.</li>
              <li style={styles.point}>Perfect for snacking or adding to recipes.</li>
            </ul>
            <div style={styles.question}>Benefits:</div>
            <ul>
              <li style={styles.point}>High in Vitamin C for immune support.</li>
              <li style={styles.point}>Rich in antioxidants and dietary fiber.</li>
              <li style={styles.point}>Perfect for juicing or snacking.</li>
            </ul>
          </div>
        </div>


       {/* Red Chili Section */}
       <div id="red-chili-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/redChili.jpg`} alt="Red Chili" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Red Chili (Dry)</h3>
          <p style={styles.description}>
          Our red chili (dry) is vibrant, aromatic, and bursting with bold flavor, making it the perfect ingredient to add a fiery kick and depth to a wide range of dishes. Whether ground into a fine powder, crushed into flakes, or used whole, these chilies infuse your recipes with their signature heat and rich aroma. Beyond their culinary appeal, our red chilies are a powerhouse of nutrition. They are rich in capsaicin, a compound known for its metabolism-boosting and anti-inflammatory properties, as well as antioxidants that help protect the body from oxidative stress. Packed with essential vitamins like A, C, and E, they support immune health, promote healthy skin, and enhance overall well-being. Ideal for curries, marinades, sauces, or seasoning, our red chili (dry) is a versatile and flavorful addition that brings both heat and health benefits to your kitchen.            <div style={styles.question}>Why Choose Our Red Chili (Dry)?</div>
            <ul>
              <li style={styles.point}>Handpicked and sun-dried for maximum flavor.</li>
              <li style={styles.point}>Perfect for cooking, powders, and seasoning.</li>
              <li style={styles.point}>High in antioxidants and natural spiciness.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Himalayan Salt Section */}
      <div id="himalayan-salt-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/Himalayan-Pink-Salt.jpg`} alt="Himalayan Salt" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Himalayan Pink Salt</h3>
          <p style={styles.description}>
          Our Himalayan salt is pure, natural, and unrefined, carefully sourced from the pristine Himalayan mountains to bring you the finest quality. With its signature pink hue and rich mineral content, this salt is a healthier and more flavorful alternative to regular table salt. It contains over 80 essential minerals, including calcium, magnesium, and potassium, which support overall health, maintain electrolyte balance, and promote proper hydration. Its naturally balanced sodium content enhances the flavor of your dishes while contributing to a wholesome diet. Perfect for cooking, seasoning, or even as a finishing salt, our Himalayan salt adds a touch of gourmet sophistication to any meal. Additionally, it is free from additives and preservatives, making it a pure and natural choice for your kitchen and your health.            <div style={styles.question}>Why Choose Our Himalayan Salt?</div>
            <ul>
              <li style={styles.point}>Rich in essential minerals and trace elements.</li>
              <li style={styles.point}>Available in crystal, granular, and fine powder forms.</li>
              <li style={styles.point}>Perfect for cooking, seasoning, and wellness uses.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Maize Section */}
      <div id="maize-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/makai.jpg`} alt="Maize" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Maize (Makai)</h3>
          <p style={styles.description}>
          Our maize (makai) is fresh, wholesome, and incredibly versatile, making it a staple ingredient in a wide variety of dishes across cultures. Its naturally sweet and nutty flavor pairs beautifully with soups, stews, salads, and baked goods, or it can be enjoyed grilled, boiled, or roasted as a delicious snack. Packed with nutrition, maize is a rich source of dietary fiber, which promotes healthy digestion and helps regulate cholesterol levels. It is also loaded with essential vitamins, including B-complex vitamins like thiamine and niacin, which support energy production and nervous system health. Additionally, maize is a great source of natural carbohydrates, providing sustained energy to fuel your day. With its abundance of nutrients and culinary versatility, our maize is the perfect ingredient to elevate your meals while nourishing your body.            <div style={styles.question}>Why Choose Our Maize (Makai)?</div>
            <ul>
              <li style={styles.point}>Harvested from the finest farms for top quality.</li>
              <li style={styles.point}>Perfect for flour, snacks, and traditional recipes.</li>
              <li style={styles.point}>Rich in nutrients and natural flavor.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Rice Section */}
      <div id="rice-section" style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/assets/rice.jpg`} alt="Rice" style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.sectionTitle}>Rice</h3>
          <p style={styles.description}>
          Our rice varieties are meticulously selected and processed to deliver premium quality and unparalleled taste. Whether you’re preparing a festive biryani, a comforting bowl of fried rice, or a simple steamed side dish, our rice is the perfect choice for every culinary occasion. From the long, aromatic grains of fragrant basmati to versatile everyday staples, each variety is carefully curated to meet the highest standards of flavor, texture, and nutritional value. Rich in essential carbohydrates, our rice provides a natural source of energy and pairs seamlessly with a wide range of dishes, from savory curries to hearty stews. With consistent quality and delightful taste in every grain, our rice brings wholesome goodness and a touch of excellence to your table.            <div style={styles.question}>Why Choose Our Rice?</div>
            <ul>
              <li style={styles.point}>Available in a variety of premium types: basmati, non-basmati, and more.</li>
              <li style={styles.point}>Perfect for biryanis, pilafs, and everyday meals.</li>
              <li style={styles.point}>Sorted and packed to maintain freshness and quality.</li>
            </ul>
          </p>
        </div>
      </div>






      </div>
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5em',
      marginBottom: '30px',
      color: '#4CAF50',
      fontWeight: '700',
    },
    categoryContainer: {
      marginBottom: '40px',
    },
    categoryHeading: {
      fontSize: '1.75em',
      marginBottom: '20px',
      textTransform: 'uppercase',
      fontWeight: '600',
      textAlign: 'center',
      color: '#007BFF',
    },
    section: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '20px',
      alignItems: 'center',
    },
    imageWrapper: {
      flex: 1,
      marginRight: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      objectFit: 'cover',
      maxHeight: '300px', // Set a max height to keep images consistent
    },
    textWrapper: {
      flex: 2,
      paddingLeft: '20px',
    },
    sectionTitle: {
      fontSize: '1.5em',
      marginBottom: '15px',
      fontWeight: '600',
      color: '#333',
    },
    description: {
      fontSize: '1em',
      marginBottom: '15px',
      lineHeight: '1.6',
      color: '#555',
    },
    question: {
      fontWeight: 'bold',
      marginTop: '15px',
      color: '#333',
    },
    point: {
      marginBottom: '10px',
      fontSize: '1em',
      color: '#555',
    },
    // Responsiveness: Mobile-first design
    '@media (max-width: 768px)': {
      container: {
        padding: '10px',
      },
      heading: {
        fontSize: '2em',
        marginBottom: '20px',
      },
      categoryHeading: {
        fontSize: '1.5em',
        marginBottom: '15px',
      },
      section: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '30px',
      },
      imageWrapper: {
        marginBottom: '15px',
        maxWidth: '100%',
      },
      image: {
        maxHeight: '250px',
      },
      textWrapper: {
        flex: 1,
        textAlign: 'center',
      },
      sectionTitle: {
        fontSize: '1.2em',
      },
      description: {
        fontSize: '0.95em',
      },
      question: {
        fontSize: '1em',
      },
      point: {
        fontSize: '0.95em',
      },
    },
    '@media (max-width: 480px)': {
      heading: {
        fontSize: '1.75em',
      },
      sectionTitle: {
        fontSize: '1.1em',
      },
      description: {
        fontSize: '0.9em',
      },
      point: {
        fontSize: '0.9em',
      },
    },
  };
  
  

export default Fruits;
