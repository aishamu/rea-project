import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>عن </span>استشارة
          </h3>
    
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>عن استشارة</h3>
              <div className='about-description'>
                <p>
                من نحن

نحن اشبه بجامعة علمية قررت العمل في القطاع الخاص بالتعاون مع قيادات اكاديمية مرموقة و ذات خبرات علمية و عملية عريضة فاننا في استشارة نتيح لعملاؤنا صفوة خبرات المجتمع الاكاديمي في المجالات الاداريةو الصناعية و نطمح بذلك ان نكوم جهة موثوقة ذات رأي سديد و مرجع مهم و ناصح آمين للراغبين في تحصيل استشارة مبنية على علم و دراية و تهتم بأدق التفاصيل
                </p>
        
               </div>

              
            </div>
            
          </div>
          <br></br>
          <div className='row'>
    
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>رؤيتنا</h3>
              <div className='about-description'>
                <p>
                

ان نكون افضل جهة استشارية في المملكة في تقديم الاستشارات و الحلول المهنية التي تتعلق بالمجالات الصناعية و الادارية بكل مصداقية و احترافية
                </p>
      
               </div>

              
            </div>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>رسالتنا</h3>
              <div className='about-description'>
                <p>
          


                توفير اكبر شبكة استشارية في ظل ادارة و بيئة محترفة تتيح لعملائنا اقصى استفادة يوفرها العلم في المجالات الاداريةو الصناعية و تساهم في اطلاق امكانياتهم و تطويرها                </p>
        
               </div>

              
            </div>
            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;



