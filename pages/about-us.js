import React from 'react'
import {
  Typography,
  Card
} from '@mui/material';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <Layout title="Login">
      <Typography component="h2" variant="h2">
        About us
      </Typography>
      <Card>
        <Typography component="h3" variant="h3">
          TOMMY HILFIGER
        </Typography>
        <p>
          is one of the world’s leading designer lifestyle brands and is internationally recognized for celebrating the essence of classic American cool style, featuring preppy with a twist designs.
        </p>
        <p>
          Founded in 1985, Tommy Hilfiger delivers premium styling, quality and value to consumers worldwide under the TOMMY HILFIGER and TOMMY JEANS labels, with a breadth of collections including Tommy Hilfiger Collection, men’s, women’s and kids’ sportswear, denim, accessories, and footwear. In addition, the brand is licensed for a range of products, including fragrances, eyewear, watches and home furnish-ings. Founder Tommy Hilfiger remains the company’s Principal Designer and provides leadership and direction for the design process.
        </p>
        <p>
          Tommy Hilfiger, which was acquired by PVH Corp. in 2010, is a global apparel and retail company with more than 16,000 associates worldwide. With the support of strong global consumer recognition, Tommy Hilfiger has built an extensive distribution network in over 100 countries and more than 2,000 retail stores throughout North America, Europe, Latin America and the Asia Pacific region. Global retail sales of the TOMMY HILFIGER brand were US $6.9 billion in 2020.
        </p>
      </Card>
    </Layout>
  )

}

export default AboutUs