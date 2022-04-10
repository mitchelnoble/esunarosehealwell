import React from 'react';

/* must remove borders in table */
const Menu = () => {
  return (
    <>
      <h1>Services</h1>
      <hr />
      <p>Each session includes my certified knowledge and application of Aromatherapy, Reiki, and various modalities of massage therapy for a truly holistic experience. To further assist in your healing journey, I also provide complementary organic oils, hot tea, and high-quality alkaline water.</p>
      <hr/>
      <h3>Complementary Services:</h3>
      <ul>
        <li>Aromatherapy</li>
        <li>Organic oils</li>
        <li>Hot tea</li>
        <li>Alkaline water</li>
      </ul>
      <h3>Office Session Times & Rates</h3>
      <br />
      <table>
      <tr>
      <td>60 minute</td>
      <td>$150</td>
      </tr>
      <tr>
      <td>75 minute</td>
      <td>$170</td>
      </tr>
      <tr>
      <td>90 minute</td>
      <td>$200</td>
      </tr>
      <tr>
      <td>120 minute</td>
      <td>$250</td>
      </tr>
      </table>
      <br />
      <h3>Packaged Sessions</h3>
      <p>Multiple sessions can also be purchased ahead of time to save you precious time and money.</p>
      <br />
      <table>
      <tr>
      <td>6 x 60 minute sessions</td>
      <td><s>$900</s></td>
      <td>$750</td>
      </tr>
      <tr>
      <td>6 x 75 minute sessions</td>
      <td><s>$1020</s></td>
      <td>$850</td>
      </tr>
      <tr>
      <td>6 x 90 minute sessions</td>
      <td><s>$1200</s></td>
      <td>$1000</td>
      </tr>
      <tr>
      <td>6 x 120 minute sessions</td>
      <td><s>$1500</s></td>
      <td>$1250</td>
      </tr>
      </table>
      
    </>
  );
};

export default Menu;