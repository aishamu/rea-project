import React from 'react';

import Section from '../../../HOC/Section';

const contact = () => {
  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>اتصل </span>  بنا
          </h3>
   
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
 



            <div class="info-bar">
    <div class="container">
      <div class="row">

        <div class="col-md-8">
          <div class="location text-center">
            <h3><span class="glyphicon glyphicon-map-marker icon-location"></span></h3>
            <h4>Location</h4>
            <h5>Near King medical hall Moradabad, Uttar Pradesh, india 244001</h5>
          
 
</div>
        </div>
 
        <div class="col-md-8">
          <div class="email text-center">
            <h3><span class="glyphicon glyphicon-envelope icon-email"></span></h3>
            <h4>Email</h4>
            <h5>Bilalahmedim@gmail.com</h5>
          </div>
        </div>
 
 
        <div class="col-md-8">
          <div class="phone text-center">
            <h3><span class="glyphicon glyphicon-phone icon-phone"></span></h3>
            <h4>Phone</h4>
            <h5>none</h5>
          </div>
        </div>
 
      </div>
    </div>
  </div>
 
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default contact;
