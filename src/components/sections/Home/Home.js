import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpg';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'> الاستشارة هي فن استخدام العقول</h1>
            <h2 className='sub-title mb-4'>
        
فبدلا من ان تفكر بعقل واحد دع عقولا اخرى تساعدك
            </h2>
            <Link target='about' classes='btn btn-primary rounded-0 mr-2'>
            عن استشارة
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
             اتصل بنا
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
