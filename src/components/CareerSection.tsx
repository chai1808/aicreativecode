import React from 'react';
import { CAREER_DATA, type CareerItem } from '../types/CareerData';

const CareerSection: React.FC = () => {
  return (
    <div className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">Career</span>
      </h2>

      <div className="historydl1 -effect _1"><div className="inwrap"><p className="param"></p><dl>
        {CAREER_DATA.map((item: CareerItem, index: number) => (
          <div key={index}>
            <dt>{item.date}</dt>
            <dd>
              <p className="main">{item.mainTitle}</p>
              <div className="sub">
                <p>{item.subDescription}</p>
                <ul>
                  {item.skills.map((skill: string, skillIndex: number) => (
                    <li key={skillIndex}>・{skill}</li>
                  ))}
                </ul>
              </div>
            </dd>
          </div>
        ))}
      </dl></div></div></div>
  );
};

export default CareerSection;
